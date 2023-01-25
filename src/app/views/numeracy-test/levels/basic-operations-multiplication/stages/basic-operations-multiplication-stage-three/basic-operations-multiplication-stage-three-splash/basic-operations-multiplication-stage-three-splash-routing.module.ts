import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicOperationsMultiplicationStageThreeInstructionalVideoComponent } from './basic-operations-multiplication-stage-three-instructional-video/basic-operations-multiplication-stage-three-instructional-video.component';
import { BasicOperationsMultiplicationStageThreeSplashComponent } from './basic-operations-multiplication-stage-three-splash.component';

const routes: Routes = [
  {
    path: '',
    component: BasicOperationsMultiplicationStageThreeSplashComponent,
    children: [
      {
        path: '',
        component: BasicOperationsMultiplicationStageThreeInstructionalVideoComponent,
      },
      {
        path: 'interlude',
        component: BasicOperationsMultiplicationStageThreeInstructionalVideoComponent,
      },
    ],
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicOperationsMultiplicationStageThreeSplashRoutingModule { }
