import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameLevel } from 'src/app/models/interface/game-level';
import { GameStage } from 'src/app/models/interface/game-stage';
import { NumberRecognitionThreeStageOneComponent } from './stages/number-recognition-three-stage-one/number-recognition-three-stage-one.component';

const routes: Routes = [
  {
    path: `${GameLevel.NUMBER_RECOGNITION_THREE}/stage-${GameStage.ONE}`,
    component: NumberRecognitionThreeStageOneComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/number-recognition-three-stage-one/number-recognition-three-stage-one-splash/number-recognition-three-stage-one-splash.module'
          ).then((m) => m.NumberRecognitionThreeStageOneSplashModule),
      },
      {
        path: 'number-recognition-three-splash',
        loadChildren: () =>
          import(
            './stages/number-recognition-three-stage-one/number-recognition-three-stage-one-splash/number-recognition-three-stage-one-splash.module'
          ).then((m) => m.NumberRecognitionThreeStageOneSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import(
            './stages/number-recognition-three-stage-one/activity/activity.module'
          ).then((m) => m.ActivityModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NumberRecognitionThreeRoutingModule { }
