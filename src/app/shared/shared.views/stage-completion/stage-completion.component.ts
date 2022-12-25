import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-stage-completion',
  templateUrl: './stage-completion.component.html',
  styleUrls: ['./stage-completion.component.scss'],
})
export class StageCompletionComponent implements OnInit {
  @Input() gameType!: string;
  @Input() levelTitle!: string;
  @Input() stageNumber!: number;
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
    'py-2': true,
  };
  btnClasses2 = { 'danger-btn': true, 'btn-block': true };
  btnTitle = 'CONTINUE';
  btnTitle2 = 'END ASSESSMENT';
  gameLevel: any;
  gameSessionId!: string;
  gameResult!: any;
  durationInSeconds = 10;
  constructor(private _router: Router, private _gameSvc: GameService) {}

  ngOnInit(): void {
    this.onGetGameSessionId();
  }
  onGetGameSessionId() {
    this._gameSvc.LoadGameSession();
    this._gameSvc.gameSessionBehaviorSubject.subscribe((msg: any) => {
      console.log('msg: ', msg);
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
        this._router.navigate([
          `/shared/new-task-loading/${this.levelTitle}/${this.stageNumber}/${this.gameType}`,
        ]);
      }, 3000);
    }
  }

  onEndAssessment($event: any) {
    if (!this.gameSessionId) {
      this._router.navigate(['/']);
      return;
    } else {
      this._router.navigate([
        `/${this.gameType}/levels/${this.gameLevel.levelTitle}`,
      ]);
    }
  }
}
