import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumberRecognitionTwoStageOneInstructionalVideoComponent } from './number-recognition-two-stage-one-instructional-video/number-recognition-two-stage-one-instructional-video.component';
import { NumberRecognitionTwoStageOneSplashComponent } from './number-recognition-two-stage-one-splash.component';

const routes: Routes = [
  {
    path: '',
    component: NumberRecognitionTwoStageOneSplashComponent,
    children: [
      {
        path: '',
        component: NumberRecognitionTwoStageOneInstructionalVideoComponent,
      },
      {
        path: 'interlude',
        component: NumberRecognitionTwoStageOneInstructionalVideoComponent,
      },
    ],
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NumberRecognitionTwoStageOneSplashRoutingModule { }
