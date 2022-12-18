import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutTheAppComponent } from './about-the-app/about-the-app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OccupantDetailsComponent } from './profile-information/occupant-details/occupant-details.component';
import { ProfileInformationComponent } from './profile-information/profile-information.component';
import { UpdatePasswordComponent } from './profile-information/update-password/update-password.component';
import { UpdatePersonalInformationComponent } from './profile-information/update-personal-information/update-personal-information.component';
import { UserAccountComponent } from './user-account.component';

const routes: Routes = [
  {
    path: '',
    component: UserAccountComponent,
    children: [
      // { path: '', component: MyInformationComponent },
      { path: '', pathMatch: 'full', redirectTo: 'personal-information' },
      { path: 'personal-information', component: ProfileInformationComponent },
      {
        path: 'update-personal-details/:userId',
        component: UpdatePersonalInformationComponent,
      },
      {
        path: 'update-password',
        component: UpdatePasswordComponent,
      },
      {
        path: 'occupant-details/:occupantId',
        component: OccupantDetailsComponent,
      },
      // {
      //   path: 'reports',
      //   component: ReportsComponent,
        // children: [
        //   { path: '', component: ReportListComponent },
        //   { path: 'report-list', component: ReportListComponent },
        //   { path: 'details/:sessionId', component: ReportDetailsComponent },
        // ],
      // },
      {
        path: 'reports',
        // canActivate: [AuthGuard],
        loadChildren: () =>
          import('./reports/report.module').then(
            (m) => m.ReportModule
          ),
      },
      { path: 'about-the-app', component: AboutTheAppComponent },
      { path: 'contact-us', component: ContactUsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAccountRoutingModule { }
