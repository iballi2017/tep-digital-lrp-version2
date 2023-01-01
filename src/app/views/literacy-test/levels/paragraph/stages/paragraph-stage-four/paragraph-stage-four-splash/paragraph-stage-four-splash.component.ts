import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragraph-stage-four-splash',
  templateUrl: './paragraph-stage-four-splash.component.html',
  styleUrls: ['./paragraph-stage-four-splash.component.scss']
})
export class ParagraphStageFourSplashComponent implements OnInit {
  menuList = [
    {
      title: 'LITERACY',
    },
    {
      title: 'PARAGRAPH',
    },
    {
      title: 'STAGE 4',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
