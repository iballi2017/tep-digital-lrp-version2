import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-recognition-one-stage-one-splash',
  templateUrl: './number-recognition-one-stage-one-splash.component.html',
  styleUrls: ['./number-recognition-one-stage-one-splash.component.scss']
})
export class NumberRecognitionOneStageOneSplashComponent implements OnInit {
  menuList = [
    {
      title: 'NUMERACY',
    },
    {
      title: 'NUMBER RECOGNITION 1',
    },
    {
      title: 'STAGE 1',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
