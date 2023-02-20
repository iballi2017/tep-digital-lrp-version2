import { AbstractControl } from '@angular/forms';

export class CustomValidators {
  static matchPasswords(control: AbstractControl) {
    let newPassword = control.get('NewPassword');
    let confirmPassword = control.get('ConfirmNewPassword');
    if (newPassword?.value !== confirmPassword?.value)
      return {
        matchPasswords: true,
      };
    return null;
  }
}
