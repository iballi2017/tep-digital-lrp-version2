import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ShuffleArray } from 'src/app/models/class/shuffle-array';
import { ActivityAnswer } from 'src/app/models/interface/game';
import { GameLevel } from 'src/app/models/interface/game-level';
import { GameType } from 'src/app/models/interface/game-type';
import { BasicOperationsMultiplicationStageOneService } from 'src/app/services/basic-operations/multiplication/basic-operations-multiplication-stage-one.service';
import { GameService } from 'src/app/services/game.service';
import { ActivityHintDialogComponent } from 'src/app/shared/shared.components/activity-hint-dialog/activity-hint-dialog.component';
import { addBasicOperationsMultiplicationLevelStageOneResult } from 'src/app/views/numeracy-test/store/basic-operations-multiplication-level-result/basic-operations-multiplication-level-result.actions';
import { BasicOperationsMultiplicationLevelResultState } from 'src/app/views/numeracy-test/store/basic-operations-multiplication-level-result/basic-operations-multiplication-level-result.reducer';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {

  boardActivityHint: string = 'Multiply the 1-digit numbers here';
  testNumber: number = 0;
  keyList: any[] = [];
  previewList: string[] = [];
  previewText: string = '';
  checkTestCompletion: any;
  gameSessionId!: string;
  stageNumber: number = 1;
  gameLevel = GameLevel.BASIC_OPERATIONS_MULTIPLICATION;


  // testList: any = [...testList]
  testList: any = testList;
  activityHint: any = "Take the number on the left and add it together a number of times of the number on the right, then select the right answer in the green box below."
  test: any;
  constructor(private _gameSvc: GameService, private _basicOperationsMultiplicationStageOneSvc: BasicOperationsMultiplicationStageOneService,
    private store: Store<BasicOperationsMultiplicationLevelResultState>,
    private _router: Router,
    public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.placeQuestion();
    this.onCheckTestCompletion();
    this.onGetGameSessionId();
  }

  placeQuestion() {
    this.test = this.testList[this.testNumber]
    let keys = this.test?.testKeys;
    this.keyList = new ShuffleArray(keys).shuffle();
  }


  onGetGameSessionId() {
    this._gameSvc.LoadGameSession();
    this._gameSvc.gameSessionBehaviorSubject.subscribe({
      next: (msg: any) => {
        this.gameSessionId = msg?.session_id;
      },
    });
  }


  onSelectAlphabet(number: any) {
    this.previewText = number.name;
    setTimeout(() => {
      this.previewText = '';
    }, 500);
    if (number.name == this.test.answer) {
      this.test.isAnswered = true;
      setTimeout(() => {
        this.isComplete();
      }, 1500);
    }
  }


  isComplete() {
    let answeredList = this.testList.filter((item: any) => {
      return item.isAnswered == true;
    });
    if (answeredList.length < testList.length) {
      this.testNumber++;
      this.placeQuestion();
    } else {
      this.testGameCompletion()
      return;
    }
  }

  testGameCompletion() {
    this.onCheckTestCompletion();
    if (this.checkTestCompletion.length == this.testList.length) {
      const Payload: ActivityAnswer = {
        session_id: this.gameSessionId,
        answer: '2',
        data: [...this.checkTestCompletion],
      };
      this.store.dispatch(addBasicOperationsMultiplicationLevelStageOneResult({ payload: Payload }));
      this._basicOperationsMultiplicationStageOneSvc.BasicOperationsMultiplicationLevelResultBehaviour.subscribe(
        (msg: any) => {
          if (msg) {
            this._router.navigate([
              // `/${GameType.NUMERACY}/level-completion/${this.gameLevel}`
              `/${GameType.NUMERACY}/stage-completion/${this.gameLevel}/${this.stageNumber}`,
            ]);
          }
        }
      );
    }
    return;
  }

  onCheckTestCompletion() {
    this.checkTestCompletion = this.testList.filter(
      (test: any) => test.isAnswered == true
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
    this.testNumber = 0;
    this.placeQuestion();
    for (let i = 0; i < this.testList.length; i++) {
      this.testList[i].isAnswered = false;
    }
    this.placeQuestion()
  }

}


export const
  testList = [
    {
      testName: 'test-1',
      // isTestComplete: false,
      question: '3 x 6 =',
      answer: 3 * 6,
      isAnswered: false,
      testKeys: [
        {
          name: 3 * 6,
        },
        {
          name: 6 - 3,
        },
        {
          name: 3 + 6,
        },
      ],
    },
    {
      testName: 'test-2',
      // isTestComplete: false,
      question: '4 x 4 =',
      answer: 4 * 4,
      isAnswered: false,
      testKeys: [
        {
          name: 4 + 4,
        },
        {
          name: 4 * 4,
        },
        {
          name: 4 - 4,
        },
      ],
    },
    {
      testName: 'test-3',
      // isTestComplete: false,
      question: '2 x 5 =',
      answer: 2 * 5,
      isAnswered: false,
      testKeys: [
        {
          name: 2 + 5,
        },
        {
          name: 2 * 5,
        },
        {
          name: 5 - 2,
        },
      ],
    },
  ];
