import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-literacy-test',
  templateUrl: './literacy-test.component.html',
  styleUrls: ['./literacy-test.component.scss']
})
export class LiteracyTestComponent implements OnInit {
  literacyTestSideNavTitle = 'Level';
  logout = 'Logout';
  menuList = [
    {
      title: 'LITERACY',
    },
  ];
 
  navItemList: navItem[] = [
    {
      name: 'Letter',
      url: '/literacy/levels/lettering',
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
  constructor() { }

  ngOnInit(): void {
  }

}


export interface navItem {
  name: string;
  url: string;
}
