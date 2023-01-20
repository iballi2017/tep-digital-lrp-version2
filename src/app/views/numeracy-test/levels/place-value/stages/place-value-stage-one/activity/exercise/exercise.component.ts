import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ShuffleArray } from 'src/app/models/class/shuffle-array';
import { ActivityAnswer } from 'src/app/models/interface/game';
import { GameLevel } from 'src/app/models/interface/game-level';
import { GameType } from 'src/app/models/interface/game-type';
import { NumberDigitType } from 'src/app/models/interface/number-type';
import { GameService } from 'src/app/services/game.service';
import { NumberRecognitionTwoService } from 'src/app/services/number-recognition/number-recognition-two.service';
import { ActivityHintDialogComponent } from 'src/app/shared/shared.components/activity-hint-dialog/activity-hint-dialog.component';
import { addNumberRecognitionTwoLevelStageOneResult } from 'src/app/views/numeracy-test/store/number-recognition-two-level-result/number-recognition-two-level-result.actions';
import { NumberRecognitionTwoLevelResultState } from 'src/app/views/numeracy-test/store/number-recognition-two-level-result/number-recognition-two-level-result.reducer';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {
  boardActivityHint: string = 'Identify the place value of the numbers here';
  activityHint: any =
    'Arrange each number into the place value table by selecting correct answer in the boxes below.';
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
  gameLevel = GameLevel.NUMBER_RECOGNITION_TWO;

  testList = [
    {
      testName: 'test-1',
      isTestComplete: false,
      testKeys: [
        {
          name: '20',
          type: NumberDigitType.TWO_DIGIT_NUMBER,
          // vn: NumberNote.A_Note,
        },
        {
          name: '10',
          type: NumberDigitType.TWO_DIGIT_NUMBER,
        },
        {
          name: '1',
          type: null,
        },
      ],
    },
    {
      testName: 'test-2',
      isTestComplete: false,
      testKeys: [
        {
          name: '3',
          type: null,
          // vn: NumberNote.A_Note,
        },
        {
          name: '30',
          type: NumberDigitType.TWO_DIGIT_NUMBER,
        },
        {
          name: '60',
          type: NumberDigitType.TWO_DIGIT_NUMBER,
        },
      ],
    },
    {
      testName: 'test-3',
      isTestComplete: false,
      testKeys: [
        {
          name: '80',
          type: NumberDigitType.TWO_DIGIT_NUMBER,
          // vn: NumberNote.A_Note,
        },
        {
          name: '9',
          type: null,
        },
        {
          name: '50',
          type: NumberDigitType.TWO_DIGIT_NUMBER,
        },
      ],
    },
  ];

  _keyList: any[] = [
    {
      name: 'hundred',
    },
    {
      name: 'tens',
    },
    {
      name: 'unit',
    },
  ];
  constructor(
    private _gameSvc: GameService,
    private _numberRecognitionTwoSvc: NumberRecognitionTwoService,
    private store: Store<NumberRecognitionTwoLevelResultState>,
    private _router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.onReplceKeyList();
    this.onCheckTestCompletion();
    this.onGetGameSessionId();
  }

  onReplceKeyList() {
    let keys = this.testList[this.testNumber]?.testKeys;
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
    this.previewList.push(number.name);
    this.previewText = number.name;
    setTimeout(() => {
      this.previewText = '';
    }, 500);
    if (number.type == NumberDigitType.TWO_DIGIT_NUMBER) {
      if (!this.resultItemList.find((item: any) => item.name === number.name)) {
        this.resultItemList.push(number);
        this.isComplete();
      }
    }
  }

  isComplete() {
    let expectedList = this.resultItemList.filter((item: any) => {
      return item.type == NumberDigitType.TWO_DIGIT_NUMBER;
    });
    let availableList = this.keyList.filter((item: any) => {
      return item.type == NumberDigitType.TWO_DIGIT_NUMBER;
    });
    if (availableList.length == expectedList.length) {
      this.testList[this.testNumber].isTestComplete = true;
      this.onCheckTestCompletion();
      if (this.testList.length == this.checkTestCompletion.length) {
        setTimeout(() => {
          this.testGameCompletion();
        }, 2000);
        return;
      }
      setTimeout(() => {
        this.testNumber++;
        this.resultItemList = [];
        this.onReplceKeyList();
      }, 1500);
    } else {
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
      this.store.dispatch(
        addNumberRecognitionTwoLevelStageOneResult({ payload: Payload })
      );
      this._numberRecognitionTwoSvc.addNumberRecognitionTwoLevelResultBehaviour.subscribe(
        (msg: any) => {
          if (msg) {
            this._router.navigate([
              `/${GameType.NUMERACY}/level-completion/${this.gameLevel}`,
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
      (test: any) => test.isTestComplete == true
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
    this.onReplceKeyList();
    for (let i = 0; i < this.testList.length; i++) {
      this.testList[i].isTestComplete = false;
    }
  }
}
