import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-recognition-one-stage-one-splash',
  templateUrl: './number-recognition-one-stage-one-splash.component.html',
  styleUrls: ['./number-recognition-one-stage-one-splash.component.scss']
})
export class NumberRecognitionOneStageOneSplashComponent implements OnInit {
  menuList = [
    {
      title: 'NUMBER RECOGNITION ONE',
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
