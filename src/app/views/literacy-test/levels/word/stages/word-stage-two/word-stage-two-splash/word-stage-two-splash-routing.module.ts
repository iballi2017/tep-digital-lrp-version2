import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordStageTwoInstructionalVideoComponent } from './word-stage-two-instructional-video/word-stage-two-instructional-video.component';
import { WordStageTwoSplashComponent } from './word-stage-two-splash.component';

const routes: Routes = [
  {
    path: '',
    component: WordStageTwoSplashComponent,
    children: [
      { path: '', component: WordStageTwoInstructionalVideoComponent },
      {
        path: 'interlude',
        component: WordStageTwoInstructionalVideoComponent,
      },
    ],
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WordStageTwoSplashRoutingModule { }
