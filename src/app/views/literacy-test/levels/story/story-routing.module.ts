import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameLevel } from 'src/app/models/interface/game-level';
import { GameStage } from 'src/app/models/interface/game-stage';
import { StoryStageOneComponent } from './stages/story-stage-one/story-stage-one.component';

const routes: Routes = [
  {
    path: `${GameLevel.STORY}/stage-${GameStage.ONE}`,
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
