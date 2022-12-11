import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdentityService } from 'src/app/services/identity.service';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.scss']
})
export class ProfileInformationComponent implements OnInit {
  title: string = "My Information";
  heading: string = "PERSONAL DETAILS"
  userData!: any;
  constructor(private _identitySvc: IdentityService, private _router: Router) { }

  ngOnInit(): void {
    this.getUserData();
  }


  getUserData() {
    this._identitySvc.getUserById().subscribe({
      next: (response) => {
        if (response) {
          this.userData = response?.data[0];
          console.group(this.userData)
        }
      }
    });
  }


  onEditPersonalDetails(userData: any) {
    console.group(userData);
    this._router.navigate([
      `/account/update-personal-details/${userData?.usr_id}`,
    ]);
  }

}
