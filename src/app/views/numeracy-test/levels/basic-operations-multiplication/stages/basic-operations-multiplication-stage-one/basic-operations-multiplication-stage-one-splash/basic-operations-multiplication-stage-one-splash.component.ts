import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-operations-multiplication-stage-one-splash',
  templateUrl: './basic-operations-multiplication-stage-one-splash.component.html',
  styleUrls: ['./basic-operations-multiplication-stage-one-splash.component.scss']
})
export class BasicOperationsMultiplicationStageOneSplashComponent implements OnInit {
  menuList = [
    {
      title: 'NUMERACY',
    },
    {
      title: 'BASIC OPERATIONS MULTIPLICATION',
    },
    {
      title: 'STAGE 1',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
