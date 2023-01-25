import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-operations-addition-stage-one-splash',
  templateUrl: './basic-operations-addition-stage-one-splash.component.html',
  styleUrls: ['./basic-operations-addition-stage-one-splash.component.scss']
})
export class BasicOperationsAdditionStageOneSplashComponent implements OnInit {
  menuList = [
    {
      title: 'NUMERACY',
    },
    {
      title: 'BASIC OPERATIONS ADDITION',
    },
    {
      title: 'STAGE 1',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
