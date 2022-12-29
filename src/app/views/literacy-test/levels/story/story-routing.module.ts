import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryStageOneComponent } from './stages/story-stage-one/story-stage-one.component';

const routes: Routes = [
  {
    path: 'story/stage-1',
    component: StoryStageOneComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          // import(
          //   './stages/story-stage-one/story-splash/story-stage-one-splash.module'
          // ).then((m) => m.StoryStageOneSplashModule),
          import(
            './stages/story-stage-one/story-stage-one-splash/story-stage-one-splash.module'
          ).then((m) => m.StoryStageOneSplashModule),
      },
      {
        path: 'story-splash',
        loadChildren: () =>
          import(
            './stages/story-stage-one/story-stage-one-splash/story-stage-one-splash.module'
          ).then((m) => m.StoryStageOneSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import('./stages/story-stage-one/activity/activity.module').then(
            (m) => m.ActivityModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoryRoutingModule { }
