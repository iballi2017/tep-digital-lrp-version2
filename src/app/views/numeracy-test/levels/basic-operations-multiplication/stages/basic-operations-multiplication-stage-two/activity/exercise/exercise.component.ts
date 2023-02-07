import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PlaySound } from 'src/app/models/class/play-sound';
import { ShuffleArray } from 'src/app/models/class/shuffle-array';
import { ActivityAnswer } from 'src/app/models/interface/game';
import { GameLevel } from 'src/app/models/interface/game-level';
import { GameType } from 'src/app/models/interface/game-type';
import { BasicOperationsMultiplicationStageTwoService } from 'src/app/services/basic-operations/multiplication/basic-operations-multiplication-stage-two.service';
import { GameService } from 'src/app/services/game.service';
import { LaunchGameService } from 'src/app/services/launch-game.service';
import { PlaySoundService } from 'src/app/services/play-sound.service';
import { ActivityHintDialogComponent } from 'src/app/shared/shared.components/activity-hint-dialog/activity-hint-dialog.component';
import { addBasicOperationsMultiplicationLevelStageTwoResult } from 'src/app/views/numeracy-test/store/basic-operations-multiplication-level-result/basic-operations-multiplication-level-result.actions';
import { BasicOperationsMultiplicationLevelResultState } from 'src/app/views/numeracy-test/store/basic-operations-multiplication-level-result/basic-operations-multiplication-level-result.reducer';
import { KeySound } from 'src/assets/data/key-sound';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit, OnDestroy {
  boardActivityHint: string = 'Multiply the 2-digit numbers here';
  testNumber: number = 0;
  keyList: any[] = [];
  previewList: string[] = [];
  previewText: string = '';
  checkTestCompletion: any;
  gameSessionId!: string;
  stageNumber: number = 2;
  gameLevel = GameLevel.BASIC_OPERATIONS_MULTIPLICATION;
  isLaunchTest!: boolean;
  btnTitle = 'Start';
  isFinishedTest: boolean = false;
  gameType = GameType.NUMERACY;
  isWrongSelection!: boolean;

  // testList: any = [...testList]
  testList: any = testList;
  activityHint: any =
    'Take the number on the left and add it together a number of times of the number on the right, then select the right answer in the green box below.';
  test: any;
  constructor(
    private _gameSvc: GameService,
    private _basicOperationsMultiplicationStageTwoSvc: BasicOperationsMultiplicationStageTwoService,
    private store: Store<BasicOperationsMultiplicationLevelResultState>,
    private _router: Router,
    public dialog: MatDialog,
    private _playSoundSvc: PlaySoundService,
    private _launchGameSvc: LaunchGameService
  ) {}

  ngOnInit(): void {
    this._launchGameSvc.launchGameBehaviorSubject.subscribe((msg: any) => {
      if (msg) {
        this.isLaunchTest = msg;
      }
    });
    this.placeQuestion();
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

  placeQuestion() {
    this.test = this.testList[this.testNumber];
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
    if (number.name == this.test.answer) {
      this.test.isAnswered = true;
      let playSound = new PlaySound({ vn: KeySound.CorrectAnswer_Note });
      playSound.playAlphabetVoice();
      setTimeout(() => {
        this.isComplete();
      }, 1500);
    } else {
      this.isWrongSelection = true;
      let playSound = new PlaySound({ vn: KeySound.WrongAnswer_Note });
      playSound.playAlphabetVoice();
    }
    setTimeout(() => {
      this.isWrongSelection = false;
      this.previewText = '';
    }, 500);
  }

  isComplete() {
    let answeredList = this.testList.filter((item: any) => {
      return item.isAnswered == true;
    });
    if (answeredList.length < testList.length) {
      this.testNumber++;
      this.placeQuestion();
    } else {
      this.testGameCompletion();
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
      this.store.dispatch(
        addBasicOperationsMultiplicationLevelStageTwoResult({
          payload: Payload,
        })
      );
      this._basicOperationsMultiplicationStageTwoSvc.BasicOperationsMultiplicationLevelResultBehaviour.subscribe(
        (msg: any) => {
          if (msg) {
            // this._router.navigate([
            //   // `/${GameType.NUMERACY}/level-completion/${this.gameLevel}`
            //   `/${GameType.NUMERACY}/stage-completion/${this.gameLevel}/${this.stageNumber}`,
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
    this.placeQuestion();
  }

  ngOnDestroy(): void {
    this.stopBGSound();
  }
}

export const testList = [
  {
    testName: 'test-1',
    // isTestComplete: false,
    question: '15 x 5 =',
    answer: 15 * 5,
    isAnswered: false,
    testKeys: [
      {
        name: 15 * 5,
      },
      {
        name: 15 - 5,
      },
      {
        name: 15 + 5,
      },
    ],
  },
  {
    testName: 'test-2',
    // isTestComplete: false,
    question: '20 x 6 =',
    answer: 20 * 6,
    isAnswered: false,
    testKeys: [
      {
        name: 20 + 6,
      },
      {
        name: 20 * 6,
      },
      {
        name: 20 - 6,
      },
    ],
  },
  {
    testName: 'test-2',
    // isTestComplete: false,
    question: '48 x 4 =',
    answer: 48 * 4,
    isAnswered: false,
    testKeys: [
      {
        name: 48 + 4,
      },
      {
        name: 48 * 4,
      },
      {
        name: 48 - 4,
      },
    ],
  },
];
