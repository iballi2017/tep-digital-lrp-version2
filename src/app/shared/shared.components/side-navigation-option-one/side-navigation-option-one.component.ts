import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-side-navigation-option-one',
  templateUrl: './side-navigation-option-one.component.html',
  styleUrls: ['./side-navigation-option-one.component.scss'],
})
export class SideNavigationOptionOneComponent implements OnInit {
  @Input() title!: string;
  @Input() navItemList!: any[];
  @Input() logout!: string;
  @Input() something: any;

  constructor(
    private _authSvc: AuthenticationService
  ) {}

  ngOnInit(): void {}

  closeDrawer() {
    this.something.toggle();
  }

  logoutUser() {
    this._authSvc.logoutUser();
  }
}
