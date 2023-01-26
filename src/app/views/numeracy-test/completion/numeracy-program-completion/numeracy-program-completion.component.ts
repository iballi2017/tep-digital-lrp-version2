import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameType } from 'src/app/models/interface/game-type';

@Component({
  selector: 'app-numeracy-program-completion',
  templateUrl: './numeracy-program-completion.component.html',
  styleUrls: ['./numeracy-program-completion.component.scss']
})
export class NumeracyProgramCompletionComponent implements OnInit {
  levelTitle!: string;
  gameLevel: any; gameType = GameType.NUMERACY;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParams();
    // this.levelTitle = 'Lettering';
  }

  getParams() {
    this._route.paramMap.subscribe({
      next: (params: any) => {
        // console.log('params: ', params);
        this.gameLevel = params.get('game-level');
        this.levelTitle = this.gameLevel;
      },
    });
  }


}
