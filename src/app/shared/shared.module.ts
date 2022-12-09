import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorSnackbarComponent } from './snackbar/error-snackbar/error-snackbar.component';
import { SuccessSnackbarComponent } from './snackbar/success-snackbar/success-snackbar.component';
import { NotificationSnackbarComponent } from './snackbar/notification-snackbar/notification-snackbar.component';
import { BreadcrumbTopbarComponent } from './breadcrumb-topbar/breadcrumb-topbar.component';
import { SideNavigationOptionOneComponent } from './side-navigation-option-one/side-navigation-option-one.component';
import { SharedRoutingModule } from './shared.routing.module';
import { NgMaterialModule } from '../ng-material/ng-material.module';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    ErrorSnackbarComponent,
    SuccessSnackbarComponent,
    NotificationSnackbarComponent,
    BreadcrumbTopbarComponent,
    SideNavigationOptionOneComponent,
  ],
  imports: [
    CommonModule,
    // ToastrModule.forRoot(),
    SharedRoutingModule,
    NgMaterialModule
  ],
  exports: [
    // ToastrModule
    BreadcrumbTopbarComponent,
    SideNavigationOptionOneComponent,
  ],
})
export class SharedModule {}
