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
import { WordStageThreeService } from 'src/app/services/word/word-stage-three.service';
import { ActivityHintDialogComponent } from 'src/app/shared/shared.components/activity-hint-dialog/activity-hint-dialog.component';
import { ComponentReloadFunctionalityComponent } from 'src/app/shared/shared.components/component-reload-functionality/component-reload-functionality.component';
import {
  addWordLevelStageOneResult,
  addWordLevelStageThreeResult,
} from 'src/app/views/literacy-test/store/word-level-result/word-level-result.actions';
import { WordLevelResultState } from 'src/app/views/literacy-test/store/word-level-result/word-level-result.reducer';
import { KeySound } from 'src/assets/data/key-sound';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent extends ComponentReloadFunctionalityComponent implements OnInit, OnDestroy {
  boardActivityHint: string = 'Make a sentence';
  testNumber: number = 0;
  checkTestCompletion: any;
  keyList: any[] = [];

  testList = testList;
  previewList: any[] = [];
  resultItemList: any[] = [];
  previewText: string = '';
  activityHint: any =
    'Make sentences from the jumbled four (letters and words) green boxes below.';

  Subscriptions: Subscription[] = [];
  gameSessionId!: string;
  stageNumber: number = 3;
  gameLevel = GameLevel.WORD;
  isLaunchTest!: boolean;
  btnTitle = "Start";
  // isFinishedTest: boolean = true;
  isFinishedTest: boolean = false;
  // 
  levelTitle!: string;
  gameType = GameType.LITERACY;
  constructor(
    private _gameSvc: GameService,
    public dialog: MatDialog,
    private store: Store<WordLevelResultState>,
    public override _router: Router,
    private _wordStageThreeSvc: WordStageThreeService,
    private _playSoundSvc: PlaySoundService, private _launchGameSvc: LaunchGameService
  ) {
    super(_router);
  }

  override ngOnInit(): void {

    this._launchGameSvc.launchGameBehaviorSubject.subscribe((msg: any) => {
      if (msg) {
        this.isLaunchTest = msg
      }
    })


    let testList = this.testList;
    if (testList) {
      new ShuffleArray(testList).shuffle();
    }
    let testKeyArr = this.testList[this.testNumber]?.testKeys;
    if (testKeyArr) {
      new ShuffleArray(testKeyArr).shuffle();
    }

    // 
    this.loadTestContent();
    this.onCheckTestCompletion();
    this.onGetGameSessionId();
  }


  playBGSound() {
    this._playSoundSvc.playLiteracyBGSound();
    this._launchGameSvc.sendLaunchGameBehaviorSubject(true)
  }

  stopBGSound() {
    this._launchGameSvc.sendLaunchGameBehaviorSubject(false)
    this._playSoundSvc.stopLiteracyBGSound();
  }


  playLevelCompletedSound() {
    this._playSoundSvc.playStageCompletionSound();
    this._launchGameSvc.sendLaunchGameBehaviorSubject(true)
  }

  stopLevelCompletedSound() {
    this._playSoundSvc.stopStageCompletionSound();
  }

  onCheckTestCompletion() {
    this.checkTestCompletion = this.testList.filter(
      (test: any) => test.isTestComplete == true
    );
  }

  loadTestContent() {
    let keys = this.testList[this.testNumber]?.testKeys;
    this.keyList = new ShuffleArray(keys).shuffle();
    this.resultItemList = [];
  }

  onSelectAlphabet(alphabet: any) {
    this.previewText = alphabet.name;
    let testAnswerLength = this.testList[this.testNumber].answer.length
    setTimeout(() => {
      this.previewText = '';
    }, 500);

    let isExist = this.resultItemList.findIndex(
      (item: any) => item == alphabet.name
    );
    let item = this.resultItemList[isExist];
    if (item) {
      return;
    } else {
      if (this.resultItemList.length < testAnswerLength) {
        this.resultItemList.push(alphabet.name);
        let playSound = new PlaySound({ vn: KeySound.CorrectAnswer_Note });
        playSound.playAlphabetVoice();
      }
      if (this.resultItemList.length == testAnswerLength) {
        this.testResult();
      }
    }
  }

  testResult() {
    let expectedResult = JSON.stringify(this.testList[this.testNumber].answer);
    let selectedResult = JSON.stringify(this.resultItemList);
    if (expectedResult != selectedResult) {
      // console.warn('incorrect!');
      let playSound = new PlaySound({ vn: KeySound.WrongAnswer_Note });
      playSound.playAlphabetVoice();
      setTimeout(() => {
        alert('Incorrect sentence, try again!');
      }, 1200);
    }
    if (expectedResult === selectedResult) {
      this.testList[this.testNumber].isTestComplete = true;
      this.testNumber++;
      setTimeout(() => {
        // alert('completed!');
        this.onCheckTestCompletion()
        // if(this.checkTestCompletion.length != this.testList.length){
        //   this.testNumber++;
        //   console.log('this.testList: ', this.testList);
        // }
        if (this.checkTestCompletion.length < this.testList.length) {
          this.loadTestContent();
        }
        this.testGameCompletion();
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

  testGameCompletion() {
    this.onCheckTestCompletion();
    if (this.checkTestCompletion.length == this.testList.length) {
      const Payload: ActivityAnswer = {
        session_id: this.gameSessionId,
        answer: '1',
        data: [...this.checkTestCompletion],
      };
      this.store.dispatch(addWordLevelStageThreeResult({ payload: Payload }));
      this._wordStageThreeSvc.addWordLevelResultBehaviour.subscribe(
        (msg: any) => {
          if (msg) {
            // console.log('msg: ', msg);
            // this._router.navigate([
            //   `/${GameType.LITERACY}/stage-completion/${this.gameLevel}/${this.stageNumber}`,
            // ]);
            this.isFinishedTest = true;
            this.stopBGSound()
            this.playLevelCompletedSound()
          }
        }
      );
    }
    return;
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
    // this.resultItemList = [];
    // this.testNumber = 0;
    // this.loadTestContent();
    // for (let i = 0; i < this.testList.length; i++) {
    //   this.testList[i].isTestComplete = false;
    // }
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
    isTestComplete: false,
    testKeys: [
      {
        name: 'i',
        isWrongChoice: false,
      },
      {
        name: 'are',
        isWrongChoice: false,
      },
      {
        name: 'a',
        isWrongChoice: false,
      },
      {
        name: 'local',
        isWrongChoice: false,
      },
      {
        name: 'have',
        isWrongChoice: false,
      },
      {
        name: 'dog',
        isWrongChoice: false,
      },
    ],
    answer: ['i', 'have', 'a', 'dog'],
  },
  {
    testName: 'test-2',
    isTestComplete: false,
    testKeys: [
      {
        name: 'this',
        isWrongChoice: false,
      },
      {
        name: 'just',
        isWrongChoice: false,
      },
      {
        name: 'not',
        isWrongChoice: false,
      },
      {
        name: 'my',
        isWrongChoice: false,
      },
      {
        name: 'is',
        isWrongChoice: false,
      },
      {
        name: 'cat',
        isWrongChoice: false,
      },
    ],
    answer: ['this', 'is', 'my', 'cat'],
  },
];