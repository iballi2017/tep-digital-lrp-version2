import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-operations-multiplication-stage-three-splash',
  templateUrl: './basic-operations-multiplication-stage-three-splash.component.html',
  styleUrls: ['./basic-operations-multiplication-stage-three-splash.component.scss']
})
export class BasicOperationsMultiplicationStageThreeSplashComponent implements OnInit {
  menuList = [
    {
      title: 'NUMERACY',
    },
    {
      title: 'MULTIPLICATION',
    },
    {
      title: 'STAGE 3',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
