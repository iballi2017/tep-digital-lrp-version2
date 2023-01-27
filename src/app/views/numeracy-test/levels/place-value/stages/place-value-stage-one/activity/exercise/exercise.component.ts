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
import { LaunchGameService } from 'src/app/services/launch-game.service';
import { NumberRecognitionTwoService } from 'src/app/services/number-recognition/number-recognition-two.service';
import { PlaceValueService } from 'src/app/services/place-value/place-value.service';
import { PlaySoundService } from 'src/app/services/play-sound.service';
import { ActivityHintDialogComponent } from 'src/app/shared/shared.components/activity-hint-dialog/activity-hint-dialog.component';
import { addNumberRecognitionTwoLevelStageOneResult } from 'src/app/views/numeracy-test/store/number-recognition-two-level-result/number-recognition-two-level-result.actions';
import { NumberRecognitionTwoLevelResultState } from 'src/app/views/numeracy-test/store/number-recognition-two-level-result/number-recognition-two-level-result.reducer';
import { addPlaceValueLevelStageOneResult } from 'src/app/views/numeracy-test/store/place-value-level-result/place-value-level-result.actions';

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
  gameLevel = GameLevel.PLACE_VALUE;
  isLaunchTest!: boolean;
  btnTitle = 'Start';
  isFinishedTest: boolean = false;
  gameType = GameType.NUMERACY;
  testingNumber: any;
  testNumberList: any = testNumberList;
  _keyList: any[] = _keyList;
  numberList!: any[];
  constructor(
    private _gameSvc: GameService,
    private _placeValueSvc: PlaceValueService,
    private store: Store<NumberRecognitionTwoLevelResultState>,
    private _router: Router,
    public dialog: MatDialog,
    private _playSoundSvc: PlaySoundService, private _launchGameSvc: LaunchGameService
  ) {}

  ngOnInit(): void {
    this._launchGameSvc.launchGameBehaviorSubject.subscribe((msg: any) => {
      if (msg) {
        this.isLaunchTest = msg;
      }
    });
    this.onGetGameSessionId();
    this.updateNumberList();
    this.loadKeys();
  }
  
  
  playBGSound() {
    this._playSoundSvc.playNumeracyBGSound();
    this._launchGameSvc.sendLaunchGameBehaviorSubject(true)
  }

  stopBGSound() {
    this._playSoundSvc.stopNumeracyBGSound();
  }


  playLevelCompletedSound() {
    this._playSoundSvc.playStageCompletionSound();
    this._launchGameSvc.sendLaunchGameBehaviorSubject(true)
  }

  stopLevelCOmpletedSound() {
    this._playSoundSvc.stopStageCompletionSound();
  }




  loadKeys() {
    this.keyList = this._keyList;
  }

  updateNumberList() {
    this.onCheckTestCompletion();
    if (this.testNumber < this.testNumberList.length) {
      this.numberList = this.testNumberList[this.testNumber]?.numberArray;
      this.moveToNextNumber();
    }
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
    if (activeItem != undefined) {
      if (numberList[activeItem].placeValue == number.placeValue) {
        if (
          this.testNumberList[this.testNumber].activeIndexList?.length >
          this.microNumberIndex + 1
        ) {
          this.microNumberIndex++;
          this.updateNumberList();
        } else {
          if (
            this.testNumberList.length > this.testNumber + 1 ||
            this.testNumberList.length == this.testNumber + 1
          ) {
            this.microNumberIndex = 0;
            this.testNumberList[this.testNumber].isDone = true;
            this.testNumber++;
            this.updateNumberList();
          } else {
            return;
          }
        }
      } else {
        number.isWrongChoice = true;
        setTimeout(() => {
          number.isWrongChoice = true;
        }, 500);
      }
    }
  }

  onCheckTestCompletion() {
    this.checkTestCompletion = this.testNumberList.filter(
      (test: any) => test.isDone == true
    );
    if (this.checkTestCompletion.length == this.testNumberList.length) {
      setTimeout(() => {
        this.submitData(this.checkTestCompletion);
      }, 1000);
    }
  }

  submitData(data: any) {
    const Payload: ActivityAnswer = {
      session_id: this.gameSessionId,
      answer: '3',
      data: [...data],
    };
    this.store.dispatch(addPlaceValueLevelStageOneResult({ payload: Payload }));
    this._placeValueSvc.addPlaceValueLevelResultBehaviour.subscribe(
      (msg: any) => {
        if (msg) {
          // this._router.navigate([
          //   `/${GameType.NUMERACY}/level-completion/${this.gameLevel}`,
          //   // `/${GameType.NUMERACY}/stage-completion/${this.gameLevel}/${this.stageNumber}`,
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
    this.testNumber = 0;
    this.microNumberIndex = 0;
    this.updateNumberList();
    for (let i = 0; i < this.testNumberList.length; i++) {
      this.testNumberList[i].isDone = false;
    }
  }
}

export enum PlaceValue {
  UNIT = 'UNIT',
  TENS = 'TENS',
  HUNDRED = 'HUNDRED',
  // UNIT = 0,
  // TENS,
  // HUNDRED,
}

const testNumberList: any = [
  {
    isDone: false,
    activeIndexList: [2, 0, 1],
    numberArray: [
      {
        name: '2',
        isActive: false,
        placeValue: PlaceValue.HUNDRED,
      },
      {
        name: '3',
        isActive: false,
        placeValue: PlaceValue.TENS,
      },
      {
        name: '1',
        isActive: false,
        placeValue: PlaceValue.UNIT,
      },
    ],
  },
  {
    isDone: false,
    activeIndexList: [0, 2, 1],
    numberArray: [
      {
        name: '4',
        isActive: false,
        placeValue: PlaceValue.HUNDRED,
      },
      {
        name: '0',
        isActive: false,
        placeValue: PlaceValue.TENS,
      },
      {
        name: '2',
        isActive: false,
        placeValue: PlaceValue.UNIT,
      },
    ],
  },
  {
    isDone: false,
    activeIndexList: [1, 0],
    numberArray: [
      {
        name: '2',
        isActive: false,
        placeValue: PlaceValue.TENS,
      },
      {
        name: '2',
        isActive: false,
        placeValue: PlaceValue.UNIT,
      },
    ],
  },
];

const _keyList: any[] = [
  {
    name: 'hundred',
    placeValue: PlaceValue.HUNDRED,
  },
  {
    name: 'tens',
    placeValue: PlaceValue.TENS,
  },
  {
    name: 'unit',
    placeValue: PlaceValue.UNIT,
  },
];
