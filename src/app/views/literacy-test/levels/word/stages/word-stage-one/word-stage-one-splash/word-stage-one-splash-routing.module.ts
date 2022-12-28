import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordStageOneInstructionalVideoComponent } from './word-stage-one-instructional-video/word-stage-one-instructional-video.component';
import { WordStageOneSplashComponent } from './word-stage-one-splash.component';

const routes: Routes = [
  {
    path: '',
    component: WordStageOneSplashComponent,
    children: [
      { path: '', component: WordStageOneInstructionalVideoComponent },
      {
        path: 'interlude',
        component: WordStageOneInstructionalVideoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WordStageOneSplashRoutingModule { }
