import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-topbar',
  templateUrl: './breadcrumb-topbar.component.html',
  styleUrls: ['./breadcrumb-topbar.component.scss'],
})
export class BreadcrumbTopbarComponent implements OnInit {
  @Input() menuList: any;
  constructor() {}

  ngOnInit(): void {}
  back() {
    history.back();
  }

  closePage() {
    return;
  }
}
