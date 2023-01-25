import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameLevel } from 'src/app/models/interface/game-level';
import { GameStage } from 'src/app/models/interface/game-stage';
import { BasicOperationsSubtractionStageOneComponent } from './stages/basic-operations-subtraction-stage-one/basic-operations-subtraction-stage-one.component';
import { BasicOperationsSubtractionStageTwoComponent } from './stages/basic-operations-subtraction-stage-two/basic-operations-subtraction-stage-two.component';

const routes: Routes = [
  
  {
  path: `${GameLevel.BASIC_OPERATIONS_SUBTRACTION}/stage-${GameStage.ONE}`,
  component: BasicOperationsSubtractionStageOneComponent,
  children: [
    {
      path: '',
      loadChildren: () =>
        import(
          './stages/basic-operations-subtraction-stage-one/basic-operations-subtraction-stage-one-splash/basic-operations-subtraction-stage-one-splash.module'
        ).then((m) => m.BasicOperationsSubtractionStageOneSplashModule),
    },
    {
      path: 'basic-operations-subtraction-splash',
      loadChildren: () =>
        import(
          './stages/basic-operations-subtraction-stage-one/basic-operations-subtraction-stage-one-splash/basic-operations-subtraction-stage-one-splash.module'
        ).then((m) => m.BasicOperationsSubtractionStageOneSplashModule),
    },
    {
      path: 'activity',
      loadChildren: () =>
        import(
          './stages/basic-operations-subtraction-stage-one/activity/activity.module'
        ).then((m) => m.ActivityModule),
    },
  ],
},
{
path: `${GameLevel.BASIC_OPERATIONS_SUBTRACTION}/stage-${GameStage.TWO}`,
component: BasicOperationsSubtractionStageTwoComponent,
children: [
  {
    path: '',
    loadChildren: () =>
      import(
        './stages/basic-operations-subtraction-stage-two/basic-operations-subtraction-stage-two-splash/basic-operations-subtraction-stage-two-splash.module'
      ).then((m) => m.BasicOperationsSubtractionStageTwoSplashModule),
  },
  {
    path: 'basic-operations-subtraction-splash',
    loadChildren: () =>
      import(
        './stages/basic-operations-subtraction-stage-two/basic-operations-subtraction-stage-two-splash/basic-operations-subtraction-stage-two-splash.module'
      ).then((m) => m.BasicOperationsSubtractionStageTwoSplashModule),
  },
  {
    path: 'activity',
    loadChildren: () =>
      import(
        './stages/basic-operations-subtraction-stage-two/activity/activity.module'
      ).then((m) => m.ActivityModule),
  },
],
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicOperationsSubtractionRoutingModule { }
