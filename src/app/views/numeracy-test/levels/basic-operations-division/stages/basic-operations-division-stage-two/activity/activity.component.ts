import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  menuList = [
    {
      title: 'NUMBERACY',
    },
    {
      title: 'DIVISION',
    },
    {
      title: 'STAGE 2',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
