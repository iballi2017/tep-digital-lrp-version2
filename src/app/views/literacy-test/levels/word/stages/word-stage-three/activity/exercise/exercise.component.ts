import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ActivityAnswer } from 'src/app/models/interface/game';
import { GameLevel } from 'src/app/models/interface/game-level';
import { GameType } from 'src/app/models/interface/game-type';
import { GameService } from 'src/app/services/game.service';
import { WordStageOneService } from 'src/app/services/word/word-stage-one.service';
import { WordStageThreeService } from 'src/app/services/word/word-stage-three.service';
import { ActivityHintDialogComponent } from 'src/app/shared/shared.components/activity-hint-dialog/activity-hint-dialog.component';
import {
  addWordLevelStageOneResult,
  addWordLevelStageThreeResult,
} from 'src/app/views/literacy-test/store/word-level-result/word-level-result.actions';
import { WordLevelResultState } from 'src/app/views/literacy-test/store/word-level-result/word-level-result.reducer';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit, OnDestroy {
  boardActivityHint: string = 'Make a sentence';
  testNumber: number = 0;
  checkTestCompletion: any;
  keyList: any[] = [];

  testList = [
    {
      testName: 'test-1',
      isTestComplete: false,
      testKeys: [
        {
          name: 'I',
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
      answer: ['I', 'have', 'a', 'dog'],
    },
    {
      testName: 'test-1',
      isTestComplete: false,
      testKeys: [
        {
          name: 'is',
          isWrongChoice: false,
        },
        {
          name: 'clean',
          isWrongChoice: false,
        },
        {
          name: 'my',
          isWrongChoice: false,
        },
        {
          name: 'this',
          isWrongChoice: false,
        },
        {
          name: 'book',
          isWrongChoice: false,
        },
        {
          name: 'this',
          isWrongChoice: false,
        },
      ],
      answer: ['This', 'is', 'my', 'book'],
    },
  ];
  previewList: any[] = [];
  resultItemList: any[] = [];
  previewText: string = '';
  activityHint: any =
    'Make sentences from the jumbled four (letters and words) green boxes below.';

  Subscriptions: Subscription[] = [];
  gameSessionId!: string;
  stageNumber: number = 3;
  gameLevel = GameLevel.WORD;
  constructor(
    private _gameSvc: GameService,
    public dialog: MatDialog,
    private store: Store<WordLevelResultState>,
    private _router: Router,
    private _wordStageThreeSvc: WordStageThreeService
  ) {}

  ngOnInit(): void {
    this.onReplceKeyList();
    this.onCheckTestCompletion();
    this.onGetGameSessionId();
  }

  onCheckTestCompletion() {
    this.checkTestCompletion = this.testList.filter(
      (test: any) => test.isTestComplete == true
    );
  }

  onReplceKeyList() {
    this.keyList = this.testList[this.testNumber]?.testKeys;
  }

  onSelectAlphabet(alphabet: any) {
    // this.previewList.push(alphabet);
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
      }
      if (this.resultItemList.length == testAnswerLength) {
        this.testResult();
      }
    }
  }

  testResult() {
    let expectedResult = JSON.stringify(this.testList[0].answer);
    let selectedResult = JSON.stringify(this.resultItemList);
    if (expectedResult != selectedResult) {
      console.warn('incorrect!');
    }
    if (expectedResult === selectedResult) {
      this.testList[this.testNumber].isTestComplete = true;
      console.log('this.testList: ', this.testList);
      setTimeout(() => {
        // alert('completed!');
        this.testGameCompletion();
      }, 1500);
    }
  }

  onGetGameSessionId() {
    this._gameSvc.LoadGameSession();
    this._gameSvc.gameSessionBehaviorSubject.subscribe({
      next: (msg: any) => {
        this.gameSessionId = msg?.id;
      },
    });
  }

  testGameCompletion() {
    this.onCheckTestCompletion();
    // if (this.checkTestCompletion.length == this.testList.length) {
    const Payload: ActivityAnswer = {
      session_id: this.gameSessionId,
      answer: '4',
      data: [...this.checkTestCompletion],
    };
    this.store.dispatch(addWordLevelStageThreeResult({ payload: Payload }));
    this._wordStageThreeSvc.addWordLevelResultBehaviour.subscribe(
      (msg: any) => {
        if (msg) {
          // console.log('msg: ', msg);
          this._router.navigate([
            `/${GameType.LITERACY}/stage-completion/${this.gameLevel}/${this.stageNumber}`,
          ]);
        }
      }
    );
    // }
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
    this.onReplceKeyList();
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
