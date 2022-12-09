import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccountRoutingModule } from './user-account-routing.module';
import { ProfileInformationComponent } from './profile-information/profile-information.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserAccountComponent } from './user-account.component';


@NgModule({
  declarations: [
    ProfileInformationComponent,
    UserAccountComponent,
  ],
  imports: [
    CommonModule,
    UserAccountRoutingModule,
    SharedModule
  ]
})
export class UserAccountModule { }
