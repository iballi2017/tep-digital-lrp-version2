import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumberRecognitionOneStageOneInstructionalVideoComponent } from './number-recognition-one-stage-one-instructional-video/number-recognition-one-stage-one-instructional-video.component';
import { NumberRecognitionOneStageOneSplashComponent } from './number-recognition-one-stage-one-splash.component';

const routes: Routes = [
  {
    path: '',
    component: NumberRecognitionOneStageOneSplashComponent,
    children: [
      {
        path: '',
        component: NumberRecognitionOneStageOneInstructionalVideoComponent,
      },
      {
        path: 'interlude',
        component: NumberRecognitionOneStageOneInstructionalVideoComponent,
      },
    ],
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NumberRecognitionOneStageOneSplashRoutingModule { }
