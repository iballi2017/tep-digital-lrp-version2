import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParagraphStageFourInstructionalVideoComponent } from './paragraph-stage-four-instructional-video/paragraph-stage-four-instructional-video.component';
import { ParagraphStageFourSplashComponent } from './paragraph-stage-four-splash.component';

const routes: Routes = [
  {
    path: '',
    component: ParagraphStageFourSplashComponent,
    children: [
      { path: '', component: ParagraphStageFourInstructionalVideoComponent },
      {
        path: 'interlude',
        component: ParagraphStageFourInstructionalVideoComponent,
      },
    ],
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParagraphStageFourSplashRoutingModule { }
