import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ShuffleArray } from 'src/app/models/class/shuffle-array';
import { ActivityAnswer } from 'src/app/models/interface/game';
import { GameLevel } from 'src/app/models/interface/game-level';
import { GameType } from 'src/app/models/interface/game-type';
import { GameService } from 'src/app/services/game.service';
import { ParagraphStageOneService } from 'src/app/services/paragraph/paragraph-stage-one.service';
import { WordStageThreeService } from 'src/app/services/word/word-stage-three.service';
import { ActivityHintDialogComponent } from 'src/app/shared/shared.components/activity-hint-dialog/activity-hint-dialog.component';
import { addWordLevelStageThreeResult } from 'src/app/views/literacy-test/store/word-level-result/word-level-result.actions';
import { WordLevelResultState } from 'src/app/views/literacy-test/store/word-level-result/word-level-result.reducer';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit, OnDestroy {
  boardActivityHint: string = 'Read the paragraph below';
  testNumber: number = 0;
  checkTestCompletion: any;
  keyList: any[] = [];
  previewList: any[] = [];
  resultItemList: any[] = [];
  previewText: string = '';
  activityHint: any = 'Click on the start button below to start the activity; Read the paragraph below noting the punctuations and at a steady pace';

  Subscriptions: Subscription[] = [];
  gameSessionId!: string;
  stageNumber: number = 3;
  gameLevel = GameLevel.WORD;

  // 
  
  resultTextList: any[] = [];
  textPosition = 0;
  speechText!: string;
  isStart:boolean = false;


  constructor(
    private _gameSvc: GameService,
    public dialog: MatDialog,
    private store: Store<WordLevelResultState>,
    private _router: Router,
    private _wordStageThreeSvc: WordStageThreeService,
    // Speech recog
    private _paragraphStageOneSvc : ParagraphStageOneService,
    private cdr: ChangeDetectorRef,
  ) { 
    this._paragraphStageOneSvc?.init();
    this.speechText = this._paragraphStageOneSvc.text;
  }

  ngOnInit(): void {
    this.cdr.detectChanges();
    // 
    // this.loadTestContent();
    this.onCheckTestCompletion();
    this.onGetGameSessionId();

    // 

    this.  GetExerciseTexts();
  }

  /* SPEECH RECOG CODE STARTS */

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
    this.resultItemList = [];
    this.testNumber = 0;
    // this.loadTestContent();
    // for (let i = 0; i < this.testList.length; i++) {
    //   this.testList[i].isTestComplete = false;
    // }
  }

  ngOnDestroy(): void {
    this.Subscriptions.forEach((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    });
  }
}

