import { Component, OnInit } from '@angular/core';
import { navItem } from '../literacy-test/literacy-test.component';

@Component({
  selector: 'app-numeracy-test',
  templateUrl: './numeracy-test.component.html',
  styleUrls: ['./numeracy-test.component.scss'],
})
export class NumeracyTestComponent implements OnInit {
  literacyTestSideNavTitle = 'Level';
  logout = 'Logout';
  menuList = [
    {
      title: 'NUMERACY',
    },
  ];
  navItemList: navItem[] = [
    // {
    //   name: 'Number recognition',
    //   url: 'levels/number-recognition',
    // },
    {
      name: 'Number recognition 1',
      url: '/numeracy/levels/number-recognition-one',
    },
    {
      name: 'Number recognition 2',
      url: '/numeracy/levels/number-recognition-two',
    },
    {
      name: 'Place value',
      url: '/numeracy/levels/place-value',
    },
    {
      name: 'Number recognition 3',
      url: '/numeracy/levels/number-recognition-three',
    },
    {
      name: 'Basic operations: Addition',
      url: '/numeracy/levels/basic-operations-addition',
    },
    {
      name: 'Basic operations: Subtraction',
      url: '/numeracy/levels/basic-operations-subtraction',
    },
    {
      name: 'Basic operations: Division',
      url: '/numeracy/levels/basic-operations-division',
    },
    {
      name: 'Basic operations: Multiplication',
      url: '/numeracy/levels/basic-operations-multiplication',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
