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
import { ParagraphStageFourService } from 'src/app/services/paragraph/paragraph-stage-four.service';
import { ActivityHintDialogComponent } from 'src/app/shared/shared.components/activity-hint-dialog/activity-hint-dialog.component';
import { LongTextReadDialogComponent } from 'src/app/views/literacy-test/completion/long-text-read-dialog/long-text-read-dialog.component';
import { addParagraphLevelStageFourResult } from 'src/app/views/literacy-test/store/paragraph-level-result/paragraph-level-result.actions';
import { ParagraphLevelResultState } from 'src/app/views/literacy-test/store/paragraph-level-result/paragraph-level-result.reducer';
import { speechTexts } from 'src/app/views/literacy-test/store/speech-texts/speech-texts.selectors';
import { KeySound } from 'src/assets/data/key-sound';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {
  boardActivityHint: string = 'Read the paragraph below';
  testNumber: number = 0;
  checkTestCompletion: any;
  keyList: any[] = [];
  previewList: any[] = [];
  previewText: string = '';
  activityHint: any =
    'Click on the start button below to start the activity; Read the paragraph below noting the punctuations and at a steady pace';

  Subscriptions: Subscription[] = [];
  gameSessionId!: string;
  stageNumber: number = 4;
  gameLevel = GameLevel.PARAGRAPH;

  //

  resultTextList: any[] = [];
  // textPosition = 0;
  speechText!: string;
  speechTexts$!: Observable<any>;
  boardData: any;
  testList: any;
  fullDataText: string = `My name is Ahmed.
  I live in a big town,
  I have three brothers and two sisters, We all clean the house every morning before going out to the shop. Today is a market day in the town I live we are going to have lots of fun today.`;

  constructor(
    private _gameSvc: GameService,
    public dialog: MatDialog,
    private store: Store<ParagraphLevelResultState>,
    private _router: Router,
    // Speech recog
    private _paragraphStageFourSvc: ParagraphStageFourService
  ) { }

  ngOnInit(): void {
    // this.loadTestContent();
    this.onCheckTestCompletion();
    this.onGetGameSessionId();

    //

    this.GetExerciseTexts();
    this.loadBoardData();
    this.loadKeyList();
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
    let statement = [...this.resultTextList[this.testNumber].statement];
    let indexItem = statement.findIndex((st: any) => st.text == alphabet.name);
    if (statement[indexItem]) {
      statement[indexItem].isHide = false;
      let playSound = new PlaySound({ vn: KeySound.CorrectAnswer_Note });
      playSound.playAlphabetVoice();
      this.onTestStatement(this.resultTextList[this.testNumber]);
    }
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
          this._router.navigate([
            `/${GameType.LITERACY}/level-completion/${this.gameLevel}`
            // `/${GameType.LITERACY}/stage-completion/${this.gameLevel}/${this.stageNumber}`,
          ]);
        }
      }
    );
  }

  GetExerciseTexts() {
    let apiArr = this._paragraphStageFourSvc.GetExerciseTexts();
    this.resultTextList = [...apiArr]
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
        }
        this.onSubmit(Payload)
      }
    });
  }

  ngOnDestroy(): void {
    this.Subscriptions.forEach((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    });
  }
}
