import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import * as fromLogin from './store/login/login.reducer';
import * as fromRegister from './store/register/register.reducer';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature(fromLogin.loginsFeatureKey, fromLogin.reducer),
    StoreModule.forFeature(fromRegister.registersFeatureKey, fromRegister.reducer)
  ]
})
export class AuthenticationModule { }
