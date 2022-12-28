import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParagraphStageOneInstructionalVideoComponent } from './paragraph-stage-one-instructional-video/paragraph-stage-one-instructional-video.component';
import { ParagraphStageOneSplashComponent } from './paragraph-stage-one-splash.component';

const routes: Routes = [
  {
    path: '',
    component: ParagraphStageOneSplashComponent,
    children: [
      { path: '', component: ParagraphStageOneInstructionalVideoComponent },
      {
        path: 'interlude',
        component: ParagraphStageOneInstructionalVideoComponent,
      },
    ],
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParagraphStageOneSplashRoutingModule { }
