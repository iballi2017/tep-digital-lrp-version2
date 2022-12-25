import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  menuList = [
    {
      title: 'LITERACY',
    },
    {
      title: 'LETTER',
    },
    {
      title: 'STAGE 3',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
