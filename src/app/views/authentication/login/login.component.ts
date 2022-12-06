import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Snackbar } from 'src/app/models/class/snackbar';
// import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SuccessSnackbarComponent } from 'src/app/shared/snackbar/success-snackbar/success-snackbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  submitBtnLabel: string = 'Enter';
  LoginUserForm!: FormGroup;
  // @select((s) => s.LoginUser.isLoading) isLoading: any;
  // @select((s) => s.LoginUser.error) error$: any;
  isLogging: boolean = false;
  durationInSeconds = 500000000000000;
  constructor(
    private _fb: FormBuilder,
    private _authSvc: AuthenticationService,
    // private ngRedux: NgRedux<IAppState>,
    private _router: Router,
    // private toastr: ToastrService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.LoginUserForm = this._fb.group({
      Email: ['test@test.com', [Validators.required, Validators.email]],
      Password: ['test', [Validators.required]],
    });
  }

  onSubmit() {
    const Payload = {
      usr_email: this.LoginUserForm.value.Email,
      usr_password: this.LoginUserForm.value.Password,
    };
    if (this.LoginUserForm.valid) {
      // this.ngRedux.dispatch({ type: ADD_LOGINUSER });
      this.isLogging = true;
      this._authSvc.LoginUser(Payload).subscribe({
        next: (response: any) => {
          if (response) {
            this.isLogging = false;
            const successResponse = response?.message;
            const x = new Snackbar(successResponse, this._snackBar);
            // x.openTextSnackBar();
            x.successSnackbar();
            this._router.navigate(['/program-starter']);

            // setTimeout(() => {
            // this.ngRedux.dispatch({
            //   type: ADD_LOGINUSER_SUCCESS,
            //   payload: response,
            // });
            // }, 6000);
          }
        },
        error: (err: any) => {
          if (err) {
            console.warn('Error: ', err);
            if (!err?.error?.message) {
              new Snackbar(
                'Login failed, try again!',
                this._snackBar
              ).errorSnackbar();
              this.isLogging = false;
              return;
            }
            const errorResponse = err?.error?.message;
            // this.toastr.error(err.message)
            this.isLogging = false;
            new Snackbar(errorResponse, this._snackBar).errorSnackbar();
          }
          // this.ngRedux.dispatch({
          //   type: ADD_LOGINUSER_FAILURE,
          //   payload: err?.error?.message,
          // });
        },
      });
    }
  }
}
