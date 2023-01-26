import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ShuffleArray } from 'src/app/models/class/shuffle-array';
import { ActivityAnswer } from 'src/app/models/interface/game';
import { GameLevel } from 'src/app/models/interface/game-level';
import { GameType } from 'src/app/models/interface/game-type';
import { BasicOperationsSubtractionStageOneService } from 'src/app/services/basic-operations/subtraction/basic-operations-subtraction-stage-one.service';
import { BasicOperationsSubtractionStageTwoService } from 'src/app/services/basic-operations/subtraction/basic-operations-subtraction-stage-two.service';
import { GameService } from 'src/app/services/game.service';
import { ActivityHintDialogComponent } from 'src/app/shared/shared.components/activity-hint-dialog/activity-hint-dialog.component';
import { addBasicOperationsSubtractionLevelStageOneResult, addBasicOperationsSubtractionLevelStageTwoResult } from 'src/app/views/numeracy-test/store/basic-operations-subtraction-level-result/basic-operations-subtraction-level-result.actions';
import { BasicOperationsSubtractionLevelResultState } from 'src/app/views/numeracy-test/store/basic-operations-subtraction-level-result/basic-operations-subtraction-level-result.reducer';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
  boardActivityHint: string = 'Subtract the 2-digit numbers here';
  testNumber: number = 0;
  keyList: any[] = [];
  previewList: string[] = [];
  previewText: string = '';
  checkTestCompletion: any;
  gameSessionId!: string;
  stageNumber: number = 2;
  gameLevel = GameLevel.BASIC_OPERATIONS_SUBTRACTION;


  // testList: any = [...testList]
  testList: any = testList;
  activityHint: any = "Using the place value method subtract the 2-digit numbers together and select the right answer in the green box below.Count the single digit numbers together and select the right answer in the green box below.";
  test: any;
  constructor(private _gameSvc: GameService, private _basicOperationsSubtractionStageTwoSvc: BasicOperationsSubtractionStageTwoService,
    private store: Store<BasicOperationsSubtractionLevelResultState>,
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
    if (number.name == this.test.answer.value) {
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
      this.store.dispatch(addBasicOperationsSubtractionLevelStageTwoResult({ payload: Payload }));
      this._basicOperationsSubtractionStageTwoSvc.BasicOperationsSubtractionLevelResultBehaviour.subscribe(
        (msg: any) => {
          if (msg) {
            this._router.navigate([
              `/${GameType.NUMERACY}/level-completion/${this.gameLevel}`
              // `/${GameType.NUMERACY}/stage-completion/${this.gameLevel}/${this.stageNumber}`,
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
      question: [
        {
          first: 5,
          second: 2
        },
        {
          first: 3,
          second: 1
        }
      ],
      answer: {
        value: 21,
        first: 2,
        second: 1
      },
      isAnswered: false,
      testKeys: [
        {
          name: 52 + 31,
        },
        {
          name: 52 - 31,
        },
        {
          name: 25 * 3,
        },
      ],
    },
    {
      testName: 'test-2',
      question: [
        {
          first: 2,
          second: 6
        },
        {
          first: 1,
          second:4
        }
      ],
      answer: {
        value: 12,
        first: 1,
        second: 2
      },
      isAnswered: false,
      testKeys: [
        {
          name: 26 + 14,
        },
        {
          name: 26 - 14,
        },
        {
          name: 21 * 2,
        },
      ],
    },
  ];