import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouteService } from 'src/app/services/route.service';
import { navItem } from '../literacy-test/literacy-test.component';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss'],
})
export class UserAccountComponent implements OnInit, AfterViewInit {
  title = 'ACCOUNT';
  literacyTestSideNavTitle = 'My Account';
  logout = 'Logout';
  isRoute = false;
  @ViewChild('drawer') drawer!: any;
  menuList = [
    {
      title: 'ACCOUNT',
    },
  ];
  
  navItemList: any[] = navItemList
  constructor(private _routeSvc: RouteService) {}

  ngOnInit(): void {
    this._routeSvc.onCheckRouteEvents();
  }

  ngAfterViewInit(): void {
    this._routeSvc.routeBehaviorSubject.subscribe((msg: any) => {
      if (msg) {
          this.drawer.close();
      }
    });
  }

}
const   navItemList: navItem[] = [
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