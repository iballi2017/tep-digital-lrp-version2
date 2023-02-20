import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameLevel } from 'src/app/models/interface/game-level';
// import { GameLevel } from 'src/app/models/types/game-level';
// import { GameStage } from 'src/app/models/types/game-stage';

@Component({
  selector: 'app-level-loader',
  templateUrl: './level-loader.component.html',
  styleUrls: ['./level-loader.component.scss'],
})
export class LevelLoaderComponent implements OnInit, AfterViewChecked {
  @Input() gameType!: string;
  levelTitle!: any;
  stageNumber!: number;
  constructor(private _router: Router, private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getUrlParams();
  }
  ngAfterViewChecked(): void {
    this.playAnimation();
  }
  playAnimation() {
    let progressBar = document.querySelector('#progress');
    // progressBar?.setAttribute('class', 'play-animation');
    progressBar?.classList.add('play-animation');
  }

  getUrlParams() {
    this._route.paramMap.subscribe({
      next: (params) => {
        if (params) {
          console.log('params: ', params);
          // let x: any = params.get('levelTitle');
          let x: any = params.get('game-level');
          this.levelTitle = x?.toLowerCase();
          let stageNumber: any = params.get('stageNumber');
          this.stageNumber = parseInt(stageNumber);
          let gameType = params.get('gameType');

          console.group({
            levelTitle: this.levelTitle,
            stageNumber: this.stageNumber,
            gameType: gameType,
          });
          setTimeout(() => {
            // if (
            //   this.levelTitle == GameLevel.LETTER &&
            //   this.stageNumber == GameStage.THREE
            // ) {
            //   this._router.navigate(['/literacy/word/stage-1']);
            // } else {
            //   this._router.navigate([
            //     // /literacy/lettering/stage-2/lettering-splash
            //     `/${gameType}/${this.levelTitle}/stage-${this.stageNumber + 1}`,
            //   ]);
            // }
            this._router.navigate([
              `/${gameType}/${this.levelTitle}/stage-${this.stageNumber + 1}`,
            ]);
          }, 3000);
        }
      },
    });
  }
}
