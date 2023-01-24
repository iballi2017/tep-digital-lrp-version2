import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GameSessionData } from 'src/app/models/interface/game';
import { GameLevel } from 'src/app/models/interface/game-level';
import { GameType } from 'src/app/models/interface/game-type';
import { GameService } from 'src/app/services/game.service';
import { LaunchGameService } from 'src/app/services/launch-game.service';
import { PlaySoundService } from 'src/app/services/play-sound.service';
import { BooleanAlertDialogComponent } from '../../shared.components/boolean-alert-dialog/boolean-alert-dialog.component';

@Component({
  selector: 'app-level-completion',
  templateUrl: './level-completion.component.html',
  styleUrls: ['./level-completion.component.scss'],
})
export class LevelCompletionComponent implements OnInit {
  stageNumber: number = 0;
  // @select((s) => s.game.gameSession) gameSession$: any;
  @Input() gameType!: string;
  @Input() levelTitle!: string;
  // @Input() stageNumber!: number;
  isLaunchTest!: boolean;
  launchBtnTitle = "Proceed";
  pageTitle!: string;
  pageFeaturedImage =
    '../../../../../assets/images/level-completion-page-bg.png';
  btnStyle = {
    color: 'red',
  };
  btnStyle2 = {
    color: 'blue',
  };
  btnClasses = {
    'primary-btn': true,
    'btn-block': true,
    'mb-3': true,
    'w-100': true,
    'py-3': true,
  };
  btnTitle = 'CONTINUE';
  btnTitle2 = 'END ASSESSMENT';
  gameSessionId!: string;
  gameResult!: any;
  durationInSeconds = 10;
  gameLevel: any;
  constructor(
    private _router: Router,
    private _gameSvc: GameService,
    public dialog: MatDialog,
    private _playSoundSvc: PlaySoundService,
    private _launchGameSvc: LaunchGameService
  ) { }

  ngOnInit(): void {
    this._launchGameSvc.launchGameBehaviorSubject.subscribe((msg: any) => {
      if (msg) {
        this.isLaunchTest = msg
      }
    })
    this.gameLevel = {
      stageNumber: this.stageNumber,
      levelTitle: this.levelTitle,
    };

    // LOAD GAME SESSION DATA
    this._gameSvc.LoadGameSession();
    this.onGetGameSessionId();
    this.onGetStageResult();
    this.pageTitle = `YOU HAVE COMPLETE ${this.gameLevel?.levelTitle} LEVEL OF THE PROGRAM`;
  }

  onGetGameSessionId() {
    this._gameSvc.LoadGameSession();
    this._gameSvc.gameSessionBehaviorSubject.subscribe((msg: any) => {
      // console.log("msg: ", msg)
      this.gameSessionId = msg.session_id;
    });
  }

  onGetStageResult() {
    let x: any = localStorage.getItem(GameSessionData.result);
    this.gameResult = x;
  }

  onContinueToNextStage($event: any) {
    if (!this.gameSessionId || !this.gameResult) {
      this._router.navigate(['/']);
    }
    setTimeout(() => {
      switch (this.levelTitle) {
        case GameLevel.LETTER:
          this._router.navigate([
            `/shared/new-task-loading/${GameLevel.WORD}/${this.stageNumber}/${GameType.LITERACY}`,
          ]);
          break;
        case GameLevel.WORD:
          this._router.navigate([
            `/shared/new-task-loading/${GameLevel.PARAGRAPH}/${this.stageNumber}/${GameType.LITERACY}`,
          ]);
          break;
        case GameLevel.PARAGRAPH:
          this._router.navigate([
            `/shared/new-task-loading/${GameLevel.STORY}/${this.stageNumber}/${GameType.LITERACY}`,
          ]);
          break;
        case GameLevel.NUMBER_RECOGNITION_ONE:
          this._router.navigate([
            `/shared/new-task-loading/${GameLevel.NUMBER_RECOGNITION_TWO}/${this.stageNumber}/${GameType.NUMERACY}`,
          ]);
          break;
        case GameLevel.NUMBER_RECOGNITION_TWO:
          this._router.navigate([
            `/shared/new-task-loading/${GameLevel.PLACE_VALUE}/${this.stageNumber}/${GameType.NUMERACY}`,
          ]);
          break;
        // case GameLevel.NUMBER_RECOGNITION_THREE:
        //   this._router.navigate([
        //     `/shared/new-task-loading/${GameLevel.PLACE_VALUE}/${this.stageNumber}/${GameType.NUMERACY}`,
        //   ]);
        //   break;

        // case GameLevel.PLACE_VALUE:
        //   this._router.navigate([
        //     `/shared/new-task-loading/${GameLevel.BASIC_OPERATIONS_ADDITION}/${this.stageNumber}/${GameType.NUMERACY}`,
        //   ]);
        //   break;

        case GameLevel.PLACE_VALUE:
          this._router.navigate([
            `/shared/new-task-loading/${GameLevel.NUMBER_RECOGNITION_THREE}/${this.stageNumber}/${GameType.NUMERACY}`,
          ]);
          break;


        case GameLevel.NUMBER_RECOGNITION_THREE:
          this._router.navigate([
            `/shared/new-task-loading/${GameLevel.BASIC_OPERATIONS_ADDITION}/${this.stageNumber}/${GameType.NUMERACY}`,
          ]);
          break;

        case GameLevel.BASIC_OPERATIONS_ADDITION:
          this._router.navigate([
            `/shared/new-task-loading/${GameLevel.BASIC_OPERATIONS_SUBTRACTION}/${this.stageNumber}/${GameType.NUMERACY}`,
          ]);
          break;

        case GameLevel.BASIC_OPERATIONS_SUBTRACTION:
          this._router.navigate([
            `/shared/new-task-loading/${GameLevel.BASIC_OPERATIONS_MULTIPLICATION}/${this.stageNumber}/${GameType.NUMERACY}`,
          ]);
          break;

        case GameLevel.BASIC_OPERATIONS_MULTIPLICATION:
          this._router.navigate([
            `/shared/new-task-loading/${GameLevel.BASIC_OPERATIONS_DIVISION}/${this.stageNumber}/${GameType.NUMERACY}`,
          ]);
          break;

        default:
          this._router.navigate([
            `/shared/new-task-loading/${GameLevel.LETTER}/${this.stageNumber}/${this.gameType}`,
          ]);
          break;
      }
    }, 3000);
  }

  onEndAssessment($event: any) {
    this.openDialog(this.gameSessionId);
  }

  openDialog(item: any) {
    const dialogRef = this.dialog.open(BooleanAlertDialogComponent, {
      width: '100%',
      maxWidth: '500px',
      data: {
        textInfo: 'Are you sure you want to end assessment?',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      //
      if (result) {
        if (!item) {
          this._router.navigate(['/']);
        }
        // this._router.navigate([`/literacy/levels/lettering`]);
        this._router.navigate([
          `/${this.gameType}/levels/${this.gameLevel.levelTitle}`,
        ]);
      }
    });
  }

  

  playBGSound() {
    this._playSoundSvc.playLevelCompletionSound();
    this._launchGameSvc.sendLaunchGameBehaviorSubject(true)
  }

  stopBGSound() {
    this._playSoundSvc.stopLevelCompletionSound();
  }

  ngOnDestroy(): void {
    this._playSoundSvc.stopLevelCompletionSound();
    this._launchGameSvc.sendLaunchGameBehaviorSubject(false)
  }
}
