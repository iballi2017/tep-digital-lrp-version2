import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss'],
})
export class UserAccountComponent implements OnInit {
  title = 'ACCOUNT';
  literacyTestSideNavTitle = 'My Account';
  logout = 'Logout';
  menuList = [
    {
      title: 'ACCOUNT',
    },
  ];
  // navItemList: navItem[] = [
  navItemList: any[] = [
    {
      name: 'Home',
      url: '/home',
    },
    {
      name: 'My Information',
      url: '/account/personal-information',
    },
    {
      name: 'Reports',
      url: '/account/reports',
    },
    {
      name: 'About the app',
      url: '/account/about-the-app',
    },
    {
      name: 'Contact Us',
      url: '/account/contact-us',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
