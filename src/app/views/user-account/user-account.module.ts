import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccountRoutingModule } from './user-account-routing.module';
import { ProfileInformationComponent } from './profile-information/profile-information.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserAccountComponent } from './user-account.component';
import { NgMaterialModule } from 'src/app/ng-material/ng-material.module';
// import { ReportsComponent } from './reports/reports.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutTheAppComponent } from './about-the-app/about-the-app.component';
import { UpdatePasswordComponent } from './profile-information/update-password/update-password.component';
import { UpdatePersonalInformationComponent } from './profile-information/update-personal-information/update-personal-information.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromProfileInformation from './store/profile-information/profile-information.reducer';
import * as fromReports from './store/reports/reports.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProfileInformationEffects } from './store/profile-information/profile-information.effects';
import { ReportsEffects } from './store/reports/reports.effects';
import { OccupantListComponent } from './profile-information/occupant-list/occupant-list.component';
import * as fromOccupantList from './store/occupant-list/occupant-list.reducer';
import { OccupantListEffects } from './store/occupant-list/occupant-list.effects';
import { OccupantDetailsComponent } from './profile-information/occupant-details/occupant-details.component';
import { AddNewOccupantComponent } from './profile-information/add-new-occupant/add-new-occupant.component';


@NgModule({
  declarations: [
    ProfileInformationComponent,
    UserAccountComponent,
    // ReportsComponent,
    ContactUsComponent,
    AboutTheAppComponent,
    UpdatePasswordComponent,
    UpdatePersonalInformationComponent,
    OccupantListComponent,
    OccupantDetailsComponent,
    AddNewOccupantComponent,
  ],
  imports: [
    CommonModule,
    UserAccountRoutingModule,
    SharedModule,
    NgMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromProfileInformation.profileInformationsFeatureKey, fromProfileInformation.reducer),
    StoreModule.forFeature(fromReports.reportsFeatureKey, fromReports.reducer),
    StoreModule.forFeature(fromOccupantList.occupantListFeatureKey, fromOccupantList.reducer),
    EffectsModule.forFeature([ProfileInformationEffects, ReportsEffects, OccupantListEffects]),
  ]
})
export class UserAccountModule { }
