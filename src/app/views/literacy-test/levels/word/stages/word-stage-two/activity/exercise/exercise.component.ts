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
import { WordStageTwoService } from 'src/app/services/word/word-stage-two.service';
import { ActivityHintDialogComponent } from 'src/app/shared/shared.components/activity-hint-dialog/activity-hint-dialog.component';
import { addWordLevelStageTwoResult } from 'src/app/views/literacy-test/store/word-level-result/word-level-result.actions';
import { WordLevelResultState } from 'src/app/views/literacy-test/store/word-level-result/word-level-result.reducer';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit, OnDestroy {
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
  test!: {
    hint: string;
    keyList: { name: string; isWrongChoice: boolean }[];
    answer: any[];
  };
  constructor(
    private _gameSvc: GameService,
    public dialog: MatDialog,
    private store: Store<WordLevelResultState>,
    private _router: Router,
    private _wordStageTwoSvc: WordStageTwoService
  ) { }

  ngOnInit(): void {
    this.onGetGameSessionId();

    let testList = this.testList;
    this.testList = new ShuffleArray(testList).shuffle();
    let testKeyArr = this.testList[this.testNumber]?.testKeys;
    new ShuffleArray(testKeyArr).shuffle();
    let answerArr = this.testList[this.testNumber]?.answer;
    new ShuffleArray(answerArr).shuffle();
    this.onFillNewTest();
  }

  onFillNewTest() {
    if (this.testNumber == this.testList.length) {
      const Payload: ActivityAnswer = {
        session_id: this.gameSessionId,
        answer: '4',
        data: [...this.testList],
      };
      this.store.dispatch(addWordLevelStageTwoResult({ payload: Payload }));
      this._wordStageTwoSvc.addWordLevelResultBehaviour.subscribe(
        (msg: any) => {
          if (msg) {
            // console.log('msg: ', msg);
            this._router.navigate([
              `/${GameType.LITERACY}/stage-completion/${this.gameLevel}/${this.stageNumber}`,
            ]);
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
      setTimeout(() => {
        alphabet.isWrongChoice = false;
      }, 1000);
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