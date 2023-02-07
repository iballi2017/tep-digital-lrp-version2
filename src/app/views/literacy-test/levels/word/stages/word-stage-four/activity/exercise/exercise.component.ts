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
import { WordStageFourService } from 'src/app/services/word/word-stage-four.service';
import { WordStageThreeService } from 'src/app/services/word/word-stage-three.service';
import { ActivityHintDialogComponent } from 'src/app/shared/shared.components/activity-hint-dialog/activity-hint-dialog.component';
import { ComponentReloadFunctionalityComponent } from 'src/app/shared/shared.components/component-reload-functionality/component-reload-functionality.component';
import {
  addWordLevelStageFourResult,
  addWordLevelStageThreeResult,
} from 'src/app/views/literacy-test/store/word-level-result/word-level-result.actions';
import { WordLevelResultState } from 'src/app/views/literacy-test/store/word-level-result/word-level-result.reducer';
import { KeySound } from 'src/assets/data/key-sound';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent
  extends ComponentReloadFunctionalityComponent
  implements OnInit, OnDestroy
{
  boardActivityHint: string = 'Build connecting sentences using the word FISH';
  testNumber: number = 0;
  checkTestCompletion: any;
  keyList: any[] = [];

  testList = [...testList];
  previewList: any[] = [];
  resultItemList: any[] = [];
  previewText: string = '';
  activityHint: any =
    'Select the right words or letters in the green boxes to build sentences with the word FISH';

  Subscriptions: Subscription[] = [];
  gameSessionId!: string;
  stageNumber: number = 4;
  gameLevel = GameLevel.WORD;
  isLaunchTest!: boolean;
  btnTitle = 'Start';
  // isFinishedTest: boolean = true;
  isFinishedTest: boolean = false;
  //
  levelTitle!: string;
  gameType = GameType.LITERACY;
  isWrongSelection!: boolean;
  constructor(
    private _gameSvc: GameService,
    public dialog: MatDialog,
    private store: Store<WordLevelResultState>,
    public override _router: Router,
    private _wordStageFourSvc: WordStageFourService,
    private _playSoundSvc: PlaySoundService,
    private _launchGameSvc: LaunchGameService
  ) {
    super(_router);
  }

  override ngOnInit(): void {
    this._launchGameSvc.launchGameBehaviorSubject.subscribe((msg: any) => {
      if (msg) {
        this.isLaunchTest = msg;
      }
    });
    // let testList = this.testList;
    // console.warn("testList: ", testList)
    // if (testList) {
    //   let x = new ShuffleArray(testList).shuffle();
    //   console.warn("x: ", x)
    // }

    this.loadTestContent();
    this.onCheckTestCompletion();
    this.onGetGameSessionId();
    let testKeyArr = this.testList[this.testNumber]?.testKeys;
    if (testKeyArr) {
      this.keyList = new ShuffleArray(testKeyArr).shuffle();
    }
  }

  playBGSound() {
    this._playSoundSvc.playLiteracyBGSound();
    this._launchGameSvc.sendLaunchGameBehaviorSubject(true);
  }

  stopBGSound() {
    this._playSoundSvc.stopLiteracyBGSound();
    this._launchGameSvc.sendLaunchGameBehaviorSubject(false);
  }

  playLevelCompletedSound() {
    this._playSoundSvc.playStageCompletionSound();
    this._launchGameSvc.sendLaunchGameBehaviorSubject(true);
  }

  stopLevelCompletedSound() {
    this._playSoundSvc.stopStageCompletionSound();
    this._launchGameSvc.sendLaunchGameBehaviorSubject(false);
  }
  onCheckTestCompletion() {
    this.checkTestCompletion = this.testList.filter(
      (test: any) => test.isTestComplete == true
    );
  }

  loadTestContent() {
    this.keyList = this.testList[this.testNumber]?.testKeys;
    this.resultItemList = [];
  }

  onSelectAlphabet(alphabet: any) {
    this.previewText = alphabet.name;
    let isExist = this.testList[this.testNumber].answer.findIndex(
      (item: any) => item.text == alphabet.name
    );
    let item = this.testList[this.testNumber].answer[isExist];
    if (item) {
      item.isShow = true;
      alphabet.isWrongChoice = false;
      let playSound = new PlaySound({ vn: KeySound.CorrectAnswer_Note });
      playSound.playAlphabetVoice();
    } else {
      alphabet.isWrongChoice = true;
      this.isWrongSelection = true;
      let playSound = new PlaySound({ vn: KeySound.WrongAnswer_Note });
      playSound.playAlphabetVoice();
    }
    setTimeout(() => {
      this.isWrongSelection = false;
      alphabet.isWrongChoice = null;
      this.previewText = '';
    }, 500);
    // setTimeout(() => {
    //   alphabet.isWrongChoice = null
    // }, 1000);
    // setTimeout(() => {
    this.testResult();
    // }, 1500);

    // let testAnswerLength = this.testList[this.testNumber].answer.length
    // let isExist = this.resultItemList.findIndex(
    //   (item: any) => item == alphabet.name
    // );
    // let item = this.resultItemList[isExist];
    // if (item) {
    //   return;
    // } else {
    //   if (this.resultItemList.length < testAnswerLength) {
    //     this.resultItemList.push(alphabet.name);
    //   }
    //   if (this.resultItemList.length == testAnswerLength) {
    //     this.testResult();
    //   }
    // }
  }

  testResult() {
    let isCompleted = this.testList[this.testNumber].answer.filter(
      (list: any) => {
        return list.isShow == true;
      }
    );

    if (isCompleted.length == this.testList[this.testNumber].answer.length) {
      // alert("completed!");
      this.testList[this.testNumber].isTestComplete = true;
      setTimeout(() => {
        this.testNumber++;
        this.onCheckTestCompletion();
        if (this.checkTestCompletion.length < this.testList.length) {
          this.loadTestContent();
        } else {
          this.testGameCompletion();
        }
      }, 1200);
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
      this.store.dispatch(addWordLevelStageFourResult({ payload: Payload }));
      this._wordStageFourSvc.addWordLevelResultBehaviour.subscribe(
        (msg: any) => {
          if (msg) {
            // console.log('msg: ', msg);
            // this._router.navigate([
            //   `/${GameType.LITERACY}/level-completion/${this.gameLevel}`
            // ]);
            this.isFinishedTest = true;
            this.stopBGSound();
            this.playLevelCompletedSound();
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
    for (let i = 0; i < this.testList.length; i++) {
      this.testList[i].isTestComplete = false;
      let answerItems = this.testList[i].answer.filter(
        (ans: any) => ans.hint != true
      );
      answerItems.forEach((ans: any) => (ans.isShow = false));
    }
  }

  ngOnDestroy(): void {
    this.stopBGSound();
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
        name: 'this',
        isWrongChoice: null,
      },
      {
        name: 'have',
        isWrongChoice: null,
      },
      {
        name: 'my',
        isWrongChoice: null,
      },
      {
        name: 'food',
        isWrongChoice: null,
      },
      {
        name: 'is',
        isWrongChoice: null,
      },
      {
        name: 'not',
        isWrongChoice: null,
      },
    ],
    // answer: ['this', 'is', 'my', 'fish'],
    answer: [
      {
        text: 'this',
        isShow: false,
      },
      {
        text: 'is',
        isShow: false,
      },
      {
        text: 'my',
        isShow: false,
      },
      {
        text: 'fish',
        isShow: true,
        hint: true,
      },
    ],
  },
  {
    testName: 'test-2',
    isTestComplete: false,
    testKeys: [
      {
        name: 'lives',
        isWrongChoice: null,
      },
      {
        name: 'have',
        isWrongChoice: null,
      },
      {
        name: 'my',
        isWrongChoice: null,
      },
      {
        name: 'water',
        isWrongChoice: null,
      },
      {
        name: 'in',
        isWrongChoice: null,
      },
      {
        name: 'not',
        isWrongChoice: null,
      },
    ],
    // answer: ['this', 'is', 'a', 'big', 'book'],
    answer: [
      {
        text: 'my',
        isShow: false,
      },
      {
        text: 'fish',
        isShow: true,
        hint: true,
      },
      {
        text: 'lives',
        isShow: false,
      },
      {
        text: 'in',
        isShow: false,
      },
      {
        text: 'water',
        isShow: false,
      },
    ],
  },
  {
    testName: 'test-3',
    isTestComplete: false,
    testKeys: [
      {
        name: 'my',
        isWrongChoice: null,
      },
      {
        name: 'have',
        isWrongChoice: null,
      },
      {
        name: 'did',
        isWrongChoice: null,
      },
      {
        name: 'i',
        isWrongChoice: null,
      },
      {
        name: 'is',
        isWrongChoice: null,
      },
      {
        name: 'love',
        isWrongChoice: null,
      },
    ],
    // answer: ['this', 'is', 'a', 'big', 'book'],
    answer: [
      {
        text: 'i',
        isShow: false,
      },
      {
        text: 'love',
        isShow: false,
      },
      {
        text: 'my',
        isShow: false,
      },
      {
        text: 'fish',
        isShow: true,
        hint: true,
      },
    ],
  },
];
