import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-stage-one-splash',
  templateUrl: './word-stage-one-splash.component.html',
  styleUrls: ['./word-stage-one-splash.component.scss'],
})
export class WordStageOneSplashComponent implements OnInit {
  menuList = [
    {
      title: 'LITERACY',
    },
    {
      title: 'WORD',
    },
    {
      title: 'STAGE 1',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
