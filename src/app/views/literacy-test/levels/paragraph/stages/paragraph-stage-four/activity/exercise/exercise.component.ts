import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { PlaySound } from 'src/app/models/class/play-sound';
import { ShuffleArray } from 'src/app/models/class/shuffle-array';
import { ActivityAnswer } from 'src/app/models/interface/game';
import { GameLevel } from 'src/app/models/interface/game-level';
import { GameType } from 'src/app/models/interface/game-type';
import { GameService } from 'src/app/services/game.service';
import { LaunchGameService } from 'src/app/services/launch-game.service';
import { ParagraphStageFourService } from 'src/app/services/paragraph/paragraph-stage-four.service';
import { PlaySoundService } from 'src/app/services/play-sound.service';
import { ActivityHintDialogComponent } from 'src/app/shared/shared.components/activity-hint-dialog/activity-hint-dialog.component';
import { ComponentReloadFunctionalityComponent } from 'src/app/shared/shared.components/component-reload-functionality/component-reload-functionality.component';
import { LongTextReadDialogComponent } from 'src/app/views/literacy-test/completion/long-text-read-dialog/long-text-read-dialog.component';
import { addParagraphLevelStageFourResult } from 'src/app/views/literacy-test/store/paragraph-level-result/paragraph-level-result.actions';
import { ParagraphLevelResultState } from 'src/app/views/literacy-test/store/paragraph-level-result/paragraph-level-result.reducer';
import { KeySound } from 'src/assets/data/key-sound';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent
  extends ComponentReloadFunctionalityComponent
  implements OnInit
{
  boardActivityHint: string = 'Complete the paragraph';
  testNumber: number = 0;
  checkTestCompletion: any;
  keyList: any[] = [];
  previewList: any[] = [];
  previewText: string = '';
  activityHint: any =
    'Fill in the gaps using appropriate words in the green boxes below to complete the paragraph.';

  Subscriptions: Subscription[] = [];
  gameSessionId!: string;
  stageNumber: number = 4;
  gameLevel = GameLevel.PARAGRAPH;

  //

  resultTextList: any[] = [];
  // textPosition = 0;
  boardData: any;
  testList: any;
  fullDataText: string = `My name is Ahmed.
  I live in a big town,
  I have three brothers and two sisters, We all clean the house every morning before going out to the shop. Today is a market day in the town I live we are going to have lots of fun today.`;

  isLaunchTest!: boolean;
  btnTitle = 'Start';
  // isFinishedTest: boolean = true;
  isFinishedTest: boolean = false;
  //
  levelTitle!: string;
  gameType = GameType.LITERACY;
  isWrongSelection!: boolean;
  constructor(
    private _gameSvc: GameService,
    public dialog: MatDialog,
    private store: Store<ParagraphLevelResultState>,
    public override _router: Router,
    // Speech recog
    private _paragraphStageFourSvc: ParagraphStageFourService,
    private _playSoundSvc: PlaySoundService,
    private _launchGameSvc: LaunchGameService
  ) {
    super(_router);
  }

  override ngOnInit(): void {
    this._launchGameSvc.launchGameBehaviorSubject.subscribe((msg: any) => {
      if (msg) {
        this.isLaunchTest = msg;
      }
    });
    // this.loadTestContent();
    this.onCheckTestCompletion();
    this.onGetGameSessionId();

    //

    this.GetExerciseTexts();
    this.loadBoardData();
    this.loadKeyList();
  }

  playBGSound() {
    this._playSoundSvc.playLiteracyBGSound();
    this._launchGameSvc.sendLaunchGameBehaviorSubject(true);
  }

  stopBGSound() {
    this._playSoundSvc.stopLiteracyBGSound();
    this._launchGameSvc.sendLaunchGameBehaviorSubject(false);
  }

  playLevelCompletedSound() {
    this._playSoundSvc.playStageCompletionSound();
    this._launchGameSvc.sendLaunchGameBehaviorSubject(true);
  }

  stopLevelCompletedSound() {
    this._playSoundSvc.stopStageCompletionSound();
  }

  onReplceKeyList() {
    this.keyList = this.testList[this.testNumber]?.testKeys;
  }

  /* SPEECH RECOG CODE STARTS */

  loadBoardData() {
    this.boardData = this.resultTextList[this.testNumber];
  }
  loadKeyList() {
    let data = this._paragraphStageFourSvc.GetExerciseTexts();
    let keys = data[this.testNumber].testKeys;
    this.keyList = new ShuffleArray(keys).shuffle();
  }

  onSelectAlphabet(alphabet: any) {
    // console.log('alphabet: ', alphabet);
    this.previewText = alphabet.name;
    let statement = [...this.resultTextList[this.testNumber].statement];
    let indexItem = statement.findIndex((st: any) => st.text == alphabet.name);
    if (statement[indexItem]) {
      statement[indexItem].isHide = false;
      alphabet.isWrongChoice = false;
      let playSound = new PlaySound({ vn: KeySound.CorrectAnswer_Note });
      playSound.playAlphabetVoice();
      this.onTestStatement(this.resultTextList[this.testNumber]);
    } else {
      alphabet.isWrongChoice = true;
      this.isWrongSelection = true;
      let playSound = new PlaySound({ vn: KeySound.WrongAnswer_Note });
      playSound.playAlphabetVoice();
    }
    setTimeout(() => {
      alphabet.isWrongChoice = null;
      this.isWrongSelection = false;
      this.previewText = '';
    }, 500);
    // this.resultTextList[this.testNumber].
  }

  onTestStatement(Data: any) {
    let isTrueItem = Data.statement.filter((item: any) => item.isHide == true);
    if (isTrueItem.length == 0) {
      setTimeout(() => {
        Data.isDone = true;
        this.checkTest(this.resultTextList);
      }, 1500);
    }
  }

  checkTest(TestList: any) {
    let x = TestList.filter((test: any) => test.isDone == false);
    if (x.length > 0) {
      this.testNumber++;
      this.loadBoardData();
      this.loadKeyList();
    } else {
      this.openDialog(TestList);
    }
  }

  onSubmit(Result: ActivityAnswer) {
    // console.warn('Result: ', Result);
    this.store.dispatch(addParagraphLevelStageFourResult({ payload: Result }));

    this._paragraphStageFourSvc.addParagraphLevelResultBehaviour.subscribe(
      (msg: any) => {
        // console.log('msg: ', msg);
        if (msg) {
          // console.log('msg: ', msg);
          // this._router.navigate([
          //   `/${GameType.LITERACY}/level-completion/${this.gameLevel}`
          //   // `/${GameType.LITERACY}/stage-completion/${this.gameLevel}/${this.stageNumber}`,
          // ]);
          this.isFinishedTest = true;
          this.stopBGSound();
          this.playLevelCompletedSound();
        }
      }
    );
  }

  GetExerciseTexts() {
    let apiArr = this._paragraphStageFourSvc.GetExerciseTexts();
    this.resultTextList = [...apiArr];
  }

  onCheckTestCompletion() {
    // this.checkTestCompletion = this.testList.filter(
    //   (test: any) => test.isTestComplete == true
    // );
  }

  onGetGameSessionId() {
    this._gameSvc.LoadGameSession();
    this._gameSvc.gameSessionBehaviorSubject.subscribe({
      next: (msg: any) => {
        this.gameSessionId = msg?.session_id;
      },
    });
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
    for (let i = 0; i < this.resultTextList.length; i++) {
      this.resultTextList[i].isDone = false;
      this.resultTextList[i].statement.forEach((state: any) => {
        if (state.hint) {
          state.isHide = true;
        } else {
          state.isHide = false;
        }
      });
    }
    // this.reloadPage();
    // console.log("this.resultTextList: ", this.resultTextList)
    // let apiArr = this._paragraphStageFourSvc.GetExerciseTexts();
    // let x = [...apiArr]
    // console.log("x: ", x)
  }

  openDialog(TestList: any[]) {
    const dialogRef = this.dialog.open(LongTextReadDialogComponent, {
      width: '100%',
      maxWidth: '600px',
      data: {
        text: this.fullDataText,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      //
      if (result) {
        const Payload: ActivityAnswer = {
          session_id: this.gameSessionId,
          answer: '5',
          data: [...TestList],
        };
        this.onSubmit(Payload);
      }
    });
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
