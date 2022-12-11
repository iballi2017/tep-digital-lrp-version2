import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccountRoutingModule } from './user-account-routing.module';
import { ProfileInformationComponent } from './profile-information/profile-information.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserAccountComponent } from './user-account.component';
import { NgMaterialModule } from 'src/app/ng-material/ng-material.module';
import { ReportsComponent } from './reports/reports.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutTheAppComponent } from './about-the-app/about-the-app.component';
import { UpdatePasswordComponent } from './profile-information/update-password/update-password.component';
import { UpdatePersonalInformationComponent } from './profile-information/update-personal-information/update-personal-information.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileInformationComponent,
    UserAccountComponent,
    ReportsComponent,
    ContactUsComponent,
    AboutTheAppComponent,
    UpdatePasswordComponent,
    UpdatePersonalInformationComponent,
  ],
  imports: [
    CommonModule,
    UserAccountRoutingModule,
    SharedModule,
    NgMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserAccountModule { }
