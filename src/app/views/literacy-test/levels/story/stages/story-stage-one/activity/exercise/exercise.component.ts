import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { PlaySound } from 'src/app/models/class/play-sound';
import { ShuffleArray } from 'src/app/models/class/shuffle-array';
import { ActivityAnswer } from 'src/app/models/interface/game';
import { GameLevel } from 'src/app/models/interface/game-level';
import { GameType, ProgramCompletion } from 'src/app/models/interface/game-type';
import { GameService } from 'src/app/services/game.service';
import { LaunchGameService } from 'src/app/services/launch-game.service';
import { PlaySoundService } from 'src/app/services/play-sound.service';
import { StoryStageOneService } from 'src/app/services/story/story-stage-one.service';
import { WordStageFourService } from 'src/app/services/word/word-stage-four.service';
import { ActivityHintDialogComponent } from 'src/app/shared/shared.components/activity-hint-dialog/activity-hint-dialog.component';
import { ComponentReloadFunctionalityComponent } from 'src/app/shared/shared.components/component-reload-functionality/component-reload-functionality.component';
import { LongTextReadDialogComponent } from 'src/app/views/literacy-test/completion/long-text-read-dialog/long-text-read-dialog.component';
import { addStoryLevelStageOneResult } from 'src/app/views/literacy-test/store/story-level-result/story-level-result.actions';
import { addWordLevelStageFourResult } from 'src/app/views/literacy-test/store/word-level-result/word-level-result.actions';
import { WordLevelResultState } from 'src/app/views/literacy-test/store/word-level-result/word-level-result.reducer';
import { KeySound } from 'src/assets/data/key-sound';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent extends ComponentReloadFunctionalityComponent implements OnInit, OnDestroy {
  boardActivityHint: string = 'Complete the short story';
  testNumber: number = 0;
  testBodyLoopNumber: number = 0;
  checkTestCompletion: any;
  keyList: any = [];
  previewList: any[] = [];
  resultItemList: any[] = [];
  previewText: string = '';
  activityHint: any =
    'Fill in the gaps using appropriate words in the green boxes below to write short story (Title and story).';

  Subscriptions: Subscription[] = [];
  gameSessionId!: string;
  stageNumber: number = 1;
  gameLevel = GameLevel.STORY;
  fullDataText: string = `
  Title: The boy Abba
  
  Short story: Abba is a boy He lives in Yola. He lives with his uncle. He has a black ball. Aba and his uncle play the ball all day.`;

  resultListResult = resultListResult;
  boardData = this.resultListResult[this.testNumber];
  isLaunchTest!: boolean;
  btnTitle = 'Start';
  // isFinishedTest: boolean = true;
  isFinishedTest: boolean = false;
  //
  levelTitle!: string;
  gameType = GameType.LITERACY;
  programStatus: any;
  Completed = ProgramCompletion.COMPLETED;
  isWrongSelection!: boolean;

  constructor(
    private _gameSvc: GameService,
    public dialog: MatDialog,
    private store: Store<WordLevelResultState>,
    public override _router: Router,
    private _storyStageOneSvc: StoryStageOneService,
    private _playSoundSvc: PlaySoundService,
    private _launchGameSvc: LaunchGameService
  ) {
    super(_router);
  }

  override  ngOnInit(): void {
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
    // this.onCheckTestCompletion();
    this.onGetGameSessionId();
  }

  playBGSound() {
    this._playSoundSvc.playLiteracyBGSound();
    this._launchGameSvc.sendLaunchGameBehaviorSubject(true);
  }

  stopBGSound() {
    this._playSoundSvc.stopLiteracyBGSound();
    this._launchGameSvc.sendLaunchGameBehaviorSubject(false)
  }

  playLevelCompletedSound() {
    this._playSoundSvc.playStageCompletionSound();
    this._launchGameSvc.sendLaunchGameBehaviorSubject(true);
  }

  stopLevelCompletedSound() {
    this._playSoundSvc.stopStageCompletionSound();
  }

  // onCheckTestCompletion() {
  //   this.checkTestCompletion = this.testList.filter(
  //     (test: any) => test.isTestComplete == true
  //   );
  // }

  loadTestContent() {
    let x = this.resultListResult[this.testNumber];
    // console.warn("x: ", x)
    if (!x.title.isDone) {
      let testKeyArr = x?.title.keyList;
      if (testKeyArr) {
        this.keyList = new ShuffleArray(testKeyArr).shuffle();
      }
    } else {
      let testKeyArr = x?.body.bodyContent[this.testBodyLoopNumber].keyList;
      if (testKeyArr) {
        this.keyList = new ShuffleArray(testKeyArr).shuffle();
      }
    }

    // let testKeyArr = this.testList[this.testNumber]?.testKeys;
    // let testKeyArr = this.resultListResult[this.testNumber]?.body.bodyContent[0].keyList;
    // if (testKeyArr) {
    //   this.keyList = new ShuffleArray(testKeyArr).shuffle();
    // }

    // this.keyList = this.testList[this.testNumber]?.testKeys;
    // this.resultItemList = [];
  }

  onSelectAlphabet(alphabet: any, _keyParent: string) {
    console.log("alphabet: ", alphabet)
    this.previewText = alphabet.label;
    // console.log("keyParent: ", _keyParent)
    // console.warn("keyType: ", keyParent.body)
    this.previewText = alphabet.label;
    setTimeout(() => {
      this.previewText = '';
    }, 500);

    let x = this.resultListResult[this.testNumber];
    switch (_keyParent) {
      case keyParent.title:
        let isExist = x.title.titleContent.findIndex(
          (item: any) => item.text == alphabet.label
        );
        // console.warn("item: ", x.title.titleContent[isExist]);
        if (x.title.titleContent[isExist]) {
          x.title.titleContent[isExist].display = true;
          let playSound = new PlaySound({ vn: KeySound.CorrectAnswer_Note });
          playSound.playAlphabetVoice();
          this.testResult(_keyParent);
        } else {
          alphabet.isWrongChoice = true;
          this.isWrongSelection = true;
          let playSound = new PlaySound({ vn: KeySound.WrongAnswer_Note });
          playSound.playAlphabetVoice();
        }
        setTimeout(() => {
          alphabet.isWrongChoice = null;
          this.isWrongSelection = false;
        }, 500);
        break;
      case keyParent.body:
        let isExist2 = x.body.bodyContent[
          this.testBodyLoopNumber
        ].content.findIndex((item: any) => item.text == alphabet.label);
        if (x.body.bodyContent[this.testBodyLoopNumber].content[isExist2]) {
          // console.warn("item: ", x.body.bodyContent[this.testBodyLoopNumber].content[isExist2]);
          x.body.bodyContent[this.testBodyLoopNumber].content[
            isExist2
          ].display = true;
          let playSound = new PlaySound({ vn: KeySound.CorrectAnswer_Note });
          playSound.playAlphabetVoice();
          this.testResult(_keyParent);
        } else {
          alphabet.isWrongChoice = true;
          this.isWrongSelection = true;
          let playSound = new PlaySound({ vn: KeySound.WrongAnswer_Note });
          playSound.playAlphabetVoice();
        }
        setTimeout(() => {
          alphabet.isWrongChoice = null;
          this.isWrongSelection = false;
        }, 500);
        break;

      default:
        break;
    }
  }

  testResult(_keyParent: any) {
    let x = this.resultListResult[this.testNumber];
    if (_keyParent === keyParent.title) {
      let isCompleted = x.title.titleContent.filter((list: any) => {
        return list.display == true;
      });
      if (isCompleted.length == x.title.titleContent.length) {
        x.title.isDone = true;
        x.title.active = false;
        x.body.active = true;
        this.keyList = x?.body.bodyContent[this.testBodyLoopNumber].keyList;
      }
    }
    if (_keyParent === keyParent.body) {
      let isBodyContentCompleted = x.body.bodyContent[
        this.testBodyLoopNumber
      ].content.filter((list: any) => {
        return list.display == true;
      });
      if (
        isBodyContentCompleted.length ==
        x.body.bodyContent[this.testBodyLoopNumber].content.length
      ) {
        if (this.testBodyLoopNumber + 1 < x.body.bodyContent.length) {
          setTimeout(() => {
            this.testBodyLoopNumber++;
            this.keyList = x?.body.bodyContent[this.testBodyLoopNumber].keyList;
          }, 1200);
        }
        this.isTestBodyCompleted(x?.body);
      }
    }
  }

  isTestBodyCompleted(BodyData: any) {
    for (let i = 0; i < BodyData.bodyContent.length; i++) {
      let isContentCompleted = BodyData.bodyContent[i].content.filter(
        (content: any) => content.display == true
      );
      if (isContentCompleted.length == BodyData.bodyContent[i].content.length) {
        BodyData.bodyContent[i].isItemTestDone = true;
      }
      this.isTestTestCompletion(BodyData);
    }
  }

  isTestTestCompletion(BodyData: any) {
    let testItems = [...BodyData.bodyContent];
    let isTestItemsCompleted = testItems.filter(
      (item: any) => item.isItemTestDone === true
    );
    if (isTestItemsCompleted.length == testItems.length) {
      BodyData.isDone = true;
      if (BodyData.isDone) {
        setTimeout(() => {
          // this.SubmitTest(this.resultListResult)
          this.openDialog(this.resultListResult);
        }, 1200);
      }
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
  openDialog(ResultListResult: any) {
    const dialogRef = this.dialog.open(LongTextReadDialogComponent, {
      width: '100%',
      maxWidth: '600px',
      data: {
        text: this.fullDataText,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      //
      if (result) {
        this.SubmitTest(ResultListResult);
      }
    });
  }

  SubmitTest(Data: any) {
    const Payload: ActivityAnswer = {
      session_id: this.gameSessionId,
      answer: '1',
      data: [...Data],
    };
    this.store.dispatch(addStoryLevelStageOneResult({ payload: Payload }));
    this._storyStageOneSvc.addStoryLevelResultBehaviour.subscribe(
      (msg: any) => {
        if (msg) {
          // console.log("msg: ", msg);
          this.programStatus = msg?.resultStatus?.literacyStatus
          // this._router.navigate([
          //   `/${GameType.LITERACY}/game-type-completion/${this.gameLevel}`
          // ]);
          this.isFinishedTest = true;
          this.stopBGSound();
          this.playLevelCompletedSound();
        }
      }
    );
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
    // this.reloadComponent(true);
    this.reloadPage();
    // this.testNumber = 0;
    // this.loadTestContent();
    // console.log('this.resultListResult: ', this.resultListResult);
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

const enum keyParent {
  title = 'title',
  body = 'body',
}

const resultListResult = [
  {
    title: {
      isDone: false,
      active: true,
      titleContent: [
        {
          text: 'the',
          display: false,
        },
        {
          text: 'boy',
          display: false,
        },
        {
          text: 'Abba',
          display: false,
        },
      ],
      keyList: [
        {
          label: 'no',
          isWrong: false,
          parent: keyParent.title,
        },
        {
          label: 'are',
          isWrong: false,
          parent: keyParent.title,
        },
        {
          label: 'the',
          isWrong: false,
          parent: keyParent.title,
        },
        {
          label: 'came',
          isWrong: false,
          parent: keyParent.title,
        },
        {
          label: 'Abba',
          isWrong: false,
          parent: keyParent.title,
        },
        {
          label: 'boy',
          isWrong: false,
          parent: keyParent.title,
        },
      ],
    },
    body: {
      isDone: false,
      active: false,
      bodyContent: [
        {
          statement: 1,
          isItemTestDone: false,
          content: [
            {
              text: 'Abba',
              display: false,
            },
            {
              text: 'is',
              display: false,
            },
            {
              text: 'a',
              display: false,
            },
            {
              text: 'boy',
              display: false,
            },
          ],
          keyList: [
            {
              label: 'is',
              isWrong: false,
              parent: keyParent.body,
            },
            {
              label: 'a',
              isWrong: false,
              parent: keyParent.body,
            },
            {
              label: 'are',
              isWrong: false,
              parent: keyParent.body,
            },
            {
              label: 'came',
              isWrong: false,
              parent: keyParent.body,
            },
            {
              label: 'Abba',
              isWrong: false,
              parent: keyParent.body,
            },
            {
              label: 'boy',
              isWrong: false,
              parent: keyParent.body,
            },
          ],
        },
        {
          statement: 2,
          isItemTestDone: false,
          content: [
            {
              text: 'he',
              display: false,
            },
            {
              text: 'lives',
              display: false,
            },
            {
              text: 'in',
              display: false,
            },
            {
              text: 'Yola',
              display: false,
            },
          ],
          keyList: [
            {
              label: 'he',
              isWrong: false,
              parent: keyParent.body,
            },
            {
              label: 'in',
              isWrong: false,
              parent: keyParent.body,
            },
            {
              label: 'Yola',
              isWrong: false,
              parent: keyParent.body,
            },
            {
              label: 'lives',
              isWrong: false,
              parent: keyParent.body,
            },
            {
              label: 'hey',
              isWrong: false,
              parent: keyParent.body,
            },
            {
              label: 'but',
              isWrong: false,
              parent: keyParent.body,
            },
          ],
        },
        {
          statement: 3,
          isItemTestDone: false,
          content: [
            {
              text: 'he',
              display: false,
            },
            {
              text: 'lives',
              display: false,
            },
            {
              text: 'with',
              display: false,
            },
            {
              text: 'his',
              display: false,
            },
            {
              text: 'uncle',
              display: false,
            },
          ],
          keyList: [
            {
              label: 'he',
              isWrong: false,
              parent: keyParent.body,
            },
            {
              label: 'in',
              isWrong: false,
              parent: keyParent.body,
            },
            {
              label: 'his',
              isWrong: false,
              parent: keyParent.body,
            },
            {
              label: 'lives',
              isWrong: false,
              parent: keyParent.body,
            },
            {
              label: 'with',
              isWrong: false,
              parent: keyParent.body,
            },
            {
              label: 'uncle',
              isWrong: false,
              parent: keyParent.body,
            },
          ],
        },
        {
          statement: 3,
          isItemTestDone: false,
          content: [
            {
              text: 'he',
              display: false,
            },
            {
              text: 'has',
              display: false,
            },
            {
              text: 'a',
              display: false,
            },
            {
              text: 'black',
              display: false,
            },
            {
              text: 'ball',
              display: false,
            },
          ],
          keyList: [
            {
              label: 'ball',
              isWrong: false,
              parent: keyParent.body,
            },
            {
              label: 'black',
              isWrong: false,
              parent: keyParent.body,
            },
            {
              label: 'has',
              isWrong: false,
              parent: keyParent.body,
            },
            {
              label: 'a',
              isWrong: false,
              parent: keyParent.body,
            },
            {
              label: 'have',
              isWrong: false,
              parent: keyParent.body,
            },
            {
              label: 'he',
              isWrong: false,
              parent: keyParent.body,
            },
          ],
        },
        {
          statement: 3,
          isItemTestDone: false,
          content: [
            {
              text: 'Abba',
              display: false,
            },
            {
              text: 'and',
              display: false,
            },
            {
              text: 'his',
              display: false,
            },
            {
              text: 'uncle',
              display: false,
            },
            {
              text: 'play',
              display: false,
            },
            {
              text: 'the',
              display: false,
            },
            {
              text: 'ball',
              display: false,
            },
            {
              text: 'all',
              display: false,
            },
            {
              text: 'day',
              display: false,
            },
          ],
          keyList: [
            {
              label: 'mine',
              isWrong: false,
              parent: keyParent.body,
            },
            {
              label: 'day',
              isWrong: false,
              parent: keyParent.body,
            },
            {
              label: 'Abba',
              isWrong: false,
              parent: keyParent.body,
            },
            {
              label: 'his',
              isWrong: false,
              parent: keyParent.body,
            },
            {
              label: 'play',
              isWrong: false,
              parent: keyParent.body,
            },
            {
              label: 'all',
              isWrong: false,
              parent: keyParent.body,
            },
            {
              label: 'ball',
              isWrong: false,
              parent: keyParent.body,
            },
            {
              label: 'the',
              isWrong: false,
              parent: keyParent.body,
            },
            {
              label: 'and',
              isWrong: false,
              parent: keyParent.body,
            },
            {
              label: 'bet',
              isWrong: false,
              parent: keyParent.body,
            },
            {
              label: 'choice',
              isWrong: false,
              parent: keyParent.body,
            },
            {
              label: 'uncle',
              isWrong: false,
              parent: keyParent.body,
            },
          ],
        },
      ],
    },
  },
];
