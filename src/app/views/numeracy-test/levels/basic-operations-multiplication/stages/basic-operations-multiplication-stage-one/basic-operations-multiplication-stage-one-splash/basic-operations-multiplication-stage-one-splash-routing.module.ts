import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicOperationsMultiplicationStageOneInstructionalVideoComponent } from './basic-operations-multiplication-stage-one-instructional-video/basic-operations-multiplication-stage-one-instructional-video.component';
import { BasicOperationsMultiplicationStageOneSplashComponent } from './basic-operations-multiplication-stage-one-splash.component';

const routes: Routes = [
  {
    path: '',
    component: BasicOperationsMultiplicationStageOneSplashComponent,
    children: [
      {
        path: '',
        component: BasicOperationsMultiplicationStageOneInstructionalVideoComponent,
      },
      {
        path: 'interlude',
        component: BasicOperationsMultiplicationStageOneInstructionalVideoComponent,
      },
    ],
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicOperationsMultiplicationStageOneSplashRoutingModule { }
