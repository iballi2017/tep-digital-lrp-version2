import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordStageThreeInstructionalVideoComponent } from './word-stage-three-instructional-video/word-stage-three-instructional-video.component';
import { WordStageThreeSplashComponent } from './word-stage-three-splash.component';

const routes: Routes = [
  {
    path: '',
    component: WordStageThreeSplashComponent,
    children: [
      { path: '', component: WordStageThreeInstructionalVideoComponent },
      {
        path: 'interlude',
        component: WordStageThreeInstructionalVideoComponent,
      },
    ],
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WordStageThreeSplashRoutingModule { }
