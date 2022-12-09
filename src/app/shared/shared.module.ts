import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorSnackbarComponent } from './snackbar/error-snackbar/error-snackbar.component';
import { SuccessSnackbarComponent } from './snackbar/success-snackbar/success-snackbar.component';
import { NotificationSnackbarComponent } from './snackbar/notification-snackbar/notification-snackbar.component';
import { BreadcrumbTopbarComponent } from './breadcrumb-topbar/breadcrumb-topbar.component';
// import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    ErrorSnackbarComponent,
    SuccessSnackbarComponent,
    NotificationSnackbarComponent,
    BreadcrumbTopbarComponent
  ],
  imports: [
    CommonModule,
    // ToastrModule.forRoot(),
  ],
  exports: [
    // ToastrModule
    BreadcrumbTopbarComponent
  ]
})
export class SharedModule { }
