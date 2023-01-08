import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Snackbar } from 'src/app/models/class/snackbar';
import { PersonalInformation } from 'src/app/models/class/user';
import { UpdateUserModel } from 'src/app/models/interface/user';
import { IdentityService } from 'src/app/services/identity.service';
import {
  loadProfileInformations,
  updateProfileInformation,
} from '../../store/profile-information/profile-information.actions';
import { ProfileInformationState } from '../../store/profile-information/profile-information.reducer';
import { profileInformation } from '../../store/profile-information/profile-information.selectors';

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
  btnClasses: string = 'btn-40-height px-4';
  gender = ['male', 'female', 'other'];
  isUpdating: boolean = false;
  updatingText: string = 'updating...';
  constructor(
    private _identitySvc: IdentityService,
    private _fb: FormBuilder,
    private _route: ActivatedRoute,
    // private ngRedux: NgRedux<IAppState>,
    private _router: Router,
    private store: Store<ProfileInformationState>,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.getUserPersonalInformation();
    // this.onGetParams();

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

  getUserPersonalInformation() {
    this.store.dispatch(loadProfileInformations());
    // let userData$ = this.store.pipe(select(profileInformation));
    // userData$.subscribe((data: any) => {
    //   if (data) {
    //     this.getUserData(data)
    //   }
    // })

    this.store.pipe(select(profileInformation)).subscribe((data) => {
      let userData$ = Object.assign(new PersonalInformation(), data);
      this.getUserData(userData$);
    });
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
        this.userId = params.get('userId');
      }
    });
  }

  // getUserDetails() {
  //   this._identitySvc.getUserById().subscribe({
  //     next: (response) => {
  //       if (response) {
  //         console.group('user details: ', response);
  //       }
  //     },
  //     error: (err: any) => {
  //       if (err) {
  //         console.warn('Error: ', err);
  //       }
  //     },
  //   });
  // }

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
    const Payload: any = {
      usr_fullname: this.UpdatePersonalDetailsForm.value.FullName,
      usr_gender: this.UpdatePersonalDetailsForm.value.Gender,
      usr_email: this.UpdatePersonalDetailsForm.value.EmailAddress,
      usr_party: this.UpdatePersonalDetailsForm.value.Party,
    };
    // const Payload: UpdateUserModel = {
    //   usr_fullname: this.UpdatePersonalDetailsForm.value.FullName,
    //   usr_gender: this.UpdatePersonalDetailsForm.value.Gender,
    // };

    if (this.UpdatePersonalDetailsForm.invalid) {
      return;
    } else {
      this.processData(Payload);
    }

    // const Payload: UpdateUserModel = {
    //   usr_fullname: this.UpdatePersonalDetailsForm.value.FullName,
    //   usr_gender: this.UpdatePersonalDetailsForm.value.Gender,
    // };

    // const update: Update<PersonalInformation> = {
    //   id: this.model.usr_id,
    //   changes: Payload
    // }

    // if (this.UpdatePersonalDetailsForm.invalid) {
    //   return
    // } else {
    //   this.processData({ profileInformation: update });
    // }
  }

  processData(Payload: any) {
    this.isUpdating = true;
    setTimeout(() => {
      this.store.dispatch(
        updateProfileInformation({ profileInformation: Payload })
      );
      this._identitySvc.UpdateUserDetailsBehaviour.subscribe((msg: any) => {
        if (msg) {
          this.isUpdating = false;
        }
      });
    }, 2000);

    // let subscription = this._identitySvc.UpdateUserDetails(Payload).subscribe({
    //   next: (response: any) => {
    //     if (response) {
    //       console.warn("response: ", response)
    //       const successResponse = response?.message;
    //       // const x = new Snackbar(successResponse, this._snackBar);
    //       const x = new Snackbar("Personal information updated!", this._snackBar);
    //       // x.openTextSnackBar();
    //       x.successSnackbar();
    //       // this.ngRedux.dispatch({
    //       //   type: UPDATE_USER_DETAILS_SUCCESS,
    //       //   payload: {
    //       //     response: response,
    //       //     data: Payload,
    //       //   },
    //       // });
    //       this._router.navigate(['/account']);

    //     }
    //   },
    //   error: (err: any) => {
    //     if (err) {
    //       console.warn('Error: ', err);
    //       // this.ngRedux.dispatch({
    //       //   type: UPDATE_USER_DETAILS_ERROR,
    //       //   payload: err,
    //       // });
    //     }
    //   },
    // });
    // this.Subscriptions.push(subscription);
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
