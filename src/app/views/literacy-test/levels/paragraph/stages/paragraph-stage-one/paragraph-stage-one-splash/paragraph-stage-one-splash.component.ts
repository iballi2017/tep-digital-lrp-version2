import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragraph-stage-one-splash',
  templateUrl: './paragraph-stage-one-splash.component.html',
  styleUrls: ['./paragraph-stage-one-splash.component.scss']
})
export class ParagraphStageOneSplashComponent implements OnInit {
  menuList = [
    {
      title: 'LITERACY',
    },
    {
      title: 'PARAGRAPH',
    },
    {
      title: 'STAGE 1',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
