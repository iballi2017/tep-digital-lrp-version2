import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordStageFourInstructionalVideoComponent } from './word-stage-four-instructional-video/word-stage-four-instructional-video.component';
import { WordStageFourSplashComponent } from './word-stage-four-splash.component';

const routes: Routes = [
  {
    path: '',
    component: WordStageFourSplashComponent,
    children: [
      { path: '', component: WordStageFourInstructionalVideoComponent },
      {
        path: 'interlude',
        component: WordStageFourInstructionalVideoComponent,
      },
    ],
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WordStageFourSplashRoutingModule { }
