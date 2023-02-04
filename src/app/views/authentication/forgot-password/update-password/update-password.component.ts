import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  AuthenticationService,
  ChangePasswordData,
} from 'src/app/services/authentication.service';
import { updatePassword } from '../../store/forgot-password/forgot-password.actions';
import { ForgotPasswordState } from '../../store/forgot-password/forgot-password.reducer';

function passwordMatchValidator(form: any) {
  const NewPassword = form.get('NewPassword');
  const ConfirmNewPassword = form.get('ConfirmNewPassword');

  if (NewPassword.value != ConfirmNewPassword.value) {
    ConfirmNewPassword.setErrors({ PasswordsMatch: true });
  } else {
    ConfirmNewPassword.setErrors(null);
  }
  return null;
}

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss'],
})
export class UpdatePasswordComponent implements OnInit {
  // @select((s) => s.forgotPassword.updateUserPasswordResponse)
  // updateUserPasswordResponse$: any;
  // @select((s) => s.forgotPassword.error)
  // error$: any;
  // @select((s) => s.forgotPassword.isLoading) isLoading$: any;

  isLoading$ = of(false);
  btnTitle = 'Submit';
  btnClasses = 'btn primary-btn text-uppercase px-5 py-2';
  UpdatePasswordForm!: FormGroup;
  verificationCode!: string;
  reset_selector!: string;
  constructor(
    private _fb: FormBuilder,
    private _authSvc: AuthenticationService,
    // private ngRedux: NgRedux<IAppState>,
    private _route: ActivatedRoute,
    private store: Store<ForgotPasswordState>
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.getUrlParams();
    // this.isLoading$.subscribe((load: boolean) => {
    //   if (load) {
    //     this.btnTitle = 'Loading...';
    //   } else {
    //     this.btnTitle = 'Submit';
    //   }
    // });
  }

  buildForm() {
    this.UpdatePasswordForm = this._fb.group(
      {
        NewPassword: ['', [Validators.required]],
        ConfirmNewPassword: ['', [Validators.required]],
      },
      {
        validators: passwordMatchValidator,
      }
    );
  }

  getUrlParams() {
    this._route.paramMap.subscribe({
      next: (params: any) => {
        // f45a912c/13f6729dc63dbb858682f174725db8
        if (params) {
          this.reset_selector = params.get('reset_selector');
          this.verificationCode = params.get('verification-code');
        }
      },
    });
  }

  onSubmit() {
    if (
      this.UpdatePasswordForm.value.NewPassword ===
      this.UpdatePasswordForm.value.ConfirmNewPassword
    ) {
      const payload: ChangePasswordData = {
        reset_selector: this.reset_selector,
        usr_password: this.UpdatePasswordForm.value.NewPassword,
      };

      console.log('payload: ', payload);
      this.store.dispatch(updatePassword({ payload }));

      // this.ngRedux.dispatch({ type: UPDATE_USER_PASSWORD });
      // this._authSvc.resetUserPassword(payload).subscribe({
      //   next: (response: any) => {
      //     if (response) {
      //       // this.ngRedux.dispatch({
      //       //   type: UPDATE_USER_PASSWORD_SUCCESS,
      //       //   payload: response?.msg,
      //       // });
      //       this.UpdatePasswordForm.reset();
      //     }
      //   },
      //   error: (err: any) => {
      //     if (err) {
      //       // console.warn('Error: ', err);
      //       // console.warn('Error.status: ', err.status);
      //       // console.warn('Error.error?.msg: ', err.error?.msg);
      //       switch (err.status) {
      //         case 400:
      //           // this.ngRedux.dispatch({
      //           //   type: UPDATE_USER_PASSWORD_ERROR,
      //           //   payload: err?.error?.msg,
      //           // });
      //           break;

      //         default:
      //           // this.ngRedux.dispatch({
      //           //   type: UPDATE_USER_PASSWORD_ERROR,
      //           //   payload: err?.error?.message,
      //           // });
      //           break;
      //       }
      //     }
      //     // if (err) {
      //     //   console.warn('Error: ', err);
      //     //   this.ngRedux.dispatch({
      //     //     type: UPDATE_USER_PASSWORD_ERROR,
      //     //     payload: err?.error?.message,
      //     //   });
      //     // }
      //   },
      // });
    }
  }
}
