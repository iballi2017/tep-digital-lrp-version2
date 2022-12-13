import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letter-stage-one-splash',
  templateUrl: './letter-stage-one-splash.component.html',
  styleUrls: ['./letter-stage-one-splash.component.scss']
})
export class LetterStageOneSplashComponent implements OnInit {
  
  menuList = [
    {
      title: 'LITERACY',
    },
    {
      title: 'LETTER',
    },
    {
      title: 'STAGE 1',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
