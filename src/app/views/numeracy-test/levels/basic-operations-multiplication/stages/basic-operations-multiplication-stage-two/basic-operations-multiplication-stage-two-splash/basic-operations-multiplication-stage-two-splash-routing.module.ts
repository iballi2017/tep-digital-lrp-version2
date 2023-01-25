import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicOperationsMultiplicationStageTwoInstructionalVideoComponent } from './basic-operations-multiplication-stage-two-instructional-video/basic-operations-multiplication-stage-two-instructional-video.component';
import { BasicOperationsMultiplicationStageTwoSplashComponent } from './basic-operations-multiplication-stage-two-splash.component';

const routes: Routes = [
  {
    path: '',
    component: BasicOperationsMultiplicationStageTwoSplashComponent,
    children: [
      {
        path: '',
        component: BasicOperationsMultiplicationStageTwoInstructionalVideoComponent,
      },
      {
        path: 'interlude',
        component: BasicOperationsMultiplicationStageTwoInstructionalVideoComponent,
      },
    ],
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicOperationsMultiplicationStageTwoSplashRoutingModule { }
