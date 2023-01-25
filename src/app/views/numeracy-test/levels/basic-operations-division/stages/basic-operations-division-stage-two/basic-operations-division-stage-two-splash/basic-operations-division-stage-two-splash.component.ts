import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-operations-division-stage-two-splash',
  templateUrl: './basic-operations-division-stage-two-splash.component.html',
  styleUrls: ['./basic-operations-division-stage-two-splash.component.scss']
})
export class BasicOperationsDivisionStageTwoSplashComponent implements OnInit {
  menuList = [
    {
      title: 'NUMERACY',
    },
    {
      title: 'BASIC OPERATIONS DIVISION',
    },
    {
      title: 'STAGE 2',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
