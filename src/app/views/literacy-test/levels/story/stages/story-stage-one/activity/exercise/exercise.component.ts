import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ShuffleArray } from 'src/app/models/class/shuffle-array';
import { ActivityAnswer } from 'src/app/models/interface/game';
import { GameLevel } from 'src/app/models/interface/game-level';
import { GameType } from 'src/app/models/interface/game-type';
import { GameService } from 'src/app/services/game.service';
import { StoryStageOneService } from 'src/app/services/story/story-stage-one.service';
import { WordStageFourService } from 'src/app/services/word/word-stage-four.service';
import { ActivityHintDialogComponent } from 'src/app/shared/shared.components/activity-hint-dialog/activity-hint-dialog.component';
import { addStoryLevelStageOneResult } from 'src/app/views/literacy-test/store/story-level-result/story-level-result.actions';
import { addWordLevelStageFourResult } from 'src/app/views/literacy-test/store/word-level-result/word-level-result.actions';
import { WordLevelResultState } from 'src/app/views/literacy-test/store/word-level-result/word-level-result.reducer';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit, OnDestroy {
  boardActivityHint: string = 'Read the paragraph below';
  testNumber: number = 0;
  testBodyLoopNumber: number = 0;
  checkTestCompletion: any;
  keyList: any = [];
  previewList: any[] = [];
  resultItemList: any[] = [];
  previewText: string = '';
  activityHint: any =
    'Fill in the gaps using appropriate words in the green boxes below to write short story(Title and story).';

  Subscriptions: Subscription[] = [];
  gameSessionId!: string;
  stageNumber: number = 1;
  gameLevel = GameLevel.STORY;
  resultListResult = [
    {
      title: {
        isDone: false,
        active: true,
        titleContent: [
          {
            text: "the",
            display: false,
          },
          {
            text: "boy",
            display: false,
          },
          {
            text: "Abba",
            display: false,
          },
        ],
        keyList: [
          {
            label: "no",
            isWrong: false,
            parent: keyParent.title,
          },
          {
            label: "are",
            isWrong: false,
            parent: keyParent.title,
          },
          {
            label: "the",
            isWrong: false,
            parent: keyParent.title,
          },
          {
            label: "came",
            isWrong: false,
            parent: keyParent.title,
          },
          {
            label: "Abba",
            isWrong: false,
            parent: keyParent.title,
          },
          {
            label: "boy",
            isWrong: false,
            parent: keyParent.title,
          }
        ]
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
                text: "Abba",
                display: false,
              },
              {
                text: "is",
                display: false,
              },
              {
                text: "a",
                display: false,
              },
              {
                text: "boy",
                display: false,
              }
            ],
            keyList: [
              {
                label: "is",
                isWrong: false,
                parent: keyParent.body,
              },
              {
                label: "a",
                isWrong: false,
                parent: keyParent.body,
              },
              {
                label: "are",
                isWrong: false,
                parent: keyParent.body,
              },
              {
                label: "came",
                isWrong: false,
                parent: keyParent.body,
              },
              {
                label: "Abba",
                isWrong: false,
                parent: keyParent.body,
              },
              {
                label: "boy",
                isWrong: false,
                parent: keyParent.body,
              }
            ]
          },
          {
            statement: 2,
            isItemTestDone: false,
            content: [
              {
                text: "he",
                display: false,
              },
              {
                text: "lives",
                display: false,
              },
              {
                text: "in",
                display: false,
              },
              {
                text: "Yola",
                display: false,
              }
            ],
            keyList: [
              {
                label: "he",
                isWrong: false,
                parent: keyParent.body,
              },
              {
                label: "in",
                isWrong: false,
                parent: keyParent.body,
              },
              {
                label: "Yola",
                isWrong: false,
                parent: keyParent.body,
              },
              {
                label: "lives",
                isWrong: false,
                parent: keyParent.body,
              },
              {
                label: "hey",
                isWrong: false,
                parent: keyParent.body,
              },
              {
                label: "but",
                isWrong: false,
                parent: keyParent.body,
              }
            ]
          },
          {
            statement: 3,
            isItemTestDone: false,
            content: [
              {
                text: "he",
                display: false,
              },
              {
                text: "lives",
                display: false,
              },
              {
                text: "with",
                display: false,
              },
              {
                text: "his",
                display: false,
              },
              {
                text: "uncle",
                display: false,
              }
            ],
            keyList: [
              {
                label: "he",
                isWrong: false,
                parent: keyParent.body,
              },
              {
                label: "in",
                isWrong: false,
                parent: keyParent.body,
              },
              {
                label: "his",
                isWrong: false,
                parent: keyParent.body,
              },
              {
                label: "lives",
                isWrong: false,
                parent: keyParent.body,
              },
              {
                label: "with",
                isWrong: false,
                parent: keyParent.body,
              },
              {
                label: "uncle",
                isWrong: false,
                parent: keyParent.body,
              }
            ]
          }
        ]
      }
    }
  ];
  boardData = this.resultListResult[this.testNumber]

  constructor(
    private _gameSvc: GameService,
    public dialog: MatDialog,
    private store: Store<WordLevelResultState>,
    private _router: Router,
    private _storyStageOneSvc: StoryStageOneService
  ) { }

  ngOnInit(): void {
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

  // onCheckTestCompletion() {
  //   this.checkTestCompletion = this.testList.filter(
  //     (test: any) => test.isTestComplete == true
  //   );
  // }

  loadTestContent() {
    let x = this.resultListResult[this.testNumber];
    console.warn("x: ", x)
    if (!x.title.isDone) {
      let testKeyArr = x?.title.keyList
      if (testKeyArr) {
        this.keyList = new ShuffleArray(testKeyArr).shuffle();
      }
    } else {
      let testKeyArr = x?.body.bodyContent[this.testBodyLoopNumber].keyList
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
          this.testResult(_keyParent)
        }
        break;
      case keyParent.body:
        let isExist2 = x.body.bodyContent[this.testBodyLoopNumber].content.findIndex(
          (item: any) => item.text == alphabet.label
        );
        if (x.body.bodyContent[this.testBodyLoopNumber].content[isExist2]) {
          // console.warn("item: ", x.body.bodyContent[this.testBodyLoopNumber].content[isExist2]);
          x.body.bodyContent[this.testBodyLoopNumber].content[isExist2].display = true;
          this.testResult(_keyParent)
        }
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
      })
      if (isCompleted.length == x.title.titleContent.length) {
        x.title.isDone = true;
        x.title.active = false;
        x.body.active = true;
        this.keyList = x?.body.bodyContent[this.testBodyLoopNumber].keyList;
      }
    }
    if (_keyParent === keyParent.body) {
      let isBodyContentCompleted = x.body.bodyContent[this.testBodyLoopNumber].content.filter((list: any) => {
        return list.display == true;
      });
      if (isBodyContentCompleted.length == x.body.bodyContent[this.testBodyLoopNumber].content.length) {
        if ((this.testBodyLoopNumber + 1) < x.body.bodyContent.length) {
          this.testBodyLoopNumber++;
          this.keyList = x?.body.bodyContent[this.testBodyLoopNumber].keyList;
        }
        this.isTestBodyCompleted(x?.body)
      }
    }
  }

  isTestBodyCompleted(BodyData: any) {
    for (let i = 0; i < BodyData.bodyContent.length; i++) {
      let isContentCompleted = BodyData.bodyContent[i].content.filter((content: any) => content.display == true);
      if (isContentCompleted.length == BodyData.bodyContent[i].content.length) {
        BodyData.bodyContent[i].isItemTestDone = true;
      }
      this.isTestTestCompletion(BodyData)
    }

  }

  isTestTestCompletion(BodyData: any) {
    let testItems = [...BodyData.bodyContent];
    let isTestItemsCompleted = testItems.filter((item: any) => item.isItemTestDone === true);
    if (isTestItemsCompleted.length == testItems.length) {
      BodyData.isDone = true;
      if (BodyData.isDone) {
        setTimeout(() => {
          this.SubmitTest(this.resultListResult)
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

  SubmitTest(Data: any) {
    const Payload: ActivityAnswer = {
      session_id: this.gameSessionId,
      answer: '1',
      data: [...Data]
    };
    this.store.dispatch(addStoryLevelStageOneResult({ payload: Payload }));
    this._storyStageOneSvc.addStoryLevelResultBehaviour.subscribe(
      (msg: any) => {
        if (msg) {
          this._router.navigate([
            `/${GameType.LITERACY}/game-type-completion/${this.gameLevel}`
          ]);
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
    // this.resultItemList = [];
    this.testNumber = 0;
    this.loadTestContent();
    console.log("this.resultListResult: ", this.resultListResult)
    // for (let i = 0; i < this.testList.length; i++) {
    //   this.testList[i].isTestComplete = false;
    // }
  }

  ngOnDestroy(): void {
    this.Subscriptions.forEach((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    });
  }
}

const enum keyParent {
  title = "title",
  body = "body",
}