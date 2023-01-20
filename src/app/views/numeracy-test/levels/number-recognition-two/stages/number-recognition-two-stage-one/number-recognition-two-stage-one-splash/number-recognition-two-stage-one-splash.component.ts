import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-recognition-two-stage-one-splash',
  templateUrl: './number-recognition-two-stage-one-splash.component.html',
  styleUrls: ['./number-recognition-two-stage-one-splash.component.scss']
})
export class NumberRecognitionTwoStageOneSplashComponent implements OnInit {
  menuList = [
    {
      title: 'NUMERACY',
    },
    {
      title: 'NUMBER RECOGNITION 2',
    },
    {
      title: 'STAGE 1',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
