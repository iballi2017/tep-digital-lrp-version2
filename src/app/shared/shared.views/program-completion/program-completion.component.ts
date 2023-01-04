import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameType } from 'src/app/models/interface/game-type';

@Component({
  selector: 'app-program-completion',
  templateUrl: './program-completion.component.html',
  styleUrls: ['./program-completion.component.scss']
})
export class ProgramCompletionComponent implements OnInit {
  // @select((s) => s.game.gameSession) gameSession$: any;
  @Input() gameType!: string;
  @Input() levelTitle!: string;
  @Input() stageNumber!: number;
  pageTitle = 'YOU HAVE COMPLETEd tHIS program';
  pageFeaturedImage =
    '../../../../../assets/images/program-completion-page-bg.png';
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
  gameLevel: any;
  gameSessionId!: string;
  gameResult!: any;
  durationInSeconds = 10;
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  onContinueToNextStage($event: any) {
    console.log('this.gameSessionId: ', this.gameSessionId);
    console.log('this.gameResult: ', this.gameResult);
    console.log('this.gameType: ', this.gameType);
    setTimeout(() => {
      switch (this.gameType) {
        case GameType.LITERACY:
          this._router.navigate([`/literacy/levels/letter`]);
          break;
        case GameType.NUMERACY:
          this._router.navigate([`/numeracy/levels/number-recognition-one`]);
          break;

        default:
          this._router.navigate([`/`]);
          break;
      }
    }, 3000);
  }

  onEndAssessment($event: any) {
    if (!this.gameSessionId || !this.gameResult) {
      this._router.navigate(['/']);
    }
    // this._router.navigate([`/literacy/levels/lettering`]);
    this._router.navigate([`/${this.gameType}/levels/${this.gameLevel.levelTitle}`]);
  }
}
