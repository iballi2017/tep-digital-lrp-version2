import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-literacy-test',
  templateUrl: './literacy-test.component.html',
  styleUrls: ['./literacy-test.component.scss']
})
export class LiteracyTestComponent implements OnInit,AfterViewInit {
  @ViewChild('drawer') drawer!: any;
  literacyTestSideNavTitle = 'Level';
  logout = 'Logout';
  menuList = [
    {
      title: 'LITERACY',
    },
  ];

  navItemList: navItem[] = navItemList;


  constructor(private _routeSvc: RouteService) { }

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


export interface navItem {
  name: string;
  url: string;
}

const navItemList: navItem[] = [
  {
    name: 'Letter',
    url: '/literacy/levels/letter',
  },
  {
    name: 'Word',
    url: '/literacy/levels/word',
  },
  {
    name: 'Paragraph',
    url: '/literacy/levels/paragraph',
  },
  {
    name: 'Story',
    url: '/literacy/levels/story',
  }
];

