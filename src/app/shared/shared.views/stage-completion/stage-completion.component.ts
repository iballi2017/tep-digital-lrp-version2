import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GameLevel } from 'src/app/models/interface/game-level';
import { GameService } from 'src/app/services/game.service';
import { LaunchGameService } from 'src/app/services/launch-game.service';
import { PlaySoundService } from 'src/app/services/play-sound.service';
import { BooleanAlertDialogComponent } from '../../shared.components/boolean-alert-dialog/boolean-alert-dialog.component';

@Component({
  selector: 'app-stage-completion',
  templateUrl: './stage-completion.component.html',
  styleUrls: ['./stage-completion.component.scss'],
})
export class StageCompletionComponent implements OnInit {
  @Input() gameType!: string;
  @Input() levelTitle!: string;
  @Input() stageNumber!: number;
  isLaunchTest!: boolean;
  launchBtnTitle = "Proceed";
  pageTitle = '! ! STAGE COMPLETE ! !';
  pageFeaturedImage =
    '../../../../../assets/images/stage-completion-featured-image.png';

  //
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
    'py-xl-3': true,
    'py-2': true,
  };
  btnClasses2 = { 'danger-btn': true, 'btn-block': true };
  btnTitle = 'CONTINUE';
  btnTitle2 = 'END ASSESSMENT';
  gameLevel: any;
  gameSessionId!: string;
  gameResult!: any;
  durationInSeconds = 10;
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
    this.onGetGameSessionId();
  }
  onGetGameSessionId() {
    this._gameSvc.LoadGameSession();
    this._gameSvc.gameSessionBehaviorSubject.subscribe((msg: any) => {
      // console.log('msg: ', msg);
      this.gameSessionId = msg.session_id;
    });
  }

  onContinueToNextStage($event: any) {
    console.group(this.gameSessionId);
    if (!this.gameSessionId) {
      this._router.navigate(['/']);
      return;
    } else {
      setTimeout(() => {
        if(this.levelTitle == GameLevel.STORY){
          this._router.navigate(['/literacy/letter/stage-1/letter-splash']);
          return;
        }
        this._router.navigate([
          `/shared/new-task-loading/${this.levelTitle}/${this.stageNumber}/${this.gameType}`,
        ]);
      }, 3000);
    }
  }

  onEndAssessment($event: any) {
    this.openDialog(this.gameSessionId);
  }

  onRemoveReport(sessionId: string) {
    console.log('sessionId: ', sessionId);
    this.openDialog(sessionId);
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
          return;
        } else {
          this._router.navigate([
            `/${this.gameType}/levels/${this.gameLevel.levelTitle}`,
          ]);
        }
      }
    });
  }


  playBGSound() {
    this._playSoundSvc.playStageCompletionSound();
    this._launchGameSvc.sendLaunchGameBehaviorSubject(true)
  }

  stopBGSound() {
    this._playSoundSvc.stopStageCompletionSound();
  }

  ngOnDestroy(): void {
    this._playSoundSvc.stopStageCompletionSound();
    this._launchGameSvc.sendLaunchGameBehaviorSubject(false)
  }
}
