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
