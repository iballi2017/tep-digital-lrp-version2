import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicOperationsSubtractionStageOneInstructionalVideoComponent } from './basic-operations-subtraction-stage-one-instructional-video/basic-operations-subtraction-stage-one-instructional-video.component';
import { BasicOperationsSubtractionStageOneSplashComponent } from './basic-operations-subtraction-stage-one-splash.component';

const routes: Routes = [
  {
    path: '',
    component: BasicOperationsSubtractionStageOneSplashComponent,
    children: [
      {
        path: '',
        component: BasicOperationsSubtractionStageOneInstructionalVideoComponent,
      },
      {
        path: 'interlude',
        component: BasicOperationsSubtractionStageOneInstructionalVideoComponent,
      },
    ],
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicOperationsSubtractionStageOneSplashRoutingModule { }
