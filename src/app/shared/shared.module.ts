import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorSnackbarComponent } from './shared.components/snackbar/error-snackbar/error-snackbar.component';
import { SuccessSnackbarComponent } from './shared.components/snackbar/success-snackbar/success-snackbar.component';
// import { NotificationSnackbarComponent } from './shared.components/snackbar/notification-snackbar/notification-snackbar.component';
// import { BreadcrumbTopbarComponent } from './breadcrumb-topbar/breadcrumb-topbar.component';
// import { SideNavigationOptionOneComponent } from './side-navigation-option-one/side-navigation-option-one.component';
import { SharedRoutingModule } from './shared.routing.module';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { PrimaryButtonComponent } from './shared.components/primary-button/primary-button.component';
import { DangerButtonComponent } from './shared.components/danger-button/danger-button.component';
import { DefaultButtonComponent } from './shared.components/default-button/default-button.component';
import { BooleanAlertDialogComponent } from './shared.components/boolean-alert-dialog/boolean-alert-dialog.component';
import { PageNotFoundComponent } from './shared.views/page-not-found/page-not-found.component';
import { ActivityHintDialogComponent } from './shared.components/activity-hint-dialog/activity-hint-dialog.component';
import { LevelCompletionComponent } from './shared.views/level-completion/level-completion.component';
import { StageCompletionComponent } from './shared.views/stage-completion/stage-completion.component';
import { ProgramCompletionComponent } from './shared.views/program-completion/program-completion.component';
import { BreadcrumbTopbarComponent } from './shared.components/breadcrumb-topbar/breadcrumb-topbar.component';
import { SideNavigationOptionOneComponent } from './shared.components/side-navigation-option-one/side-navigation-option-one.component';
import { NotificationSnackbarComponent } from './shared.components/snackbar/notification-snackbar/notification-snackbar.component';
import { LevelLoaderComponent } from './shared.views/level-loader/level-loader.component';
import { ActivityKeypadTypeOneComponent } from './shared.components/activity-keypad-type-one/activity-keypad-type-one.component';
import { FullPageLoaderComponent } from './shared.components/full-page-loader/full-page-loader.component';
import { StoreModule } from '@ngrx/store';
import * as fromGame from './store/game/game.reducer';
import { ReportListSearchFieldComponent } from './shared.components/report-list-search-field/report-list-search-field.component';
import { FormsModule } from '@angular/forms';
import { ActivityLauncherComponent } from './shared.components/activity-launcher/activity-launcher.component';
import { NgxPaginationModule } from 'ngx-pagination';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    ErrorSnackbarComponent,
    SuccessSnackbarComponent,
    NotificationSnackbarComponent,
    BreadcrumbTopbarComponent,
    SideNavigationOptionOneComponent,
    PrimaryButtonComponent,
    DangerButtonComponent,
    DefaultButtonComponent,
    BooleanAlertDialogComponent,
    PageNotFoundComponent,
    ActivityHintDialogComponent,
    LevelCompletionComponent,
    StageCompletionComponent,
    ProgramCompletionComponent,
    LevelLoaderComponent,
    ActivityKeypadTypeOneComponent,
    FullPageLoaderComponent,
    ReportListSearchFieldComponent,
    ActivityLauncherComponent,
  ],
  imports: [
    CommonModule,
    // ToastrModule.forRoot(),
    SharedRoutingModule,
    NgMaterialModule,
    FormsModule,
    NgxPaginationModule,
    StoreModule.forFeature(fromGame.gamesFeatureKey, fromGame.reducer),
  ],
  exports: [
    // ToastrModule
    BreadcrumbTopbarComponent,
    SideNavigationOptionOneComponent,
    DangerButtonComponent,
    PrimaryButtonComponent,
    DefaultButtonComponent,
    LevelCompletionComponent,
    StageCompletionComponent,
    ProgramCompletionComponent,
    LevelLoaderComponent,
    ActivityKeypadTypeOneComponent,
    FullPageLoaderComponent,
    ReportListSearchFieldComponent,
    ActivityLauncherComponent,
    NgxPaginationModule,
  ],
})
export class SharedModule {}
