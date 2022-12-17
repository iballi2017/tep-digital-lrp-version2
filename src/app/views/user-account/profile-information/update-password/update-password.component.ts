import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Snackbar } from 'src/app/models/class/snackbar';
import { UpdatePassword } from 'src/app/models/interface/user';
import { IdentityService } from 'src/app/services/identity.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss'],
})
export class UpdatePasswordComponent implements OnInit {
  UpdatePasswordForm!: FormGroup;
  isUpdating!: boolean;
  submitBtnLabel = 'Update';
  errorMsg: any;
  responseMsg: any;
  fieldType = false;
  fieldType2 = false;
  constructor(
    private _fb: FormBuilder,
    private _identitySvc: IdentityService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.UpdatePasswordForm = this._fb.group({
      OldPassword: ['', [Validators.required]],
      NewPassword: ['', [Validators.required]],
      ConfirmNewPassword: ['', [Validators.required]],
    });
  }

  toggleFieldAttr() {
    this.fieldType = !this.fieldType;
  }

  toggleFieldAttr2() {
    this.fieldType2 = !this.fieldType2;
  }

  onSubmit() {
    const Payload: UpdatePassword = {
      current_password: this.UpdatePasswordForm.value.OldPassword,
      new_password: this.UpdatePasswordForm.value.NewPassword,
      confirm_password: this.UpdatePasswordForm.value.ConfirmNewPassword,
    };

    console.group('Payload: ', Payload);

    this.updatePassword(Payload);
  }

  updatePassword(Payload: UpdatePassword) {
    this.isUpdating = true;
    this._identitySvc.UpdateUserPassword(Payload).subscribe({
      next: (response: any) => {
        if (response) {
          this.UpdatePasswordForm.reset();
          this.isUpdating = false;
          this.responseMsg = response.msg;
          const successResponse = this.responseMsg;
          new Snackbar(successResponse, this._snackBar).errorSnackbar();
          setTimeout(() => {
            this.responseMsg = '';
            history.back();
          }, 3000);
        }
      },
      error: (err: any) => {
        if (err) {
          console.error('Error: ', err);
          this.isUpdating = false;
          this.errorMsg = err?.error?.msg;
          const errorResponse = err?.error?.error?.message;
          new Snackbar(errorResponse, this._snackBar).errorSnackbar();
          setTimeout(() => {
            this.errorMsg = '';
          }, 3000);
        }
      },
    });
  }

  back() {
    history.back();
  }
}
