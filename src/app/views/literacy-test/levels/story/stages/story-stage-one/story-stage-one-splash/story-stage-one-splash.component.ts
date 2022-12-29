import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-stage-one-splash',
  templateUrl: './story-stage-one-splash.component.html',
  styleUrls: ['./story-stage-one-splash.component.scss']
})
export class StoryStageOneSplashComponent implements OnInit {
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
