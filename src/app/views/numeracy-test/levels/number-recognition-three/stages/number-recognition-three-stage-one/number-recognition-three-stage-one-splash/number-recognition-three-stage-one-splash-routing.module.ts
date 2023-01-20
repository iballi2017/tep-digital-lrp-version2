import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumberRecognitionThreeStageOneInstructionalVideoComponent } from './number-recognition-three-stage-one-instructional-video/number-recognition-three-stage-one-instructional-video.component';
import { NumberRecognitionThreeStageOneSplashComponent } from './number-recognition-three-stage-one-splash.component';

const routes: Routes = [
  {
    path: '',
    component: NumberRecognitionThreeStageOneSplashComponent,
    children: [
      {
        path: '',
        component: NumberRecognitionThreeStageOneInstructionalVideoComponent,
      },
      {
        path: 'interlude',
        component: NumberRecognitionThreeStageOneInstructionalVideoComponent,
      },
    ],
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NumberRecognitionThreeStageOneSplashRoutingModule { }
