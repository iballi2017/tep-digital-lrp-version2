import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountEmailComponent } from './account-email/account-email.component';
import { ForgotPasswordComponent } from './forgot-password.component';
import { PasswordChangeSuccessMessageComponent } from './password-change-success-message/password-change-success-message.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { VerifyEmailCodeComponent } from './verify-email-code/verify-email-code.component';

const routes: Routes = [
  {
    path: '',
    component: ForgotPasswordComponent,
    children: [
      {
        path: '',
        component: AccountEmailComponent,
      },
      {
        path: 'account-email',
        component: AccountEmailComponent,
      },
      {
        path: 'verify-email-code',
        component: VerifyEmailCodeComponent,
      },
      {
        path: 'update-password/:reset_selector/:verification-code',
        component: UpdatePasswordComponent,
      },
      {
        path: 'success',
        component: PasswordChangeSuccessMessageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPasswordRoutingModule {}
