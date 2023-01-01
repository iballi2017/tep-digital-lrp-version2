import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragraph-stage-two-splash',
  templateUrl: './paragraph-stage-two-splash.component.html',
  styleUrls: ['./paragraph-stage-two-splash.component.scss']
})
export class ParagraphStageTwoSplashComponent implements OnInit {

  menuList = [
    {
      title: 'LITERACY',
    },
    {
      title: 'PARAGRAPH',
    },
    {
      title: 'STAGE 2',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
