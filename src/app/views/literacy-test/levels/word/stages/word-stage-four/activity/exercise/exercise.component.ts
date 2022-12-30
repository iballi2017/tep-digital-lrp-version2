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
import { WordStageFourService } from 'src/app/services/word/word-stage-four.service';
import { WordStageThreeService } from 'src/app/services/word/word-stage-three.service';
import { ActivityHintDialogComponent } from 'src/app/shared/shared.components/activity-hint-dialog/activity-hint-dialog.component';
import { addWordLevelStageFourResult, addWordLevelStageThreeResult } from 'src/app/views/literacy-test/store/word-level-result/word-level-result.actions';
import { WordLevelResultState } from 'src/app/views/literacy-test/store/word-level-result/word-level-result.reducer';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit, OnDestroy {
  boardActivityHint: string = 'Build connecting sentences using the word FISH';
  testNumber: number = 0;
  checkTestCompletion: any;
  keyList: any[] = [];

  testList = testList;
  previewList: any[] = [];
  resultItemList: any[] = [];
  previewText: string = '';
  activityHint: any =
    'Select the right words or letters in the green boxes to build sentences with the word FISH';

  Subscriptions: Subscription[] = [];
  gameSessionId!: string;
  stageNumber: number = 4;
  gameLevel = GameLevel.WORD;
  constructor(
    private _gameSvc: GameService,
    public dialog: MatDialog,
    private store: Store<WordLevelResultState>,
    private _router: Router,
    private _wordStageFourSvc: WordStageFourService
  ) { }

  ngOnInit(): void {
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
    setTimeout(() => {
      this.previewText = '';
    }, 500);
    let isExist = this.testList[this.testNumber].answer.findIndex(
      (item: any) => item.text == alphabet.name
    );
    let item = this.testList[this.testNumber].answer[isExist];
    if (item) {
      item.isShow = true;
    }
    // setTimeout(() => {
    this.testResult()
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

    let isCompleted = this.testList[this.testNumber].answer.filter((list: any) => {
      return list.isShow == true;
    })

    if (isCompleted.length == this.testList[this.testNumber].answer.length) {
      // alert("completed!");
      this.testList[this.testNumber].isTestComplete = true;
      setTimeout(() => {
        this.testNumber++;
        this.onCheckTestCompletion();
        if (this.checkTestCompletion.length < this.testList.length) {
          this.loadTestContent()
        } else {
          this.testGameCompletion()
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
            this._router.navigate([
              `/${GameType.LITERACY}/level-completion/${this.gameLevel}`
            ]);
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
    this.resultItemList = [];
    this.testNumber = 0;
    this.loadTestContent();
    for (let i = 0; i < this.testList.length; i++) {
      this.testList[i].isTestComplete = false;
    }
  }

  ngOnDestroy(): void {
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
        isWrongChoice: false,
      },
      {
        name: 'have',
        isWrongChoice: false,
      },
      {
        name: 'my',
        isWrongChoice: false,
      },
      {
        name: 'food',
        isWrongChoice: false,
      },
      {
        name: 'is',
        isWrongChoice: false,
      },
      {
        name: 'not',
        isWrongChoice: false,
      },
    ],
    // answer: ['this', 'is', 'my', 'fish'],
    answer: [{
      text: 'this',
      isShow: false,
    }, {
      text: 'is',
      isShow: false,
    }, {
      text: 'my',
      isShow: false,
    }, {
      text: 'fish',
      isShow: true,
      hint: true
    }],
  },
  {
    testName: 'test-2',
    isTestComplete: false,
    testKeys: [
      {
        name: 'lives',
        isWrongChoice: false,
      },
      {
        name: 'have',
        isWrongChoice: false,
      },
      {
        name: 'my',
        isWrongChoice: false,
      },
      {
        name: 'water',
        isWrongChoice: false,
      },
      {
        name: 'in',
        isWrongChoice: false,
      },
      {
        name: 'not',
        isWrongChoice: false,
      }
    ],
    // answer: ['this', 'is', 'a', 'big', 'book'],
    answer: [{
      text: 'my',
      isShow: false,
    }, {
      text: 'fish',
      isShow: true,
      hint: true
    }, {
      text: 'lives',
      isShow: false,
    }, {
      text: 'in',
      isShow: false,
    }, {
      text: 'water',
      isShow: false,
    }],
  },
  {
    testName: 'test-3',
    isTestComplete: false,
    testKeys: [
      {
        name: 'my',
        isWrongChoice: false,
      },
      {
        name: 'have',
        isWrongChoice: false,
      },
      {
        name: 'did',
        isWrongChoice: false,
      },
      {
        name: 'i',
        isWrongChoice: false,
      },
      {
        name: 'is',
        isWrongChoice: false,
      },
      {
        name: 'love',
        isWrongChoice: false,
      }
    ],
    // answer: ['this', 'is', 'a', 'big', 'book'],
    answer: [{
      text: 'i',
      isShow: false,
    }, {
      text: 'love',
      isShow: false,
    }, {
      text: 'my',
      isShow: false,
    }, {
      text: 'fish',
      isShow: true,
      hint: true
    },],
  },
];