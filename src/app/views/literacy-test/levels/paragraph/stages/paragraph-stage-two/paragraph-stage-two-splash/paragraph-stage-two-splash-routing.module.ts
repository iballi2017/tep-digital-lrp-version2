import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParagraphStageTwoInstructionalVideoComponent } from './paragraph-stage-two-instructional-video/paragraph-stage-two-instructional-video.component';
import { ParagraphStageTwoSplashComponent } from './paragraph-stage-two-splash.component';

const routes: Routes = [
  {
    path: '',
    component: ParagraphStageTwoSplashComponent,
    children: [
      { path: '', component: ParagraphStageTwoInstructionalVideoComponent },
      {
        path: 'interlude',
        component: ParagraphStageTwoInstructionalVideoComponent,
      },
    ],
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParagraphStageTwoSplashRoutingModule { }
