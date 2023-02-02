import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PlaySound } from 'src/app/models/class/play-sound';
import { ShuffleArray } from 'src/app/models/class/shuffle-array';
import { ActivityAnswer } from 'src/app/models/interface/game';
import { GameLevel } from 'src/app/models/interface/game-level';
import { GameType } from 'src/app/models/interface/game-type';
import { BasicOperationsDivisionStageOneService } from 'src/app/services/basic-operations/division/basic-operations-division-stage-one.service';
import { GameService } from 'src/app/services/game.service';
import { LaunchGameService } from 'src/app/services/launch-game.service';
import { PlaySoundService } from 'src/app/services/play-sound.service';
import { ActivityHintDialogComponent } from 'src/app/shared/shared.components/activity-hint-dialog/activity-hint-dialog.component';
import { addBasicOperationsDivisionLevelStageOneResult } from 'src/app/views/numeracy-test/store/basic-operations-division-level-result/basic-operations-division-level-result.actions';
import { BasicOperationsDivisionLevelResultState } from 'src/app/views/numeracy-test/store/basic-operations-division-level-result/basic-operations-division-level-result.reducer';
import { KeySound } from 'src/assets/data/key-sound';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {

  boardActivityHint: string = 'Solve the division problems provided';
  testNumber: number = 0;
  keyList: any[] = [];
  previewList: string[] = [];
  previewText: string = '';
  checkTestCompletion: any;
  gameSessionId!: string;
  stageNumber: number = 1;
  gameLevel = GameLevel.BASIC_OPERATIONS_DIVISION;
  isLaunchTest!: boolean;
  btnTitle = 'Start';
  isFinishedTest: boolean = false;
  gameType = GameType.NUMERACY;


  // testList: any = [...testList]
  testList: any = testList;
  activityHint: any = "Split the number on the left into equal group of number in the right"
  test: any;
  constructor(private _gameSvc: GameService, private _basicOperationsDivisionStageOneSvc: BasicOperationsDivisionStageOneService,
    private store: Store<BasicOperationsDivisionLevelResultState>,
    private _router: Router,
    public dialog: MatDialog,
    private _playSoundSvc: PlaySoundService,
    private _launchGameSvc: LaunchGameService) { }

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
    this._launchGameSvc.sendLaunchGameBehaviorSubject(true)
  }

  stopBGSound() {
    this._playSoundSvc.stopNumeracyBGSound();
  }


  playLevelCompletedSound() {
    this._playSoundSvc.playStageCompletionSound();
    this._launchGameSvc.sendLaunchGameBehaviorSubject(true)
  }

  stopLevelCompletedSound() {
    this._playSoundSvc.stopStageCompletionSound();
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
      let playSound = new PlaySound({ vn: KeySound.CorrectAnswer_Note });
      playSound.playAlphabetVoice();
      setTimeout(() => {
        this.isComplete();
      }, 1500);
    }else {
      let playSound = new PlaySound({ vn: KeySound.WrongAnswer_Note });
      playSound.playAlphabetVoice();
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
        answer: '3',
        data: [...this.checkTestCompletion],
      };
      this.store.dispatch(addBasicOperationsDivisionLevelStageOneResult({ payload: Payload }));
      this._basicOperationsDivisionStageOneSvc.BasicOperationsDivisionLevelResultBehaviour.subscribe(
        (msg: any) => {
          if (msg) {
            // this._router.navigate([
            //   // `/${GameType.NUMERACY}/level-completion/${this.gameLevel}`
            //   `/${GameType.NUMERACY}/stage-completion/${this.gameLevel}/${this.stageNumber}`,
            // ]);
            this.isFinishedTest = true;
            this.stopBGSound()
            this.playLevelCompletedSound()
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
      question: '9 ÷ 3 =',
      answer: 9 / 3,
      isAnswered: false,
      testKeys: [
        {
          name: 9 * 3,
        },
        {
          name: 9 / 3,
        },
        {
          name: 9 + 3,
        },
      ],
    },
    {
      testName: 'test-2',
      // isTestComplete: false,
      question: '6 ÷ 3 =',
      answer: 6 / 3,
      isAnswered: false,
      testKeys: [
        {
          name: 6 / 3,
        },
        {
          name: 6 * 3,
        },
        {
          name: 6 - 3,
        },
      ],
    },
    {
      testName: 'test-3',
      // isTestComplete: false,
      question: '8 ÷ 2 =',
      answer: 8 / 2,
      isAnswered: false,
      testKeys: [
        {
          name: 8 / 2,
        },
        {
          name: 8 * 2,
        },
        {
          name: 8 - 2,
        },
      ],
    },
  ];