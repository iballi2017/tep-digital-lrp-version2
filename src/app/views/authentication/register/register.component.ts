import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Snackbar } from 'src/app/models/class/snackbar';
import { UserRegister } from 'src/app/models/interface/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  submitBtnLabel: string = 'Register';
  RegisterUserForm!: FormGroup;
  // @select((s) => s.RegisterUser.isLoading) isLoading$: any;
  // @select((s) => s.RegisterUser.RegisteredUser?.message) RegisteredUser$: any;
  // @select((s) => s.RegisterUser.error) error$: any;
  isRegistered!: boolean;
  errorMsg: any;
  isSending: boolean = false;
  fieldType = false;
  constructor(
    private _fb: FormBuilder,
    private _authSvc: AuthenticationService,
    private _router: Router,
    private _snackBar: MatSnackBar // private ngRedux: NgRedux<IAppState>
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.onErrorMsg();
  }

  buildForm() {
    this.RegisterUserForm = this._fb.group({
      FullName: ['', [Validators.required]],
      EmailAddress: ['', [Validators.required, Validators.email]],
      Party: ['', [Validators.required]],
      Gender: ['', [Validators.required]],
      Password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    const Payload: UserRegister = {
      usr_fullname: this.RegisterUserForm.value.FullName,
      usr_email: this.RegisterUserForm.value.EmailAddress,
      usr_party: this.RegisterUserForm.value.Party,
      usr_gender: this.RegisterUserForm.value.Gender,
      usr_password: this.RegisterUserForm.value.Password,
    };
    // const Payload: any = {
    //   usr_fullname: this.RegisterUserForm.value.FullName,
    //   usr_email: this.RegisterUserForm.value.FullName,
    //   usr_party: this.RegisterUserForm.value.FullName,
    //   usr_gender: this.RegisterUserForm.value.FullName,
    //   // usr_password: this.RegisterUserForm.value.FullName,
    // };

    if (this.RegisterUserForm.valid) {
      this.isSending = true;
      // this.ngRedux.dispatch({ type: ADD_REGISTER_USER });
      this._authSvc.RegisterUser(Payload).subscribe({
        next: (response: any) => {
          if (response) {
            console.log('response: ', response);
            const successResponse = response?.message;
            const x = new Snackbar(successResponse, this._snackBar);
            this.isRegistered = true;
            this.RegisterUserForm.reset();
            this.isSending = false;
            this.RegisterUserForm.reset();
            this._router.navigate(['/auth']);
            setTimeout(() => {
              // this.ngRedux.dispatch({
              //   type: ADD_REGISTER_USER_SUCCESS,
              //   payload: response,
              // });
              // this.isRegistered = true;
              // this.RegisterUserForm.reset();
            }, 6000);
            // this.ngRedux.dispatch({
            //   type: ADD_REGISTERUSER_SUCCESS,
            //   payload: response,
            // });
          }
        },
        error: (err: any) => {
          // this.ngRedux.dispatch({
          //   type: ADD_REGISTER_USER_FAILURE,
          //   payload: err?.error?.error.message,
          // });
          console.warn('Error: ', err);
          if (!err?.error?.error?.message) {
            new Snackbar(
              'Registration failed, try again!',
              this._snackBar
            ).errorSnackbar();
            this.isSending = false;
            return;
          }
          this.onErrorMsg();
          const errorResponse = err?.error?.error?.message;
          new Snackbar(errorResponse, this._snackBar).errorSnackbar();
          this.isSending = false;
        },
      });
    }
  }

  onErrorMsg() {
    // this.error$.subscribe({
    //   next: (errorMsg: any) => {
    //     if (errorMsg) {
    //       this.errorMsg = errorMsg;
    //       setTimeout(() => {
    //         this.errorMsg = null;
    //       }, 4000);
    //     }
    //   },
    // });
  }

  toggleFieldAttr() {
    this.fieldType = !this.fieldType;
  }
}
