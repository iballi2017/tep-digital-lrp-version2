import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { PlaySound } from 'src/app/models/class/play-sound';
import { ShuffleArray } from 'src/app/models/class/shuffle-array';
import { AlphabetType } from 'src/app/models/interface/alphabet-type';
import { ActivityAnswer } from 'src/app/models/interface/game';
import { GameLevel } from 'src/app/models/interface/game-level';
import { GameType } from 'src/app/models/interface/game-type';
import { GameService } from 'src/app/services/game.service';
import { LaunchGameService } from 'src/app/services/launch-game.service';
import { LetterStageThreeService } from 'src/app/services/letter/letter-stage-three.service';
import { PlaySoundService } from 'src/app/services/play-sound.service';
import { ActivityHintDialogComponent } from 'src/app/shared/shared.components/activity-hint-dialog/activity-hint-dialog.component';
import { ComponentReloadFunctionalityComponent } from 'src/app/shared/shared.components/component-reload-functionality/component-reload-functionality.component';
import { addLetterLevelStageThreeResult } from 'src/app/views/literacy-test/store/letter-level-result/letter-level-result.actions';
import { LetterLevelResultState } from 'src/app/views/literacy-test/store/letter-level-result/letter-level-result.reducer';
import { BackgroundNote } from 'src/assets/data/background-sound.voicenote';
import { KeySound } from 'src/assets/data/key-sound';

@Component({
  selector: 'app-exercise-two',
  templateUrl: './exercise-two.component.html',
  styleUrls: ['./exercise-two.component.scss'],
})
export class ExerciseTwoComponent extends ComponentReloadFunctionalityComponent implements OnInit, OnDestroy {
  boardActivityHint: string = 'Create words';
  testNumber: number = 0;
  checkTestCompletion: any;
  keyList: any[] = [];

  testList = [
    {
      testName: 'test-1',
      isTestComplete: false,
      testKeys: [
        {
          name: 'mo',
          type: AlphabetType.CONSONANT,
          isWrongChoice: false,
        },
        {
          name: 'so',
          type: AlphabetType.VOWEL,
          isWrongChoice: false,
        },
        {
          name: 'bo',
          type: AlphabetType.CONSONANT,
          isWrongChoice: false,
        },
      ],
    },
  ];
  previewList: any[] = [];
  resultItemList: any[] = [];
  previewText: string = '';
  activityHint: any =
    'Create Six words in the yellow boxes above by selecting/joining two syllables in the green boxes below.';

  Subscriptions: Subscription[] = [];
  gameSessionId!: string;
  stageNumber: number = 3;
  gameLevel = GameLevel.LETTER;
  isLaunchTest: any;
  isFinishedTest: boolean = false;
  btnTitle = "Start";
  isSTartTest!: boolean;
  constructor(
    private _gameSvc: GameService,
    public dialog: MatDialog,
    private store: Store<LetterLevelResultState>,
    public override  _router: Router,
    private _letterStageThreeSvc: LetterStageThreeService,
    private _playSoundSvc: PlaySoundService, private _launchGameSvc: LaunchGameService
  ) {
    super(_router);
  }

  override ngOnInit(): void {
    this.isTestStart();
    this._launchGameSvc.launchGameBehaviorSubject.subscribe((msg: any) => {
      if (msg) {
        this.isLaunchTest = msg
      }
    })
    this.onReplceKeyList();
    this.onCheckTestCompletion();
    this.onGetGameSessionId();
  }



  isTestStart() {
    this._letterStageThreeSvc.isStartTestBehaviour.subscribe((isStart: boolean) => {
      if (!isStart) {
        this._router.navigate(['/literacy/letter/stage-3/activity'])
      } else {
        this.isSTartTest = isStart
      }
    })
  }

  playBGSound() {
    this._playSoundSvc.playLiteracyBGSound();
    this._launchGameSvc.sendLaunchGameBehaviorSubject(true)
  }

  stopBGSound() {
    this._playSoundSvc.stopLiteracyBGSound();
  }


  playLevelCompletedSound() {
    this._playSoundSvc.playStageCompletionSound();
    this._launchGameSvc.sendLaunchGameBehaviorSubject(true)
  }

  stopLevelCompletedSound() {
    this._playSoundSvc.stopStageCompletionSound();
  }


  onCheckTestCompletion() {
    this.checkTestCompletion = this.testList.filter(
      (test: any) => test.isTestComplete == true
    );
  }

  onReplceKeyList() {
    let keys = this.testList[this.testNumber]?.testKeys;
    this.keyList = new ShuffleArray(keys).shuffle();
  }

  onSelectAlphabet(alphabet: any) {
    this.previewList.push(alphabet);
    let consonantItems = this.previewList.filter(
      (alphabet: any) => alphabet.type == AlphabetType.CONSONANT
    );
    let vowelItems = this.previewList.filter(
      (alphabet: any) => alphabet.type == AlphabetType.VOWEL
    );

    if (this.previewList.length == 2) {
      if (
        consonantItems.length == this.previewList.length ||
        vowelItems.length == this.previewList.length
      ) {
        for (let i = 0; i < this.previewList.length; i++) {
          this.previewList[i].isWrongChoice = true;
        }
        setTimeout(() => {
          for (let i = 0; i < this.previewList.length; i++) {
            this.previewList[i].isWrongChoice = false;
            this.previewList = [];
          }
          return;
        }, 2000);

        let playSound = new PlaySound({ vn: KeySound.WrongAnswer_Note });
        playSound.playAlphabetVoice();
      } else {
        let resultObject = {
          item1: this.previewList[0],
          item2: this.previewList[1],
        };
        for (let i = 0; i < this.resultItemList.length; i++) {
          if (
            this.resultItemList[i].item1 == resultObject.item1 &&
            this.resultItemList[i].item2 == resultObject.item2
          ) {
            alert('item already exist!');
            this.previewList = [];
            return;
          }
        }
        this.resultItemList.push(resultObject);
        let playSound = new PlaySound({ vn: KeySound.CorrectAnswer_Note });
        playSound.playAlphabetVoice();
        this.previewList = [];
      }
      this.isComplete();
    }
    if (this.previewList.length > 2) {
      this.previewList = []
    }
  }

  isComplete() {
    if (this.resultItemList.length == 4) {
      this.testList[this.testNumber].isTestComplete = true;
      this.testGameCompletion();
    } else {
      return;
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

  testGameCompletion() {
    this.onCheckTestCompletion();
    if (this.checkTestCompletion.length == this.testList.length) {
      const Payload: ActivityAnswer = {
        session_id: this.gameSessionId,
        answer: '2',
        data: [...this.checkTestCompletion],
      };
      this.store.dispatch(addLetterLevelStageThreeResult({ payload: Payload }));
      this._letterStageThreeSvc.addLetterLevelResultBehaviour.subscribe(
        (msg: any) => {
          if (msg) {
            // console.log('msg: ', msg);
            this.onRouteLevelCompletion();
          }
        }
      );
    }
    return;
  }

  onRouteLevelCompletion() {
    // this._router.navigate([
    //   `/${GameType.LITERACY}/level-completion/${this.gameLevel}`
    // ]);
    this.isFinishedTest = true;
    this.stopBGSound()
    this.playLevelCompletedSound()
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
    this.reloadComponent(true);
    // this.resultItemList = [];
    // this.testNumber = 0;
    // this.onReplceKeyList();
    // for (let i = 0; i < this.testList.length; i++) {
    //   this.testList[i].isTestComplete = false;
    // }
  }

  ngOnDestroy(): void {
    this.stopBGSound();
    this.Subscriptions.forEach((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    });
  }
}
