import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileInformationComponent } from './profile-information/profile-information.component';
import { UserAccountComponent } from './user-account.component';

const routes: Routes = [
  {
    path: '',
    component: UserAccountComponent,
    children: [
      // { path: '', component: MyInformationComponent },
      { path: '', pathMatch: 'full', redirectTo: 'personal-information' },
      { path: 'personal-information', component: ProfileInformationComponent },
      // {
      //   path: 'update-personal-details/:userId',
      //   component: UpdatePersonalDetailsComponent,
      // },
      // {
      //   path: 'update-password',
      //   component: UpdatePasswordComponent,
      // },
      // {
      //   path: 'respondent-details/:respondentId',
      //   component: RespondentDetailsComponent,
      // },
      // {
      //   path: 'reports',
      //   component: ReportsComponent,
      //   children: [
      //     { path: '', component: ReportListComponent },
      //     { path: 'report-list', component: ReportListComponent },
      //     { path: 'details/:sessionId', component: ReportDetailsComponent },
      //   ],
      // },
      // { path: 'about-the-app', component: AboutTheAppComponent },
      // { path: 'contact-us', component: ContactUsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAccountRoutingModule {}
