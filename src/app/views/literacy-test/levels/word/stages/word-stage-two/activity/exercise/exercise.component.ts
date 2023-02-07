import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { PlaySound } from 'src/app/models/class/play-sound';
import { ShuffleArray } from 'src/app/models/class/shuffle-array';
import { ActivityAnswer } from 'src/app/models/interface/game';
import { GameLevel } from 'src/app/models/interface/game-level';
import { GameType } from 'src/app/models/interface/game-type';
import { GameService } from 'src/app/services/game.service';
import { LaunchGameService } from 'src/app/services/launch-game.service';
import { PlaySoundService } from 'src/app/services/play-sound.service';
import { WordStageTwoService } from 'src/app/services/word/word-stage-two.service';
import { ActivityHintDialogComponent } from 'src/app/shared/shared.components/activity-hint-dialog/activity-hint-dialog.component';
import { ComponentReloadFunctionalityComponent } from 'src/app/shared/shared.components/component-reload-functionality/component-reload-functionality.component';
import { addWordLevelStageTwoResult } from 'src/app/views/literacy-test/store/word-level-result/word-level-result.actions';
import { WordLevelResultState } from 'src/app/views/literacy-test/store/word-level-result/word-level-result.reducer';
import { KeySound } from 'src/assets/data/key-sound';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent extends ComponentReloadFunctionalityComponent implements OnInit, OnDestroy {
  boardActivityHint: string = 'Reveal the words connected to the center word';
  testNumber: number = 0;
  checkTestCompletion: any;
  keyList: any[] = [];

  testList = testList;
  previewList: any[] = [];
  resultItemList: any[] = [];
  previewText: string = '';
  activityHint: any =
    'Select four correct words in the green boxes connected to the word in the center';

  Subscriptions: Subscription[] = [];
  gameSessionId!: string;
  stageNumber: number = 2;
  gameLevel = GameLevel.WORD;
  isLaunchTest!: boolean;
  btnTitle = "Start";
  // isFinishedTest: boolean = true;
  isFinishedTest: boolean = false;
  // 
  levelTitle!: string;
  gameType = GameType.LITERACY;
  test!: {
    hint: string;
    keyList: { name: string; isWrongChoice: boolean }[];
    answer: any[];
  };
  constructor(
    private _gameSvc: GameService,
    public dialog: MatDialog,
    private store: Store<WordLevelResultState>,
    public override _router: Router,
    private _wordStageTwoSvc: WordStageTwoService,
    private _playSoundSvc: PlaySoundService, private _launchGameSvc: LaunchGameService
  ) {
    super(_router);
  }


  override ngOnInit(): void {
    this.onGetGameSessionId();
    this._launchGameSvc.launchGameBehaviorSubject.subscribe((msg: any) => {
      if (msg) {
        this.isLaunchTest = msg
      }
    })

    let testList = this.testList;
    this.testList = new ShuffleArray(testList).shuffle();
    let testKeyArr = this.testList[this.testNumber]?.testKeys;
    new ShuffleArray(testKeyArr).shuffle();
    let answerArr = this.testList[this.testNumber]?.answer;
    new ShuffleArray(answerArr).shuffle();
    this.onFillNewTest();
  }


  playBGSound() {
    this._playSoundSvc.playLiteracyBGSound();
    this._launchGameSvc.sendLaunchGameBehaviorSubject(true)
  }

  stopBGSound() {
    this._playSoundSvc.stopLiteracyBGSound();
    this._launchGameSvc.sendLaunchGameBehaviorSubject(false)
  }


  playLevelCompletedSound() {
    this._playSoundSvc.playStageCompletionSound();
    this._launchGameSvc.sendLaunchGameBehaviorSubject(true)
  }

  stopLevelCompletedSound() {
    this._playSoundSvc.stopStageCompletionSound();
    this._launchGameSvc.sendLaunchGameBehaviorSubject(false)
  }

  onFillNewTest() {
    if (this.testNumber == this.testList.length) {
      const Payload: ActivityAnswer = {
        session_id: this.gameSessionId,
        answer: '1',
        data: [...this.testList],
      };
      this.store.dispatch(addWordLevelStageTwoResult({ payload: Payload }));
      this._wordStageTwoSvc.addWordLevelResultBehaviour.subscribe(
        (msg: any) => {
          if (msg) {
            // console.log('msg: ', msg);
            // this._router.navigate([
            //   `/${GameType.LITERACY}/stage-completion/${this.gameLevel}/${this.stageNumber}`,
            // ]);
            this.isFinishedTest = true;
            this.stopBGSound()
            this.playLevelCompletedSound();
          }
        }
      );
      return;
    }

    this.test = {
      hint: this.testList[this.testNumber].hint,
      keyList: this.testList[this.testNumber].testKeys,
      answer: this.testList[this.testNumber].answer,
    };
  }

  onSelectAlphabet(alphabet: any) {
    let isExist = this.test.answer.findIndex((x) => x.name === alphabet.name);
    let item = this.test.answer[isExist];
    if (item) {
      item.isCorrect = true;
      let playSound = new PlaySound({ vn: KeySound.CorrectAnswer_Note });
      playSound.playAlphabetVoice();
      let correctAnswers = this.test.answer.filter(
        (item: any) => item.isCorrect == true
      );
      if (correctAnswers.length == this.test.answer.length) {
        this.testNumber++;
        setTimeout(() => {
          this.onFillNewTest();
        }, 1500);
      }
    } else {
      alphabet.isWrongChoice = true;
      let playSound = new PlaySound({ vn: KeySound.WrongAnswer_Note });
      playSound.playAlphabetVoice();
      setTimeout(() => {
        alphabet.isWrongChoice = false;
      }, 1000);
    }
  }

  onGetGameSessionId() {
    this._gameSvc.LoadGameSession();
    this._gameSvc.gameSessionBehaviorSubject.subscribe({
      next: (msg: any) => {
        this.gameSessionId = msg?.session_id;
      },
    });
  }

  onReadHint() {
    this.dialog.open(ActivityHintDialogComponent, {
      width: '100%',
      maxWidth: '445px',
      data: {
        hint: this.activityHint,
      },
    });
  }

  refreshGame() {
    this.reloadComponent(true);
    this.testNumber = 0;
    this.testList.forEach((element: any) => {
      element.testKeys.forEach((key: any) => {
        key.isWrongChoice = false;
      });
      element.answer.forEach((answer: any) => {
        answer.isCorrect = false;
      });
    });
    this.onFillNewTest();
  }

  ngOnDestroy(): void {
    this.stopBGSound()
    this.Subscriptions.forEach((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    });
  }
}

const testList = [
  {
    testName: 'test-1',
    // isTestComplete: false,
    hint: 'classroom',
    testKeys: [
      {
        name: 'cocoa',
        isWrongChoice: false,
      },
      {
        name: 'blackboard',
        isWrongChoice: false,
      },
      {
        name: 'duster',
        isWrongChoice: false,
      },
      {
        name: 'chair',
        isWrongChoice: false,
      },
      {
        name: 'juice',
        isWrongChoice: false,
      },
      {
        name: 'desk',
        isWrongChoice: false,
      },
    ],
    answer: [
      {
        name: 'blackboard',
        isCorrect: false,
      },
      {
        name: 'desk',
        isCorrect: false,
      },
      {
        name: 'duster',
        isCorrect: false,
      },
      {
        name: 'chair',
        isCorrect: false,
      },
    ],
  },
  {
    testName: 'test-2',
    // isTestComplete: false,
    hint: 'church',
    testKeys: [
      {
        name: 'calabash',
        isWrongChoice: false,
      },
      {
        name: 'bible',
        isWrongChoice: false,
      },
      {
        name: 'altar',
        isWrongChoice: false,
      },
      {
        name: 'dagger',
        isWrongChoice: false,
      },
      {
        name: 'pulpit',
        isWrongChoice: false,
      },
      {
        name: 'rosary',
        isWrongChoice: false,
      },
    ],
    answer: [
      {
        name: 'rosary',
        isCorrect: false,
      },
      {
        name: 'altar',
        isCorrect: false,
      },
      {
        name: 'pulpit',
        isCorrect: false,
      },
      {
        name: 'bible',
        isCorrect: false,
      },
    ],
  },
  {
    testName: 'test-3',
    // isTestComplete: false,
    hint: 'kitchen',
    testKeys: [
      {
        name: 'knife',
        isWrongChoice: false,
      },
      {
        name: 'duster',
        isWrongChoice: false,
      },
      {
        name: 'plate',
        isWrongChoice: false,
      },
      {
        name: 'pot',
        isWrongChoice: false,
      },
      {
        name: 'spoon',
        isWrongChoice: false,
      },
      {
        name: 'cutlas',
        isWrongChoice: false,
      },
    ],
    answer: [
      {
        name: 'spoon',
        isCorrect: false,
      },
      {
        name: 'plate',
        isCorrect: false,
      },
      {
        name: 'pot',
        isCorrect: false,
      },
      {
        name: 'knife',
        isCorrect: false,
      },
    ],
  },
];