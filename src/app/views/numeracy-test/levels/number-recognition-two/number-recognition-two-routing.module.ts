import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameLevel } from 'src/app/models/interface/game-level';
import { GameStage } from 'src/app/models/interface/game-stage';
import { NumberRecognitionTwoStageOneComponent } from './stages/number-recognition-two-stage-one/number-recognition-two-stage-one.component';

const routes: Routes = [
  {
    path: `${GameLevel.NUMBER_RECOGNITION_TWO}/stage-${GameStage.ONE}`,
    component: NumberRecognitionTwoStageOneComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/number-recognition-two-stage-one/number-recognition-two-stage-one-splash/number-recognition-two-stage-one-splash.module'
          ).then((m) => m.NumberRecognitionTwoStageOneSplashModule),
      },
      {
        path: 'number-recognition-two-splash',
        loadChildren: () =>
          import(
            './stages/number-recognition-two-stage-one/number-recognition-two-stage-one-splash/number-recognition-two-stage-one-splash.module'
          ).then((m) => m.NumberRecognitionTwoStageOneSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import(
            './stages/number-recognition-two-stage-one/activity/activity.module'
          ).then((m) => m.ActivityModule),
      },
    ],
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NumberRecognitionTwoRoutingModule { }
