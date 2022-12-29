import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryStageOneInstructionalVideoComponent } from './story-stage-one-instructional-video/story-stage-one-instructional-video.component';
import { StoryStageOneSplashComponent } from './story-stage-one-splash.component';

const routes: Routes = [
  {
    path: '',
    component: StoryStageOneSplashComponent,
    children: [
      { path: '', component: StoryStageOneInstructionalVideoComponent },
      {
        path: 'interlude',
        component: StoryStageOneInstructionalVideoComponent,
      },
    ],
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoryStageOneSplashRoutingModule { }
