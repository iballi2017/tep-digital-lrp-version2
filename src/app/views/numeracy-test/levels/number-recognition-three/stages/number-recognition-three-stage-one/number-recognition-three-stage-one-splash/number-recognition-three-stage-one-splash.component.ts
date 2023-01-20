import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-recognition-three-stage-one-splash',
  templateUrl: './number-recognition-three-stage-one-splash.component.html',
  styleUrls: ['./number-recognition-three-stage-one-splash.component.scss']
})
export class NumberRecognitionThreeStageOneSplashComponent implements OnInit {
  menuList = [
    {
      title: 'NUMERACY',
    },
    {
      title: 'NUMBER RECOGNITION 3',
    },
    {
      title: 'STAGE 1',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
