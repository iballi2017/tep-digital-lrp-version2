import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameLevel } from 'src/app/models/interface/game-level';
import { GameStage } from 'src/app/models/interface/game-stage';
import { LetterStageOneComponent } from './stages/letter-stage-one/letter-stage-one.component';
import { LetterStageThreeComponent } from './stages/letter-stage-three/letter-stage-three.component';
import { LetterStageTwoComponent } from './stages/letter-stage-two/letter-stage-two.component';

const routes: Routes = [
  {
    path: `${GameLevel.LETTER}/stage-${GameStage.ONE}`,
    component: LetterStageOneComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/letter-stage-one/letter-stage-one-splash/letter-stage-one-splash.module'
          ).then((m) => m.LetterStageOneSplashModule),
      },
      {
        path: 'letter-splash',
        loadChildren: () =>
          import(
            './stages/letter-stage-one/letter-stage-one-splash/letter-stage-one-splash.module'
          ).then((m) => m.LetterStageOneSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import('./stages/letter-stage-one/activity/activity.module').then(
            (m) => m.ActivityModule
          ),
      },
    ],
  },
  {
    path: `${GameLevel.LETTER}/stage-${GameStage.TWO}`,
    component: LetterStageTwoComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/letter-stage-two/letter-stage-two-splash/letter-stage-two-splash.module'
          ).then((m) => m.LetterStageTwoSplashModule),
      },
      {
        path: 'letter-splash',
        loadChildren: () =>
          import(
            './stages/letter-stage-two/letter-stage-two-splash/letter-stage-two-splash.module'
          ).then((m) => m.LetterStageTwoSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import(
            './stages/letter-stage-two/activity/activity.module'
          ).then((m) => m.ActivityModule),
      },
    ],
  },
  {
    path: `${GameLevel.LETTER}/stage-${GameStage.THREE}`,
    component: LetterStageThreeComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/letter-stage-three/letter-stage-three-splash/letter-stage-three-splash.module'
          ).then((m) => m.LetterStageThreeSplashModule),
      },
      {
        path: 'letter-splash',
        loadChildren: () =>
          import(
            './stages/letter-stage-three/letter-stage-three-splash/letter-stage-three-splash.module'
          ).then((m) => m.LetterStageThreeSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import(
            './stages/letter-stage-three/activity/activity.module'
          ).then((m) => m.ActivityModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LetterRoutingModule {}
