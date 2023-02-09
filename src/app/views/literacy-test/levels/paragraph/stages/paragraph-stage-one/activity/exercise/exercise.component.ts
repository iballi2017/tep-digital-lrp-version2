import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ShuffleArray } from 'src/app/models/class/shuffle-array';
import { ActivityAnswer } from 'src/app/models/interface/game';
import { GameLevel } from 'src/app/models/interface/game-level';
import { GameType } from 'src/app/models/interface/game-type';
import { GameService } from 'src/app/services/game.service';
import { LaunchGameService } from 'src/app/services/launch-game.service';
import { ParagraphStageOneService } from 'src/app/services/paragraph/paragraph-stage-one.service';
import { PlaySoundService } from 'src/app/services/play-sound.service';
import { WordStageThreeService } from 'src/app/services/word/word-stage-three.service';
import { ActivityHintDialogComponent } from 'src/app/shared/shared.components/activity-hint-dialog/activity-hint-dialog.component';
import { ComponentReloadFunctionalityComponent } from 'src/app/shared/shared.components/component-reload-functionality/component-reload-functionality.component';
import { addParagraphLevelStageOneResult } from 'src/app/views/literacy-test/store/paragraph-level-result/paragraph-level-result.actions';
import { ParagraphLevelResultState } from 'src/app/views/literacy-test/store/paragraph-level-result/paragraph-level-result.reducer';
import { speechTexts } from 'src/app/views/literacy-test/store/speech-texts/speech-texts.selectors';
import { addWordLevelStageThreeResult } from 'src/app/views/literacy-test/store/word-level-result/word-level-result.actions';
import { WordLevelResultState } from 'src/app/views/literacy-test/store/word-level-result/word-level-result.reducer';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent
  extends ComponentReloadFunctionalityComponent
  implements OnInit, OnDestroy
{
  boardActivityHint: string = 'Read the paragraph below';
  checkTestCompletion: any;
  keyList: any[] = [];
  previewList: any[] = [];
  previewText: string = '';
  activityHint: any =
    'Click on the start button below to start the activity; Read the paragraph below noting the punctuations and at a steady pace';

  Subscriptions: Subscription[] = [];
  gameSessionId!: string;
  stageNumber: number = 1;
  gameLevel = GameLevel.PARAGRAPH;
  resultTextList: any[] = [];
  textPosition = 0;
  speechText!: string;
  isStart: boolean = false;
  speechTexts$!: Observable<any>;
  boardData: any;
  isLaunchTest!: boolean;
  btnTitle = 'Start';
  // isFinishedTest: boolean = true;
  isFinishedTest: boolean = false;
  //
  levelTitle!: string;
  gameType = GameType.LITERACY;

  toggleType!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _gameSvc: GameService,
    public dialog: MatDialog,
    private store: Store<ParagraphLevelResultState>,
    public override _router: Router,
    // Speech recog
    private _paragraphStageOneSvc: ParagraphStageOneService,
    private cdr: ChangeDetectorRef,
    private _playSoundSvc: PlaySoundService,
    private _launchGameSvc: LaunchGameService
  ) {
    super(_router);
    this._paragraphStageOneSvc?.init();
  }

  override ngOnInit(): void {
    this.buildForm();
    this._launchGameSvc.launchGameBehaviorSubject.subscribe((msg: any) => {
      if (msg) {
        this.isLaunchTest = msg;
      }
    });
    this.cdr.detectChanges();
    this.onGetGameSessionId();
    this.GetExerciseTexts();
    this.GetSpeechTextsFromAppState();
    this.loadBoardData();
  }

  buildForm() {
    this.toggleType = this._fb.group({
      toggleControl: true,
    });
  }
  toggle(toggleControl: any) {
    if (toggleControl.value.toggleControl) {
      this.stopService();
      this.clearService();
    }else{
      this.toggleType.controls['toggleControl'].setValue(false)
    }
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

  /* SPEECH RECOG CODE STARTS */

  loadBoardData() {
    this.boardData = this.resultTextList[this.textPosition];
    // console.log('this.boardData: ', this.boardData);
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

  correct() {
    this.boardData.isDone = true;
    this.onTestValues(this.resultTextList);
  }

  onTestValues(List: any) {
    let complete = List.filter((done: any) => done?.isDone == true);

    if (complete.length == List?.length) {
      //
      this.clearService();
      this.stopService();
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
    // console.warn('Result: ', Result);
    this.store.dispatch(addParagraphLevelStageOneResult({ payload: Result }));
    this._paragraphStageOneSvc.addParagraphLevelResultBehaviour.subscribe(
      (msg: any) => {
        if (msg) {
          // this._router.navigate([
          //   `/${GameType.LITERACY}/stage-completion/${this.gameLevel}/${this.stageNumber}`,
          // ]);
          this.isFinishedTest = true;
          this.stopBGSound();
          this.playLevelCompletedSound();
        }
      }
    );
  }

  GetExerciseTexts() {
    this.resultTextList = this._paragraphStageOneSvc.GetExerciseTexts();
  }
  startService() {
    this.isStart = true;
    this._paragraphStageOneSvc.start();
    this._playSoundSvc.stopLiteracyBGSound();
    this._launchGameSvc.sendLaunchGameBehaviorSubject(false);
  }

  stopService() {
    this.isStart = false;
    this._launchGameSvc.sendLaunchGameBehaviorSubject(true);
    this._paragraphStageOneSvc.stop();
    this._playSoundSvc.playLiteracyBGSound();
  }

  clearService() {
    this._paragraphStageOneSvc.clear();
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
    // this.stopService();
    // this.clearService();
    // this.boardData = null;
    // this.resultTextList = [];
    // this.textPosition = 0;
    // this.GetExerciseTexts();
    // this.resultTextList.forEach((obj: any) => (obj.isDone = false));
    // this.loadBoardData();
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
