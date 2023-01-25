import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ShuffleArray } from 'src/app/models/class/shuffle-array';
import { ActivityAnswer } from 'src/app/models/interface/game';
import { GameLevel } from 'src/app/models/interface/game-level';
import { GameType } from 'src/app/models/interface/game-type';
import { NumberDigitType } from 'src/app/models/interface/number-type';
import { BasicOperationsAdditionStageOneService } from 'src/app/services/basic-operations/addition/basic-operations-addition-stage-one.service';
import { GameService } from 'src/app/services/game.service';
import { ActivityHintDialogComponent } from 'src/app/shared/shared.components/activity-hint-dialog/activity-hint-dialog.component';
import { addBasicOperationsAdditionLevelStageOneResult } from 'src/app/views/numeracy-test/store/basic-operations-addition-level-result/basic-operations-addition-level-result.actions';
import { BasicOperationsAdditionLevelResultState } from 'src/app/views/numeracy-test/store/basic-operations-addition-level-result/basic-operations-addition-level-result.reducer';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
  boardActivityHint: string = 'Add the 1-digit numbers here';
  testNumber: number = 0;
  ONE_DIGIT_NUMBER = NumberDigitType.ONE_DIGIT_NUMBER;
  TWO_DIGIT_NUMBER = NumberDigitType.TWO_DIGIT_NUMBER;
  keyList: any[] = [];
  previewList: string[] = [];
  previewText: string = '';
  resultItemList: any[] = [];
  checkTestCompletion: any;
  gameSessionId!: string;
  stageNumber: number = 1;
  gameLevel = GameLevel.BASIC_OPERATIONS_ADDITION;


  // testList: any = [...testList]
  testList: any = testList;
  activityHint: any = "Count the single digit numbers together and select the right answer in the green box below.";
  test: any;
  constructor(private _gameSvc: GameService, private _basicOperationsAdditionStageOneSvc: BasicOperationsAdditionStageOneService,
    private store: Store<BasicOperationsAdditionLevelResultState>,
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
        answer: '1',
        data: [...this.checkTestCompletion],
      };
      this.store.dispatch(addBasicOperationsAdditionLevelStageOneResult({ payload: Payload }));
      this._basicOperationsAdditionStageOneSvc.BasicOperationsAdditionLevelResultBehaviour.subscribe(
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
    this.resultItemList = [];
    this.testNumber = 0;
    this.placeQuestion();
    for (let i = 0; i < this.testList.length; i++) {
      this.testList[i].isTestComplete = false;
    }
  }

}


export const
  testList = [
    {
      testName: 'test-1',
      // isTestComplete: false,
      question: '3 + 2 =',
      answer: '5',
      isAnswered: false,
      testKeys: [
        {
          name: '7',
        },
        {
          name: '10',
        },
        {
          name: '5',
        },
      ],
    },
    {
      testName: 'test-2',
      // isTestComplete: false,
      question: '4 + 4 =',
      answer: '8',
      isAnswered: false,
      testKeys: [
        {
          name: '16',
        },
        {
          name: '8',
        },
        {
          name: '6',
        },
      ],
    },
    {
      testName: 'test-3',
      // isTestComplete: false,
      question: '7 + 3 =',
      answer: '10',
      isAnswered: false,
      testKeys: [
        {
          name: '21',
        },
        {
          name: '4',
        },
        {
          name: '10',
        },
      ],
    },
  ];