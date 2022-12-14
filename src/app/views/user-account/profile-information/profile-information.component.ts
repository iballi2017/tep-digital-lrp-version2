import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IdentityService } from 'src/app/services/identity.service';
import { loadProfileInformations } from '../store/profile-information/profile-information.actions';
import { ProfileInformationState } from '../store/profile-information/profile-information.reducer';
import { profileInformation } from '../store/profile-information/profile-information.selectors';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.scss']
})
export class ProfileInformationComponent implements OnInit {
  title: string = "My Information";
  heading: string = "PERSONAL DETAILS"
  userData!: any;
  userData$!: Observable<any>
  constructor(private _identitySvc: IdentityService, private _router: Router,
    private store: Store<ProfileInformationState>) { }

  ngOnInit(): void {
    this.getUserData();
  }


  getUserData() {
    this.store.dispatch(loadProfileInformations());
    this.userData$ = this.store.pipe(select(profileInformation));
    console.warn(this.userData$)
    // this._identitySvc.getUserById().subscribe({
    //   next: (response) => {
    //     if (response) {
    //       this.userData = response?.data[0];
    //       console.group(this.userData)
    //     }
    //   }
    // });
  }


  onEditPersonalDetails(userData: any) {
    console.group(userData);
    this._router.navigate([
      `/account/update-personal-details/${userData?.usr_id}`,
    ]);
  }

}
