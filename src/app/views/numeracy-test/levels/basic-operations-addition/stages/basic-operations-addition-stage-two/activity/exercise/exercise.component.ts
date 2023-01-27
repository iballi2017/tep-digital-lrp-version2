import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ShuffleArray } from 'src/app/models/class/shuffle-array';
import { ActivityAnswer } from 'src/app/models/interface/game';
import { GameLevel } from 'src/app/models/interface/game-level';
import { GameType } from 'src/app/models/interface/game-type';
import { BasicOperationsAdditionStageTwoService } from 'src/app/services/basic-operations/addition/basic-operations-addition-stage-two.service';
import { GameService } from 'src/app/services/game.service';
import { LaunchGameService } from 'src/app/services/launch-game.service';
import { PlaySoundService } from 'src/app/services/play-sound.service';
import { ActivityHintDialogComponent } from 'src/app/shared/shared.components/activity-hint-dialog/activity-hint-dialog.component';
import { addBasicOperationsAdditionLevelStageTwoResult } from 'src/app/views/numeracy-test/store/basic-operations-addition-level-result/basic-operations-addition-level-result.actions';
import { BasicOperationsAdditionLevelResultState } from 'src/app/views/numeracy-test/store/basic-operations-addition-level-result/basic-operations-addition-level-result.reducer';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
  boardActivityHint: string = 'Add the 2-digit numbers here';
  testNumber: number = 0;
  keyList: any[] = [];
  previewList: string[] = [];
  previewText: string = '';
  checkTestCompletion: any;
  gameSessionId!: string;
  stageNumber: number = 2;
  gameLevel = GameLevel.BASIC_OPERATIONS_ADDITION;
  isLaunchTest!: boolean;
  btnTitle = 'Start';
  isFinishedTest: boolean = false;
  gameType = GameType.NUMERACY;


  // testList: any = [...testList]
  testList: any = testList;
  activityHint: any = "Count the 2-digit numbers together and select the right answer in the green box below.";
  test: any;
  constructor(private _gameSvc: GameService, private _basicOperationsAdditionStageTwoSvc: BasicOperationsAdditionStageTwoService,
    private store: Store<BasicOperationsAdditionLevelResultState>,
    private _router: Router,
    public dialog: MatDialog,
    private _playSoundSvc: PlaySoundService,
    private _launchGameSvc: LaunchGameService) { }

  ngOnInit(): void {
    this._launchGameSvc.launchGameBehaviorSubject.subscribe((msg: any) => {
      if (msg) {
        this.isLaunchTest = msg
      }
    })
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
      this.store.dispatch(addBasicOperationsAdditionLevelStageTwoResult({ payload: Payload }));
      this._basicOperationsAdditionStageTwoSvc.BasicOperationsAdditionLevelResultBehaviour.subscribe(
        (msg: any) => {
          if (msg) {
            // this._router.navigate([
            //   `/${GameType.NUMERACY}/level-completion/${this.gameLevel}`
            //   // `/${GameType.NUMERACY}/stage-completion/${this.gameLevel}/${this.stageNumber}`,
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
      question: [
        {
          first: 3,
          second: 3
        },
        {
          first: 1,
          second: 8
        }
      ],
      answer: {
        value: 51,
        first: 5,
        second: 1
      },
      isAnswered: false,
      testKeys: [
        {
          name: 33 + 18,
        },
        {
          name: 33 - 18,
        },
        {
          name: 5 * 11,
        },
      ],
    },
    {
      testName: 'test-2',
      question: [
        {
          first: 2,
          second: 7
        },
        {
          first: 2,
          second: 3
        }
      ],
      answer: {
        value: 50,
        first: 5,
        second: 0
      },
      isAnswered: false,
      testKeys: [
        {
          name: 27 + 23,
        },
        {
          name: 27 - 23,
        },
        {
          name: 2 * 23,
        },
      ],
    },
  ];