import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb-topbar',
  templateUrl: './breadcrumb-topbar.component.html',
  styleUrls: ['./breadcrumb-topbar.component.scss'],
})
export class BreadcrumbTopbarComponent implements OnInit {
  @Input() menuList: any;
  constructor(private _router: Router) {}

  ngOnInit(): void {}
  back() {
    history.back();
  }

  closePage() {
    this._router.navigate(['/program-starter']);
  }
}
