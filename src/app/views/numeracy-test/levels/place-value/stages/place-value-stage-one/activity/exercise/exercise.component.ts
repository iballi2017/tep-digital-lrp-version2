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
  microNumberIndex = 0;
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
  testingNumber: any;
  testNumberList: any = [
    {
      isDone: false,
      activeIndexList: [2, 0, 1],
      numberArray: [
        {
          name: '2',
          isActive: false,
        },
        {
          name: '3',
          isActive: false,
        },
        {
          name: '1',
          isActive: false,
        },
      ],
    },
    {
      isDone: false,
      activeIndexList: [0, 2, 1],
      numberArray: [
        {
          name: '4',
          isActive: true,
          // placeValue: PlaceValue.UNIT,
        },
        {
          name: '0',
          isActive: false,
          // placeValue: PlaceValue.TENS,
        },
        {
          name: '2',
          isActive: false,
          // placeValue: PlaceValue.UNIT,
        },
      ],
    },
  ];

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
      placeValue: PlaceValue.UNIT,
    },
    {
      name: 'tens',
      placeValue: PlaceValue.TENS,
    },
    {
      name: 'unit',
      placeValue: PlaceValue.HUNDRED,
    },
  ];
  numberList!: any[];
  constructor(
    private _gameSvc: GameService,
    private _numberRecognitionTwoSvc: NumberRecognitionTwoService,
    private store: Store<NumberRecognitionTwoLevelResultState>,
    private _router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.onCheckTestCompletion();
    this.onGetGameSessionId();
    this.updateNumberList();
    this.loadKeys();
  }

  loadKeys() {
    this.keyList = this._keyList;
  }

  updateNumberList() {
    console.log('this.testNumberList: ', this.testNumberList);
    console.log('this.testNumber: ', this.testNumber);
    this.numberList = this.testNumberList[this.testNumber]?.numberArray;
    this.moveToNextNumber();
  }

  testNumberAgainstButton() {
    // for (let i = 0; i < this.numberList.length; i++) {
    //   if ((this.numberList[i].isActive = true))
    //     console.log('this.testNumber: ', this.testNumber);
    //   console.log('this.numberList[i]: ', this.numberList[i]);
    //   this.testingNumber = this.numberList[i];
    // }
  }

  moveToNextNumber() {
    this.testNumberList[this.testNumber]?.numberArray.forEach(
      (element: any) => {
        element.isActive = false;
      }
    );
    let _index =
      this.testNumberList[this.testNumber]?.activeIndexList[
        this.microNumberIndex
      ];
    if (_index != undefined) {
      let number = this.numberList[_index];
      number.isActive = true;
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

  onSelectAlphabet(number: any) {
    // console.log('number: ', number);
    let numberList = this.testNumberList[this.testNumber].numberArray;
    let activeItem = numberList.findIndex((item: any) => item.isActive == true);
    if (activeItem == number.placeValue) {
      if (
        this.testNumberList[this.testNumber].activeIndexList?.length >
        this.microNumberIndex + 1
      ) {
        this.microNumberIndex++;
        this.updateNumberList();
      } else {
        if (this.testNumberList.length != this.testNumber + 1) {
          this.microNumberIndex = 0;
          this.testNumber++;
          this.updateNumberList();
        } else {
          alert('Finished!!!');
          return;
        }
      }
    } else {
      number.isWrongChoice = true;
      setTimeout(() => {
        number.isWrongChoice = true;
      }, 500);
    }

    // this.previewList.push(number.name);
    // this.previewText = number.name;
    // setTimeout(() => {
    //   this.previewText = '';
    // }, 500);
    // if (number.type == NumberDigitType.TWO_DIGIT_NUMBER) {
    //   if (!this.resultItemList.find((item: any) => item.name === number.name)) {
    //     this.resultItemList.push(number);
    //     this.isComplete();
    //   }
    // }
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
    for (let i = 0; i < this.testList.length; i++) {
      this.testList[i].isTestComplete = false;
    }
  }
}

export enum PlaceValue {
  // UNIT = 'UNIT',
  // TENS = 'TENS',
  // HUNDRED = 'HUNDRED',
  UNIT = 0,
  TENS,
  HUNDRED,
}
