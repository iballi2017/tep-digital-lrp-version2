import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PlaySound } from 'src/app/models/class/play-sound';
import { ShuffleArray } from 'src/app/models/class/shuffle-array';
import { ActivityAnswer } from 'src/app/models/interface/game';
import { GameLevel } from 'src/app/models/interface/game-level';
import {
  GameType,
  ProgramCompletion,
} from 'src/app/models/interface/game-type';
import { BasicOperationsDivisionStageTwoService } from 'src/app/services/basic-operations/division/basic-operations-division-stage-two.service';
import { GameService } from 'src/app/services/game.service';
import { LaunchGameService } from 'src/app/services/launch-game.service';
import { PlaySoundService } from 'src/app/services/play-sound.service';
import { ActivityHintDialogComponent } from 'src/app/shared/shared.components/activity-hint-dialog/activity-hint-dialog.component';
import { addBasicOperationsDivisionLevelStageTwoResult } from 'src/app/views/numeracy-test/store/basic-operations-division-level-result/basic-operations-division-level-result.actions';
import { BasicOperationsDivisionLevelResultState } from 'src/app/views/numeracy-test/store/basic-operations-division-level-result/basic-operations-division-level-result.reducer';
import { KeySound } from 'src/assets/data/key-sound';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit, OnDestroy {
  boardActivityHint: string = 'Solve the division problems provided';
  testNumber: number = 0;
  keyList: any[] = [];
  previewList: string[] = [];
  previewText: string = '';
  checkTestCompletion: any;
  gameSessionId!: string;
  stageNumber: number = 2;
  gameLevel = GameLevel.BASIC_OPERATIONS_DIVISION;
  isLaunchTest!: boolean;
  btnTitle = 'Start';
  isFinishedTest: boolean = false;
  gameType = GameType.NUMERACY;
  isWrongSelection!: boolean;

  // testList: any = [...testList]
  testList: any = testList;
  activityHint: any =
    'Split the number on the left into equal group of number in the right';
  test: any;
  programStatus: any;
  Completed = ProgramCompletion.COMPLETED;
  constructor(
    private _gameSvc: GameService,
    private _basicOperationsDivisionStageTwoSvc: BasicOperationsDivisionStageTwoService,
    private store: Store<BasicOperationsDivisionLevelResultState>,
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
        addBasicOperationsDivisionLevelStageTwoResult({ payload: Payload })
      );
      this._basicOperationsDivisionStageTwoSvc.BasicOperationsDivisionLevelResultBehaviour.subscribe(
        (msg: any) => {
          if (msg) {
            console.log('msg: ', msg);
            this.programStatus = msg?.resultStatus?.numeracyStatus;
            // this._router.navigate([
            //   // `/${GameType.NUMERACY}/stage-completion/${this.gameLevel}/${this.stageNumber}`,
            //   // `/${GameType.NUMERACY}/level-completion/${this.gameLevel}`
            // `/${GameType.NUMERACY}/game-type-completion/${this.gameLevel}`
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
    question: '68 ÷ 2 =',
    answer: 68 / 2,
    isAnswered: false,
    testKeys: [
      {
        name: 68 * 2,
      },
      {
        name: 68 / 2,
      },
      {
        name: 68 + 2,
      },
    ],
  },
  {
    testName: 'test-2',
    // isTestComplete: false,
    question: '72 ÷ 3 =',
    answer: 72 / 3,
    isAnswered: false,
    testKeys: [
      {
        name: 72 / 3,
      },
      {
        name: 72 * 3,
      },
      {
        name: 72 - 3,
      },
    ],
  },
  {
    testName: 'test-3',
    // isTestComplete: false,
    question: '64 ÷ 4 =',
    answer: 64 / 4,
    isAnswered: false,
    testKeys: [
      {
        name: 64 / 4,
      },
      {
        name: 64 * 4,
      },
      {
        name: 64 - 4,
      },
    ],
  },
];
