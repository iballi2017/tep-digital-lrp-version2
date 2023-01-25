import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameLevel } from 'src/app/models/interface/game-level';
import { GameStage } from 'src/app/models/interface/game-stage';
import { BasicOperationsMultiplicationStageOneComponent } from './stages/basic-operations-multiplication-stage-one/basic-operations-multiplication-stage-one.component';
import { BasicOperationsMultiplicationStageTwoComponent } from './stages/basic-operations-multiplication-stage-two/basic-operations-multiplication-stage-two.component';

const routes: Routes = [
  {
    path: `${GameLevel.BASIC_OPERATIONS_MULTIPLICATION}/stage-${GameStage.ONE}`,
    component: BasicOperationsMultiplicationStageOneComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/basic-operations-multiplication-stage-one/basic-operations-multiplication-stage-one-splash/basic-operations-multiplication-stage-one-splash.module'
          ).then((m) => m.BasicOperationsMultiplicationStageOneSplashModule),
      },
      {
        path: 'basic-operations-multiplication-splash',
        loadChildren: () =>
          import(
            './stages/basic-operations-multiplication-stage-one/basic-operations-multiplication-stage-one-splash/basic-operations-multiplication-stage-one-splash.module'
          ).then((m) => m.BasicOperationsMultiplicationStageOneSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import(
            './stages/basic-operations-multiplication-stage-one/activity/activity.module'
          ).then((m) => m.ActivityModule),
      },
    ],
  },
  {
    path: `${GameLevel.BASIC_OPERATIONS_MULTIPLICATION}/stage-${GameStage.TWO}`,
    component: BasicOperationsMultiplicationStageTwoComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/basic-operations-multiplication-stage-two/basic-operations-multiplication-stage-two-splash/basic-operations-multiplication-stage-two-splash.module'
          ).then((m) => m.BasicOperationsMultiplicationStageTwoSplashModule),
      },
      {
        path: 'basic-operations-multiplication-splash',
        loadChildren: () =>
          import(
            './stages/basic-operations-multiplication-stage-two/basic-operations-multiplication-stage-two-splash/basic-operations-multiplication-stage-two-splash.module'
          ).then((m) => m.BasicOperationsMultiplicationStageTwoSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import(
            './stages/basic-operations-multiplication-stage-two/activity/activity.module'
          ).then((m) => m.ActivityModule),
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicOperationsMultiplicationRoutingModule { }
