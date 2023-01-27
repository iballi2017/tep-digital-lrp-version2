import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameLevel } from 'src/app/models/interface/game-level';
import { GameStage } from 'src/app/models/interface/game-stage';
import { ParagraphStageFourComponent } from './stages/paragraph-stage-four/paragraph-stage-four.component';
import { ParagraphStageOneComponent } from './stages/paragraph-stage-one/paragraph-stage-one.component';
import { ParagraphStageThreeComponent } from './stages/paragraph-stage-three/paragraph-stage-three.component';
import { ParagraphStageTwoComponent } from './stages/paragraph-stage-two/paragraph-stage-two.component';

const routes: Routes = [
  {
    path: `${GameLevel.PARAGRAPH}/stage-${GameStage.ONE}`,
    component: ParagraphStageOneComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          // import(
          //   './stages/paragraph-stage-one/paragraph-splash/paragraph-stage-one-splash.module'
          // ).then((m) => m.paragraphStageOneSplashModule),
          import(
            './stages/paragraph-stage-one/paragraph-stage-one-splash/paragraph-stage-one-splash.module'
          ).then((m) => m.ParagraphStageOneSplashModule),
      },
      {
        path: 'paragraph-splash',
        loadChildren: () =>
          import(
            './stages/paragraph-stage-one/paragraph-stage-one-splash/paragraph-stage-one-splash.module'
          ).then((m) => m.ParagraphStageOneSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import('./stages/paragraph-stage-one/activity/activity.module').then(
            (m) => m.ActivityModule
          ),
      },
    ],
  },
  {
    path: `${GameLevel.PARAGRAPH}/stage-${GameStage.TWO}`,
    component: ParagraphStageTwoComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/paragraph-stage-two/paragraph-stage-two-splash/paragraph-stage-two-splash.module'
          ).then((m) => m.ParagraphStageTwoSplashModule),
      },
      {
        path: 'paragraph-splash',
        loadChildren: () =>
          import(
            './stages/paragraph-stage-two/paragraph-stage-two-splash/paragraph-stage-two-splash.module'
          ).then((m) => m.ParagraphStageTwoSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import('./stages/paragraph-stage-two/activity/activity.module').then(
            (m) => m.ActivityModule
          ),
      },
    ],
  },
  {
    path: `${GameLevel.PARAGRAPH}/stage-${GameStage.THREE}`,
    component: ParagraphStageThreeComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/paragraph-stage-three/paragraph-stage-three-splash/paragraph-stage-three-splash.module'
          ).then((m) => m.ParagraphStageThreeSplashModule),
      },
      {
        path: 'paragraph-splash',
        loadChildren: () =>
          import(
            './stages/paragraph-stage-three/paragraph-stage-three-splash/paragraph-stage-three-splash.module'
          ).then((m) => m.ParagraphStageThreeSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import('./stages/paragraph-stage-three/activity/activity.module').then(
            (m) => m.ActivityModule
          ),
      },
    ],
  },
  {
    path: `${GameLevel.PARAGRAPH}/stage-${GameStage.FOUR}`,
    component: ParagraphStageFourComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/paragraph-stage-four/paragraph-stage-four-splash/paragraph-stage-four-splash.module'
          ).then((m) => m.ParagraphStageFourSplashModule),
      },
      {
        path: 'paragraph-splash',
        loadChildren: () =>
          import(
            './stages/paragraph-stage-four/paragraph-stage-four-splash/paragraph-stage-four-splash.module'
          ).then((m) => m.ParagraphStageFourSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import('./stages/paragraph-stage-four/activity/activity.module').then(
            (m) => m.ActivityModule
          ),
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParagraphRoutingModule { }
