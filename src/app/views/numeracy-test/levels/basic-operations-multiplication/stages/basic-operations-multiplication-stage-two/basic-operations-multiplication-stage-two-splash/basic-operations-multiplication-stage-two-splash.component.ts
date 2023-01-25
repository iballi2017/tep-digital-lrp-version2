import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-operations-multiplication-stage-two-splash',
  templateUrl: './basic-operations-multiplication-stage-two-splash.component.html',
  styleUrls: ['./basic-operations-multiplication-stage-two-splash.component.scss']
})
export class BasicOperationsMultiplicationStageTwoSplashComponent implements OnInit {
  menuList = [
    {
      title: 'NUMERACY',
    },
    {
      title: 'BASIC OPERATIONS MULTIPLICATION',
    },
    {
      title: 'STAGE 2',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
