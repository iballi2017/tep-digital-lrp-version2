import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParagraphStageThreeInstructionalVideoComponent } from './paragraph-stage-three-instructional-video/paragraph-stage-three-instructional-video.component';
import { ParagraphStageThreeSplashComponent } from './paragraph-stage-three-splash.component';

const routes: Routes = [
  {
    path: '',
    component: ParagraphStageThreeSplashComponent,
    children: [
      { path: '', component: ParagraphStageThreeInstructionalVideoComponent },
      {
        path: 'interlude',
        component: ParagraphStageThreeInstructionalVideoComponent,
      },
    ],
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParagraphStageThreeSplashRoutingModule { }
