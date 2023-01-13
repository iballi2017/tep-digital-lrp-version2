import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameLevel } from 'src/app/models/interface/game-level';
import { GameStage } from 'src/app/models/interface/game-stage';
import { NumberRecognitionOneStageOneComponent } from './stages/number-recognition-one-stage-one/number-recognition-one-stage-one.component';

const routes: Routes = [
  {
    path: `${GameLevel.NUMBER_RECOGNITION_ONE}/stage-${GameStage.ONE}`,
    component: NumberRecognitionOneStageOneComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/number-recognition-one-stage-one/number-recognition-one-stage-one-splash/number-recognition-one-stage-one-splash.module'
          ).then((m) => m.NumberRecognitionOneStageOneSplashModule),
      },
      {
        path: 'number-recognition-one-splash',
        loadChildren: () =>
          import(
            './stages/number-recognition-one-stage-one/number-recognition-one-stage-one-splash/number-recognition-one-stage-one-splash.module'
          ).then((m) => m.NumberRecognitionOneStageOneSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import(
            './stages/number-recognition-one-stage-one/activity/activity.module'
          ).then((m) => m.ActivityModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NumberRecognitionOneRoutingModule {}
