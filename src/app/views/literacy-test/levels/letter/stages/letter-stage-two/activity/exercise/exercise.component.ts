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
import { LetterStageTwoService } from 'src/app/services/letter/letter-stage-two.service';
import { PlaySoundService } from 'src/app/services/play-sound.service';
import { ActivityHintDialogComponent } from 'src/app/shared/shared.components/activity-hint-dialog/activity-hint-dialog.component';
import { ComponentReloadFunctionalityComponent } from 'src/app/shared/shared.components/component-reload-functionality/component-reload-functionality.component';
import { addLetterLevelStageTwoResult } from 'src/app/views/literacy-test/store/letter-level-result/letter-level-result.actions';
import { LetterLevelResultState } from 'src/app/views/literacy-test/store/letter-level-result/letter-level-result.reducer';
import { AlphabetNote } from 'src/assets/data/alphabet.voicenote';
import { BackgroundNote } from 'src/assets/data/background-sound.voicenote';
import { KeySound } from 'src/assets/data/key-sound';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent extends ComponentReloadFunctionalityComponent implements OnInit, OnDestroy {
  boardActivityHint: string = 'Select the consonant letters from these options';
  CONSONANT = AlphabetType.CONSONANT;
  VOWEL = AlphabetType.VOWEL;
  testNumber: number = 0;
  checkTestCompletion: any;
  keyList: any[] = [];

  testList = testList
  // previewList = ['a', 'b', 'c'];
  previewList: string[] = [];
  resultItemList: any[] = [];
  previewText: string = '';
  activityHint: any = 'Fill out the consonant letters in yellow boxes above by selecting the right letters in the green boxes below';

  Subscriptions: Subscription[] = [];
  gameSessionId!: string;
  isLaunchTest!: boolean;
  stageNumber: number = 2;
  gameLevel = GameLevel.LETTER;
  btnTitle = "Start";
  isFinishedTest: boolean = false;
  // 
  levelTitle!: string;
  gameType = GameType.LITERACY;
  isWrongSelection!: boolean;
  constructor(
    private _gameSvc: GameService,
    public dialog: MatDialog,
    private _letterStageTwoSvc: LetterStageTwoService,
    private store: Store<LetterLevelResultState>,
    public override _router: Router,
    private _playSoundSvc: PlaySoundService, private _launchGameSvc: LaunchGameService
  ) {
    super(_router);
  }

  override ngOnInit(): void {

    this._launchGameSvc.launchGameBehaviorSubject.subscribe((msg: any) => {
      if (msg) {
        this.isLaunchTest = msg
      }
    })
    this.onReplceKeyList();
    this.onCheckTestCompletion();
    this.onGetGameSessionId();
  }


  playBGSound() {
    this._playSoundSvc.playLiteracyBGSound();
    this._launchGameSvc.sendLaunchGameBehaviorSubject(true)
  }

  stopBGSound() {
    this._playSoundSvc.stopLiteracyBGSound();
    this._launchGameSvc.sendLaunchGameBehaviorSubject(false)
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
    this.previewList.push(alphabet.name);
    this.previewText = alphabet.name;
    let playSound = new PlaySound({ vn: alphabet.vn });
    playSound.playAlphabetVoice();
    
    if (alphabet.type == AlphabetType.CONSONANT) {
      if (
        !this.resultItemList.find((item: any) => item.name === alphabet.name)
      ) {
        this.resultItemList.push(alphabet);
        let playSound = new PlaySound({ vn: KeySound.CorrectAnswer_Note });
        playSound.playAlphabetVoice();
        this.isComplete();
      }
    } else {
      this.isWrongSelection = true
      let playSound = new PlaySound({ vn: KeySound.WrongAnswer_Note });
      playSound.playAlphabetVoice();
    }
    setTimeout(() => {
      this.previewText = '';
      this.isWrongSelection = false
    }, 500);
  }

  isComplete() {
    let expectedList = this.resultItemList.filter((item: any) => {
      return item.type == AlphabetType.CONSONANT;
    });
    let availableList = this.keyList.filter((item: any) => {
      return item.type == AlphabetType.CONSONANT;
    });
    // console.log("availableList.length: ", availableList.length);
    // console.log("expectedList.length: ", expectedList.length);
    if (availableList.length == expectedList.length) {
      this.testList[this.testNumber].isTestComplete = true;
      this.onCheckTestCompletion();
      if (expectedList.length == this.checkTestCompletion.length) {
        // console.log("this.checkTestCompletion.length: ", this.checkTestCompletion.length);
        // console.log("expectedList.length: ", expectedList.length);
        this.testGameCompletion();
        return;
      }
      this.testGameCompletion();
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
        this.gameSessionId = msg?.session_id
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
      this.store.dispatch(addLetterLevelStageTwoResult({ payload: Payload }));
      this._letterStageTwoSvc.addLetterLevelResultBehaviour.subscribe(
        (msg: any) => {
          if (msg) {
            // console.log('msg: ', msg);
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
        name: 'b',
        type: AlphabetType.CONSONANT,
        vn: AlphabetNote.B_Note
      },
      {
        name: 'a',
        type: AlphabetType.VOWEL,
        vn: AlphabetNote.A_Note
      },
      {
        name: 'c',
        type: AlphabetType.CONSONANT,
        vn: AlphabetNote.C_Note
      },
      {
        name: 'e',
        type: AlphabetType.VOWEL,
        vn: AlphabetNote.E_Note
      },
      {
        name: 'd',
        type: AlphabetType.CONSONANT,
        vn: AlphabetNote.D_Note
      },
      {
        name: 'u',
        type: AlphabetType.VOWEL,
        vn: AlphabetNote.U_Note
      },
    ],
  },
  {
    testName: 'test-2',
    isTestComplete: false,
    testKeys: [
      {
        name: 's',
        type: AlphabetType.CONSONANT,
        vn: AlphabetNote.S_Note
      },
      {
        name: 'a',
        type: AlphabetType.VOWEL,
        vn: AlphabetNote.A_Note
      },
      {
        name: 'v',
        type: AlphabetType.CONSONANT,
        vn: AlphabetNote.V_Note
      },
      {
        name: 'p',
        type: AlphabetType.CONSONANT,
        vn: AlphabetNote.P_Note
      },
      {
        name: 'e',
        type: AlphabetType.VOWEL,
        vn: AlphabetNote.E_Note
      },
      {
        name: 'u',
        type: AlphabetType.VOWEL,
        vn: AlphabetNote.U_Note
      },
    ],
  },
];