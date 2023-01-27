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
import { LetterStageOneService } from 'src/app/services/letter/letter-stage-one.service';
import { PlaySoundService } from 'src/app/services/play-sound.service';
import { ActivityHintDialogComponent } from 'src/app/shared/shared.components/activity-hint-dialog/activity-hint-dialog.component';
import { addLetterLevelStageOneResult } from 'src/app/views/literacy-test/store/letter-level-result/letter-level-result.actions';
import { LetterLevelResultState } from 'src/app/views/literacy-test/store/letter-level-result/letter-level-result.reducer';
import { AlphabetNote } from 'src/assets/data/alphabet.voicenote';
import { BackgroundNote } from 'src/assets/data/background-sound.voicenote';
import { KeySound } from 'src/assets/data/key-sound';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit, AfterViewInit, OnDestroy {
  boardActivityHint: string = 'Reveal the hidden vowel letters';
  CONSONANT = AlphabetType.CONSONANT;
  VOWEL = AlphabetType.VOWEL;
  testList = testList;
  testNumber: number = 0;
  checkTestCompletion: any;
  keyList: any[] = [];
  // previewList = ['a', 'b', 'c'];
  previewList: string[] = [];
  resultItemList: any[] = [];
  previewText: string = '';
  activityHint: any =
    'Fill out the vowel letters in yellow boxes above by selecting the right letters in the green boxes below';

  Subscriptions: Subscription[] = [];
  gameSessionId!: string;
  stageNumber: number = 1;
  // 
  gameLevel = GameLevel.LETTER;
  isLaunchTest!: boolean;
  btnTitle = "Start";
  // isFinishedTest: boolean = true;
  isFinishedTest: boolean = false;
  // 
  levelTitle!: string;
  gameType = GameType.LITERACY;

  // audioFile: string = AlphabetNote.A_Note;
  constructor(
    private _gameSvc: GameService,
    public dialog: MatDialog,
    private _letterStageOneSvc: LetterStageOneService,
    private store: Store<LetterLevelResultState>,
    private _router: Router,
    private _playSoundSvc: PlaySoundService, private _launchGameSvc: LaunchGameService
  ) { }

  ngOnInit(): void {

    this._launchGameSvc.launchGameBehaviorSubject.subscribe((msg: any) => {
      if (msg) {
        this.isLaunchTest = msg
      }
    })
    this.onReplceKeyList();
    this.onCheckTestCompletion();
    this.onGetGameSessionId();
  }

  ngAfterViewInit() {
    // this.playBGSound().playBGSound();
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

  stopLevelCOmpletedSound() {
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
    this.previewList.push(alphabet.name);
    this.previewText = alphabet.name;
    setTimeout(() => {
      this.previewText = '';
    }, 500);
    if (alphabet.type == AlphabetType.VOWEL) {
      if (
        !this.resultItemList.find((item: any) => item.name === alphabet.name)
      ) {
        this.resultItemList.push(alphabet);
        let playSound = new PlaySound({ vn: KeySound.CorrectAnswer_Note });
        playSound.playAlphabetVoice();
        this.isComplete();
      }
    }
  }

  isComplete() {
    let expectedList = this.resultItemList.filter((item: any) => {
      return item.type == AlphabetType.VOWEL;
    });
    let availableList = this.keyList.filter((item: any) => {
      return item.type == AlphabetType.VOWEL;
    });
    if (availableList.length == expectedList.length) {
      this.testList[this.testNumber].isTestComplete = true;

      this.onCheckTestCompletion();
      console.log("this.checkTestCompletion: ", this.checkTestCompletion)
      console.log("this.testList: ", this.testList)

      if (this.testList.length == this.checkTestCompletion.length) {
        setTimeout(() => {
          // alert("completed!!!")
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
        answer: '1',
        data: [...this.checkTestCompletion],
      };
      this.store.dispatch(addLetterLevelStageOneResult({ payload: Payload }));
      this._letterStageOneSvc.addLetterLevelResultBehaviour.subscribe(
        (msg: any) => {
          if (msg) {
            console.log('msg: ', msg);
            this.isFinishedTest = true;
            this.stopBGSound()
            this.playLevelCompletedSound()
            // this._router.navigate([
            //   `/${GameType.LITERACY}/stage-completion/${this.gameLevel}/${this.stageNumber}`,
            // ]);
          }
        }
      );
    }
    return;
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
    this.Subscriptions.forEach((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    });

    // let sound = BackgroundNote.Literacy_Note;
    // let _PlayBGSound = new PlaySound(sound);
    // _PlayBGSound.stopSound();


    this._playSoundSvc.stopLiteracyBGSound();
    this._launchGameSvc.sendLaunchGameBehaviorSubject(false)
    this._playSoundSvc.stopStageCompletionSound();
  }
}

export const testList = [
  {
    testName: 'test-1',
    isTestComplete: false,
    testKeys: [
      {
        name: 'a',
        type: AlphabetType.VOWEL,
      },
      {
        name: 'j',
        type: AlphabetType.CONSONANT,
      },
      {
        name: 'e',
        type: AlphabetType.VOWEL,
      },
      {
        name: 'm',
        type: AlphabetType.CONSONANT,
      },
      {
        name: 'i',
        type: AlphabetType.VOWEL,
      },
      {
        name: 'b',
        type: AlphabetType.CONSONANT,
      },
    ],
  },
  {
    testName: 'test-2',
    isTestComplete: false,
    testKeys: [
      {
        name: 'z',
        type: AlphabetType.CONSONANT,
      },
      {
        name: 'u',
        type: AlphabetType.VOWEL,
      },
      {
        name: 'y',
        type: AlphabetType.CONSONANT,
      },
      {
        name: 'o',
        type: AlphabetType.VOWEL,
      },
      {
        name: 'j',
        type: AlphabetType.CONSONANT,
      },
      {
        name: 'c',
        type: AlphabetType.CONSONANT,
        vn: AlphabetNote.C_Note,
      },
    ],
  },
  {
    testName: 'test-3',
    isTestComplete: false,
    testKeys: [
      {
        name: 'h',
        type: AlphabetType.CONSONANT,
      },
      {
        name: 'o',
        type: AlphabetType.VOWEL,
      },
      {
        name: 'p',
        type: AlphabetType.CONSONANT,
      }
    ],
  },
  {
    testName: 'test-4',
    isTestComplete: false,
    testKeys: [
      {
        name: 'q',
        type: AlphabetType.CONSONANT,
      },
      {
        name: 'l',
        type: AlphabetType.CONSONANT,
      },
      {
        name: 'a',
        type: AlphabetType.VOWEL,
      },
      {
        name: 'u',
        type: AlphabetType.VOWEL,
      }
    ],
  }
];
