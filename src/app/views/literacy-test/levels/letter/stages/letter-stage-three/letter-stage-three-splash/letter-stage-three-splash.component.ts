import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letter-stage-three-splash',
  templateUrl: './letter-stage-three-splash.component.html',
  styleUrls: ['./letter-stage-three-splash.component.scss']
})
export class LetterStageThreeSplashComponent implements OnInit {
  
  menuList = [
    {
      title: 'LITERACY',
    },
    {
      title: 'LETTER',
    },
    {
      title: 'STAGE 3',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
