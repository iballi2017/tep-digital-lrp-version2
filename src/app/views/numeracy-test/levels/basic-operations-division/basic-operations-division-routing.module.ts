import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameLevel } from 'src/app/models/interface/game-level';
import { GameStage } from 'src/app/models/interface/game-stage';
import { BasicOperationsDivisionStageOneComponent } from './stages/basic-operations-division-stage-one/basic-operations-division-stage-one.component';
import { BasicOperationsDivisionStageTwoComponent } from './stages/basic-operations-division-stage-two/basic-operations-division-stage-two.component';

const routes: Routes = [
  {
    path: `${GameLevel.BASIC_OPERATIONS_DIVISION}/stage-${GameStage.ONE}`,
    component: BasicOperationsDivisionStageOneComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/basic-operations-division-stage-one/basic-operations-division-stage-one-splash/basic-operations-division-stage-one-splash.module'
          ).then((m) => m.BasicOperationsDivisionStageOneSplashModule),
      },
      {
        path: 'basic-operations-division-splash',
        loadChildren: () =>
          import(
            './stages/basic-operations-division-stage-one/basic-operations-division-stage-one-splash/basic-operations-division-stage-one-splash.module'
          ).then((m) => m.BasicOperationsDivisionStageOneSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import(
            './stages/basic-operations-division-stage-one/activity/activity.module'
          ).then((m) => m.ActivityModule),
      },
    ],
  },

  {
    path: `${GameLevel.BASIC_OPERATIONS_DIVISION}/stage-${GameStage.TWO}`,
    component: BasicOperationsDivisionStageTwoComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/basic-operations-division-stage-two/basic-operations-division-stage-two-splash/basic-operations-division-stage-two-splash.module'
          ).then((m) => m.BasicOperationsDivisionStageTwoSplashModule),
      },
      {
        path: 'basic-operations-division-splash',
        loadChildren: () =>
          import(
            './stages/basic-operations-division-stage-two/basic-operations-division-stage-two-splash/basic-operations-division-stage-two-splash.module'
          ).then((m) => m.BasicOperationsDivisionStageTwoSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import(
            './stages/basic-operations-division-stage-two/activity/activity.module'
          ).then((m) => m.ActivityModule),
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicOperationsDivisionRoutingModule { }
