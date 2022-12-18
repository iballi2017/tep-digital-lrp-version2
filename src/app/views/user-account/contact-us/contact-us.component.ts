import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactDetailsList = [
    {
      title: 'Email address',
      body: 'lrpnigeria@gmail.com',
    },
    {
      title: 'Phone number',
      body: '+234 7012345678',
    },
    {
      title: 'Address',
      body: '12 Akanbi street, Off Olaye, Oshodi, Lagos, Nigeria',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
