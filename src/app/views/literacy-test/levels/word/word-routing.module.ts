import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameLevel } from 'src/app/models/interface/game-level';
import { GameStage } from 'src/app/models/interface/game-stage';
import { WordStageFourComponent } from './stages/word-stage-four/word-stage-four.component';
import { WordStageOneComponent } from './stages/word-stage-one/word-stage-one.component';
import { WordStageThreeComponent } from './stages/word-stage-three/word-stage-three.component';
import { WordStageTwoComponent } from './stages/word-stage-two/word-stage-two.component';

const routes: Routes = [
  {
    path: `${GameLevel.WORD}/stage-${GameStage.ONE}`,
    component: WordStageOneComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          // import(
          //   './stages/word-stage-one/word-splash/word-stage-one-splash.module'
          // ).then((m) => m.WordStageOneSplashModule),
          import(
            './stages/word-stage-one/word-stage-one-splash/word-stage-one-splash.module'
          ).then((m) => m.WordStageOneSplashModule),
      },
      {
        path: 'word-splash',
        loadChildren: () =>
          import(
            './stages/word-stage-one/word-stage-one-splash/word-stage-one-splash.module'
          ).then((m) => m.WordStageOneSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import('./stages/word-stage-one/activity/activity.module').then(
            (m) => m.ActivityModule
          ),
      },
    ],
  },
  {
    path: `${GameLevel.WORD}/stage-${GameStage.TWO}`,
    component: WordStageTwoComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/word-stage-two/word-stage-two-splash/word-stage-two-splash.module'
          ).then((m) => m.WordStageTwoSplashModule),
      },
      {
        path: 'word-splash',
        loadChildren: () =>
          import(
            './stages/word-stage-two/word-stage-two-splash/word-stage-two-splash.module'
          ).then((m) => m.WordStageTwoSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import('./stages/word-stage-two/activity/activity.module').then(
            (m) => m.ActivityModule
          ),
      },
    ],
  },
  {
    path: `${GameLevel.WORD}/stage-${GameStage.THREE}`,
    component: WordStageThreeComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/word-stage-three/word-stage-three-splash/word-stage-three-splash.module'
          ).then((m) => m.WordStageThreeSplashModule),
      },
      {
        path: 'word-splash',
        loadChildren: () =>
          import(
            './stages/word-stage-three/word-stage-three-splash/word-stage-three-splash.module'
          ).then((m) => m.WordStageThreeSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import('./stages/word-stage-three/activity/activity.module').then(
            (m) => m.ActivityModule
          ),
      },
    ],
  },
  {
    path: `${GameLevel.WORD}/stage-${GameStage.FOUR}`,
    component: WordStageFourComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/word-stage-four/word-stage-four-splash/word-stage-four-splash.module'
          ).then((m) => m.WordStageFourSplashModule),
      },
      {
        path: 'word-splash',
        loadChildren: () =>
          import(
            './stages/word-stage-four/word-stage-four-splash/word-stage-four-splash.module'
          ).then((m) => m.WordStageFourSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import('./stages/word-stage-four/activity/activity.module').then(
            (m) => m.ActivityModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordRoutingModule {}
