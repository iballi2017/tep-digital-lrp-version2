import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { AccountEmailComponent } from './account-email/account-email.component';
import { PasswordChangeSuccessMessageComponent } from './password-change-success-message/password-change-success-message.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { VerifyEmailCodeComponent } from './verify-email-code/verify-email-code.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromForgotPassword from '../store/forgot-password/forgot-password.reducer';
import { ForgotPasswordEffects } from '../store/forgot-password/forgot-password.effects';


@NgModule({
  declarations: [
    AccountEmailComponent,
    PasswordChangeSuccessMessageComponent,
    UpdatePasswordComponent,
    VerifyEmailCodeComponent
  ],
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    EffectsModule.forFeature([ForgotPasswordEffects]),
    StoreModule.forFeature(fromForgotPassword.forgotPasswordsFeatureKey, fromForgotPassword.reducer),
  ]
})
export class ForgotPasswordModule { }
