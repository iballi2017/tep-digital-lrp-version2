import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UpdateUserModel } from 'src/app/models/interface/user';
import { IdentityService } from 'src/app/services/identity.service';

@Component({
  selector: 'app-update-personal-information',
  templateUrl: './update-personal-information.component.html',
  styleUrls: ['./update-personal-information.component.scss'],
})
export class UpdatePersonalInformationComponent implements OnInit {
  // @select((s) => s.userDetails.userDetails) userDetails$: any;
  // @select((s) => s.userDetails.isLoading) isLoading: any;
  userData: any;
  submitBtnLabel: string = 'Save';
  UpdatePersonalDetailsForm!: FormGroup;
  Subscriptions: Subscription[] = [];
  userId: any;

  constructor(
    private _identitySvc: IdentityService,
    private _fb: FormBuilder,
    private _route: ActivatedRoute,
    // private ngRedux: NgRedux<IAppState>,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.onGetParams();
    this.getUserDetails();

    // let subscription = this.isLoading.subscribe((l: boolean) => {
    //   if (l) {
    //     this.submitBtnLabel = 'Saving...';
    //   } else {
    //     this.submitBtnLabel = 'Save';
    //   }
    // });

    // this.userDetails$.subscribe((e: any) => {
    //   this.userData = e;
    //   this.getUserData(e);
    // });
    // this.Subscriptions.push(subscription);
  }

  buildForm() {
    this.UpdatePersonalDetailsForm = this._fb.group({
      FullName: ['', [Validators.required]],
      EmailAddress: ['', [Validators.required, Validators.email]],
      Party: ['', [Validators.required]],
      Gender: ['', [Validators.required]],
    });
  }

  onGetParams() {
    this._route.paramMap.subscribe((params: any) => {
      if (params) {
        console.warn('params: ', params);
        this.userId = params.get('userId');
      }
    });
  }

  getUserDetails() {
    this._identitySvc.getUserById().subscribe({
      next: (response) => {
        if (response) {
          console.group('user details: ', response);
        }
      },
      error: (err: any) => {
        if (err) {
          console.warn('Error: ', err);
        }
      },
    });
  }

  getUserData(data: any) {
    this.UpdatePersonalDetailsForm.controls['FullName'].setValue(
      data?.usr_fullname
    );
    this.UpdatePersonalDetailsForm.controls['EmailAddress'].setValue(
      data?.usr_email
    );
    this.UpdatePersonalDetailsForm.controls['Party'].setValue(data?.usr_party);
    this.UpdatePersonalDetailsForm.controls['Gender'].setValue(
      data?.usr_gender
    );
  }

  onSubmit() {
    // this.ngRedux.dispatch({ type: UPDATE_USER_DETAILS });
    const Payload: UpdateUserModel = {
      usr_fullname: this.UpdatePersonalDetailsForm.value.FullName,
      usr_gender: this.UpdatePersonalDetailsForm.value.Gender,
    };
    let subscription = this._identitySvc.UpdateUserDetails(Payload).subscribe({
      next: (response: any) => {
        if (response) {
          // this.ngRedux.dispatch({
          //   type: UPDATE_USER_DETAILS_SUCCESS,
          //   payload: {
          //     response: response,
          //     data: Payload,
          //   },
          // });
          this._router.navigate(['/account']);
        }
      },
      error: (err: any) => {
        if (err) {
          console.warn('Error: ', err);
          // this.ngRedux.dispatch({
          //   type: UPDATE_USER_DETAILS_ERROR,
          //   payload: err,
          // });
        }
      },
    });
    this.Subscriptions.push(subscription);
  }

  back() {
    history.back();
  }

  ngOnDestroy(): void {
    this.Subscriptions.forEach((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    });
  }
}
