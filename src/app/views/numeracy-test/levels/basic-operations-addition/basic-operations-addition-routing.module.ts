import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameLevel } from 'src/app/models/interface/game-level';
import { GameStage } from 'src/app/models/interface/game-stage';
import { BasicOperationsAdditionStageOneComponent } from './stages/basic-operations-addition-stage-one/basic-operations-addition-stage-one.component';
import { BasicOperationsAdditionStageTwoComponent } from './stages/basic-operations-addition-stage-two/basic-operations-addition-stage-two.component';

const routes: Routes = [
  {
    path: `${GameLevel.BASIC_OPERATIONS_ADDITION}/stage-${GameStage.ONE}`,
    component: BasicOperationsAdditionStageOneComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/basic-operations-addition-stage-one/basic-operations-addition-stage-one-splash/basic-operations-addition-stage-one-splash.module'
          ).then((m) => m.BasicOperationsAdditionStageOneSplashModule),
      },
      {
        path: 'basic-operations-addition-splash',
        loadChildren: () =>
          import(
            './stages/basic-operations-addition-stage-one/basic-operations-addition-stage-one-splash/basic-operations-addition-stage-one-splash.module'
          ).then((m) => m.BasicOperationsAdditionStageOneSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import(
            './stages/basic-operations-addition-stage-one/activity/activity.module'
          ).then((m) => m.ActivityModule),
      },
    ],
  },
  {
    path: `${GameLevel.BASIC_OPERATIONS_ADDITION}/stage-${GameStage.TWO}`,
    component: BasicOperationsAdditionStageTwoComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/basic-operations-addition-stage-two/basic-operations-addition-stage-two-splash/basic-operations-addition-stage-two-splash.module'
          ).then((m) => m.BasicOperationsAdditionStageTwoSplashModule),
      },
      {
        path: 'basic-operations-addition-splash',
        loadChildren: () =>
          import(
            './stages/basic-operations-addition-stage-two/basic-operations-addition-stage-two-splash/basic-operations-addition-stage-two-splash.module'
          ).then((m) => m.BasicOperationsAdditionStageTwoSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import(
            './stages/basic-operations-addition-stage-one/activity/activity.module'
          ).then((m) => m.ActivityModule),
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicOperationsAdditionRoutingModule { }
