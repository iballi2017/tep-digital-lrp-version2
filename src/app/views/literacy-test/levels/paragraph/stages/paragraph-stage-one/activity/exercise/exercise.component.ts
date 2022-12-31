import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ShuffleArray } from 'src/app/models/class/shuffle-array';
import { ActivityAnswer } from 'src/app/models/interface/game';
import { GameLevel } from 'src/app/models/interface/game-level';
import { GameType } from 'src/app/models/interface/game-type';
import { GameService } from 'src/app/services/game.service';
import { ParagraphStageOneService } from 'src/app/services/paragraph/paragraph-stage-one.service';
import { WordStageThreeService } from 'src/app/services/word/word-stage-three.service';
import { ActivityHintDialogComponent } from 'src/app/shared/shared.components/activity-hint-dialog/activity-hint-dialog.component';
import { speechTexts } from 'src/app/views/literacy-test/store/speech-texts/speech-texts.selectors';
import { addWordLevelStageThreeResult } from 'src/app/views/literacy-test/store/word-level-result/word-level-result.actions';
import { WordLevelResultState } from 'src/app/views/literacy-test/store/word-level-result/word-level-result.reducer';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit, OnDestroy {
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
  stageNumber: number = 3;
  gameLevel = GameLevel.WORD;

  //

  resultTextList: any[] = [];
  textPosition = 0;
  speechText!: string;
  isStart: boolean = false;
  speechTexts$!: Observable<any>;
  boardData: any;

  constructor(
    private _gameSvc: GameService,
    public dialog: MatDialog,
    private store: Store<WordLevelResultState>,
    private _router: Router,
    private _wordStageThreeSvc: WordStageThreeService,
    // Speech recog
    private _paragraphStageOneSvc: ParagraphStageOneService,
    private cdr: ChangeDetectorRef
  ) {
    this._paragraphStageOneSvc?.init();
  }

  ngOnInit(): void {
    this.cdr.detectChanges();
    //
    // this.loadTestContent();
    this.onCheckTestCompletion();
    this.onGetGameSessionId();

    //

    this.GetExerciseTexts();
    this.GetSpeechTextsFromAppState();
    this.loadBoardData();
  }

  /* SPEECH RECOG CODE STARTS */

  loadBoardData() {
    this.boardData = this.resultTextList[this.textPosition];
  }

  GetSpeechTextsFromAppState() {
    this.speechTexts$ = this.store.pipe(select(speechTexts));
    this.speechTexts$.subscribe({
      next: (response: any) => {
        if (response) {
          let speechText = response.replace(/\s/g, '');

          // let objIndex = this.resultTextList.findIndex(
          //   (obj: any) => obj.text.replace(/\s/g, '') == speechText
          // );
          // console.log('objIndex***: ', objIndex);
          // //Log object to Console.
          // //
          // //Update object's name property.
          // if (this.resultTextList[objIndex]) {
          //   this.resultTextList[objIndex].isDone = true;
          //   // this.textPosition += 1;
          //   this.onTestValues(this.resultTextList);
          //   console.warn('this.resultTextList: ', this.resultTextList);
          //   this.clearService();
          // }
          //Log object to console again.

          console.log(
            'this.boardData.uiText == speechText: ',
            this.boardData.uiText == speechText
          );
          this.boardData.uiText == speechText;
          this.boardData.uiText == speechText;
          console.log('this.boardData.uiText: ', this.boardData.text.replace(/\s/g, ''));
          console.log('speechText: ', speechText);
          if (this.boardData.text.replace(/\s/g, '') == speechText) {
            this.boardData.isDone = true;
            this.onTestValues(this.resultTextList);
            console.warn('this.resultTextList: ', this.resultTextList);
            this.clearService();
          }
        }
      },
      error: (err: any) => {
        console.error('Error: ', err);
      },
    });
  }

  onTestValues(List: any) {
    let complete = List.filter((done: any) => done?.isDone == true);

    if (complete.length == List?.length) {
      //
      this.clearService();
      this.stopService();
      // alert('completed!!!');
      // this.textPosition += 1;
      // this.stopService();
      // this.clearService();

      const Payload: ActivityAnswer = {
        session_id: this.gameSessionId,
        answer: '4',
        data: List,
      };

      this.onSubmit(Payload);
    } else {
      this.textPosition += 1;
      this.loadBoardData();
    }
  }

  onSubmit(Result: ActivityAnswer) {
    console.warn('Result: ', Result);

    // this.ngRedux.dispatch({ type: SUBMIT_GAME_STAGE_RESULT });
    // let subscription = this._paragraphStageTwoSvc.SubmitGameStageResult(Result).subscribe({
    //   next: (response: any) => {
    //     if (response) {

    //       this.ngRedux.dispatch({
    //         type: SUBMIT_GAME_STAGE_RESULT_SUCCESS,
    //         payload: Result,
    //       });
    //       this.openSnackBar(response?.message);
    //       setTimeout(() => {
    //         this.isFinishedMessage = '';
    //         this.successMessage = '';
    //         // alert('completed!!!');
    //         this._router.navigate([
    //           `/${GameType.LITERACY}/stage-completion/${this.gameLevel}/${this.stageNumber}`,
    //         ]);
    //       }, 3000);
    //     }
    //   },
    //   error: (err: any) => {
    //     if (err) {
    //       // console.warn('Error: ', err);
    //       this.ngRedux.dispatch({
    //         type: SUBMIT_GAME_STAGE_RESULT_ERROR,
    //         payload: err,
    //       });
    //     }
    //   },
    // });
    // this.Subscriptions.push(subscription)
  }

  GetExerciseTexts() {
    this.resultTextList = this._paragraphStageOneSvc.GetExerciseTexts();
  }
  startService() {
    this.isStart = true;
    this._paragraphStageOneSvc.start();
  }

  stopService() {
    this.isStart = false;
    this._paragraphStageOneSvc.stop();
  }

  clearService() {
    this._paragraphStageOneSvc.clear();
  }
  /* SPEECH RECOG CODE ENDS */

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
    this.resultTextList = [];
    this.testNumber = 0;
    this.clearService();
    // this.stopService();
    this.resultTextList = this._paragraphStageOneSvc.GetExerciseTexts();
    // for (let i = 0; i < this.resultTextList.length; i++) {
    //   this.resultTextList[i].isDone = false;
    // }
    // console.log('this.resultTextList: ', this.resultTextList);

    this.resultTextList.forEach((obj: any) => (obj.isDone = false));
    console.log('this.resultTextList***: ', this.resultTextList);

    this.loadBoardData();
  }

  ngOnDestroy(): void {
    this.Subscriptions.forEach((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    });
  }
}
