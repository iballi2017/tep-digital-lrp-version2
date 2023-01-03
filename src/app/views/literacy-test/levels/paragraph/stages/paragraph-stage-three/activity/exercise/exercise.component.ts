import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ActivityAnswer } from 'src/app/models/interface/game';
import { GameLevel } from 'src/app/models/interface/game-level';
import { GameType } from 'src/app/models/interface/game-type';
import { GameService } from 'src/app/services/game.service';
import { ParagraphStageThreeService } from 'src/app/services/paragraph/paragraph-stage-three.service';
import { WordStageThreeService } from 'src/app/services/word/word-stage-three.service';
import { ActivityHintDialogComponent } from 'src/app/shared/shared.components/activity-hint-dialog/activity-hint-dialog.component';
import { addParagraphLevelStageThreeResult } from 'src/app/views/literacy-test/store/paragraph-level-result/paragraph-level-result.actions';
import { ParagraphLevelResultState } from 'src/app/views/literacy-test/store/paragraph-level-result/paragraph-level-result.reducer';
import { speechTexts } from 'src/app/views/literacy-test/store/speech-texts/speech-texts.selectors';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
  boardActivityHint: string = 'Read the paragraph below';
  checkTestCompletion: any;
  keyList: any[] = [];
  previewList: any[] = [];
  previewText: string = '';
  activityHint: any =
    'Click on the start button below to start the activity; Read the paragraph below noting the punctuations and at a steady pace';

  Subscriptions: Subscription[] = [];
  gameSessionId!: string;
  stageNumber: number = 3;
  gameLevel = GameLevel.PARAGRAPH;
  resultTextList: any[] = [];
  textPosition = 0;
  speechText!: string;
  isStart: boolean = false;
  speechTexts$!: Observable<any>;
  boardData: any;

  constructor(
    private _gameSvc: GameService,
    public dialog: MatDialog,
    private store: Store<ParagraphLevelResultState>,
    private _router: Router,
    private _wordStageThreeSvc: WordStageThreeService,
    // Speech recog
    private _paragraphStageThreeSvc: ParagraphStageThreeService,
    private cdr: ChangeDetectorRef
  ) {
    this._paragraphStageThreeSvc?.init();
  }

  ngOnInit(): void {
    this.cdr.detectChanges();
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
          this.boardData.uiText == speechText;
          this.boardData.uiText == speechText;
          if (this.boardData.text.replace(/\s/g, '') == speechText) {
            this.boardData.isDone = true;
            this.onTestValues(this.resultTextList);
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
      this.clearService();
      this.stopService();
      const Payload: ActivityAnswer = {
        session_id: this.gameSessionId,
        answer: '3',
        data: List,
      };

      this.onSubmit(Payload);
    } else {
      this.textPosition += 1;
      this.loadBoardData();
    }
  }

  onSubmit(Result: ActivityAnswer) {
    this.store.dispatch(addParagraphLevelStageThreeResult({ payload: Result }));
    this._paragraphStageThreeSvc.addParagraphLevelResultBehaviour.subscribe(
      (msg: any) => {
        if (msg) {
          this._router.navigate([
            `/${GameType.LITERACY}/stage-completion/${this.gameLevel}/${this.stageNumber}`,
          ]);
        }
      }
    );
  }

  GetExerciseTexts() {
    this.resultTextList = this._paragraphStageThreeSvc.GetExerciseTexts();
  }
  startService() {
    this.isStart = true;
    this._paragraphStageThreeSvc.start();
  }

  stopService() {
    this.isStart = false;
    this._paragraphStageThreeSvc.stop();
  }

  clearService() {
    this._paragraphStageThreeSvc.clear();
  }
  /* SPEECH RECOG CODE ENDS */

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
    this.stopService();
    this.clearService();
    this.boardData = null;
    this.resultTextList = [];
    this.textPosition = 0;
    this.GetExerciseTexts();
    this.resultTextList.forEach((obj: any) => (obj.isDone = false));
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
