import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-stage-three-splash',
  templateUrl: './word-stage-three-splash.component.html',
  styleUrls: ['./word-stage-three-splash.component.scss']
})
export class WordStageThreeSplashComponent implements OnInit {
  menuList = [
    {
      title: 'LITERACY',
    },
    {
      title: 'WORD',
    },
    {
      title: 'STAGE 3',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
