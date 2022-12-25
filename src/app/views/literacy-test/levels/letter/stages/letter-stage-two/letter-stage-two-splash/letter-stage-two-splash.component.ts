import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letter-stage-two-splash',
  templateUrl: './letter-stage-two-splash.component.html',
  styleUrls: ['./letter-stage-two-splash.component.scss']
})
export class LetterStageTwoSplashComponent implements OnInit {
  menuList = [
    {
      title: 'LITERACY',
    },
    {
      title: 'LETTER',
    },
    {
      title: 'STAGE 2',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
