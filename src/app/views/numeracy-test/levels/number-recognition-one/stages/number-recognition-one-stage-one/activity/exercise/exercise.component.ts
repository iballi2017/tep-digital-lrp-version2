import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PlaySound } from 'src/app/models/class/play-sound';
import { ShuffleArray } from 'src/app/models/class/shuffle-array';
import { ActivityAnswer } from 'src/app/models/interface/game';
import { GameLevel } from 'src/app/models/interface/game-level';
import { GameType } from 'src/app/models/interface/game-type';
import { NumberDigitType } from 'src/app/models/interface/number-type';
import { GameService } from 'src/app/services/game.service';
import { LaunchGameService } from 'src/app/services/launch-game.service';
import { NumberRecognitionOneService } from 'src/app/services/number-recognition/number-recognition-one.service';
import { PlaySoundService } from 'src/app/services/play-sound.service';
import { ActivityHintDialogComponent } from 'src/app/shared/shared.components/activity-hint-dialog/activity-hint-dialog.component';
import { addNumberRecognitionOneLevelStageOneResult } from 'src/app/views/numeracy-test/store/number-recognition-one-level-result/number-recognition-one-level-result.actions';
import { NumberRecognitionOneLevelResultState } from 'src/app/views/numeracy-test/store/number-recognition-one-level-result/number-recognition-one-level-result.reducer';
import { KeySound } from 'src/assets/data/key-sound';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit, OnDestroy {
  boardActivityHint: string = 'Identify the 1-digit numbers';
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
  gameLevel = GameLevel.NUMBER_RECOGNITION_ONE;
  isLaunchTest!: boolean;
  btnTitle = 'Start';
  isFinishedTest: boolean = false;
  gameType = GameType.NUMERACY;
  isWrongSelection!: boolean;

  testList = testList;
  activityHint: any =
    'Identify the 1-digit numbers selecting the right answer in the green boxes below';
  constructor(
    private _gameSvc: GameService,
    private _numberRecognitionOneSvc: NumberRecognitionOneService,
    private store: Store<NumberRecognitionOneLevelResultState>,
    private _router: Router,
    public dialog: MatDialog,
    private _playSoundSvc: PlaySoundService,
    private _launchGameSvc: LaunchGameService
  ) { }

  ngOnInit(): void {
    this._launchGameSvc.launchGameBehaviorSubject.subscribe((msg: any) => {
      if (msg) {
        this.isLaunchTest = msg;
      }
    });
    this.onReplceKeyList();
    this.onCheckTestCompletion();
    this.onGetGameSessionId();
  }

  playBGSound() {
    this._playSoundSvc.playNumeracyBGSound();
    this._launchGameSvc.sendLaunchGameBehaviorSubject(true);
  }

  stopBGSound() {
    this._playSoundSvc.stopNumeracyBGSound();
  }

  playLevelCompletedSound() {
    this._playSoundSvc.playStageCompletionSound();
    this._launchGameSvc.sendLaunchGameBehaviorSubject(true);
  }

  stopLevelCompletedSound() {
    this._playSoundSvc.stopStageCompletionSound();
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
    if (number.type == NumberDigitType.ONE_DIGIT_NUMBER) {
      if (!this.resultItemList.find((item: any) => item.name === number.name)) {
        this.resultItemList.push(number);
        let playSound = new PlaySound({ vn: KeySound.CorrectAnswer_Note });
        playSound.playAlphabetVoice();
        this.isComplete();
      } 
    }else {
      let playSound = new PlaySound({ vn: KeySound.WrongAnswer_Note });
      playSound.playAlphabetVoice();
      this.isWrongSelection = true;
    }
    setTimeout(() => {
      this.previewText = '';
      this.isWrongSelection = false;
    }, 500);
  }

  isComplete() {
    let expectedList = this.resultItemList.filter((item: any) => {
      return item.type == NumberDigitType.ONE_DIGIT_NUMBER;
    });
    let availableList = this.keyList.filter((item: any) => {
      return item.type == NumberDigitType.ONE_DIGIT_NUMBER;
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
        addNumberRecognitionOneLevelStageOneResult({ payload: Payload })
      );
      this._numberRecognitionOneSvc.addNumberRecognitionOneLevelResultBehaviour.subscribe(
        (msg: any) => {
          if (msg) {
            // this._router.navigate([
            //   `/${GameType.NUMERACY}/level-completion/${this.gameLevel}`
            //   // `/${GameType.NUMERACY}/stage-completion/${this.gameLevel}/${this.stageNumber}`,
            // ]);
            this.isFinishedTest = true;
            this.stopBGSound();
            this.playLevelCompletedSound();
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

  ngOnDestroy(): void {
    this.stopBGSound()
  }
}

const testList = [
  {
    testName: 'test-1',
    isTestComplete: false,
    testKeys: [
      {
        name: '5',
        type: NumberDigitType.ONE_DIGIT_NUMBER,
        // vn: NumberNote.A_Note,
      },
      {
        name: '23',
        type: null,
      },
      {
        name: '3',
        type: NumberDigitType.ONE_DIGIT_NUMBER,
      },
    ],
  },
  {
    testName: 'test-2',
    isTestComplete: false,
    testKeys: [
      {
        name: '16',
        type: null,
        // vn: NumberNote.A_Note,
      },
      {
        name: '6',
        type: NumberDigitType.ONE_DIGIT_NUMBER,
      },
      {
        name: '9',
        type: NumberDigitType.ONE_DIGIT_NUMBER,
      },
    ],
  },
  {
    testName: 'test-3',
    isTestComplete: false,
    testKeys: [
      {
        name: '2',
        type: NumberDigitType.ONE_DIGIT_NUMBER,
        // vn: NumberNote.A_Note,
      },
      {
        name: '27',
        type: null,
      },
      {
        name: '7',
        type: NumberDigitType.ONE_DIGIT_NUMBER,
      },
    ],
  },
];
