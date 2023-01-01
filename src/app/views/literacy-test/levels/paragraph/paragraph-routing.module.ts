import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParagraphStageOneComponent } from './stages/paragraph-stage-one/paragraph-stage-one.component';

const routes: Routes = [
  {
    path: 'paragraph/stage-1',
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
    path: 'paragraph/stage-2',
    component: ParagraphStageOneComponent,
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
    path: 'paragraph/stage-3',
    component: ParagraphStageOneComponent,
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
    path: 'paragraph/stage-4',
    component: ParagraphStageOneComponent,
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
