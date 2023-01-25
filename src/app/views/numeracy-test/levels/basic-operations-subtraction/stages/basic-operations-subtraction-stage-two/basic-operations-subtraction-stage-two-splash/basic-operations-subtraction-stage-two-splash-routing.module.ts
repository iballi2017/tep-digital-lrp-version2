import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicOperationsSubtractionStageTwoInstructionalVideoComponent } from './basic-operations-subtraction-stage-two-instructional-video/basic-operations-subtraction-stage-two-instructional-video.component';
import { BasicOperationsSubtractionStageTwoSplashComponent } from './basic-operations-subtraction-stage-two-splash.component';

const routes: Routes = [
  {
    path: '',
    component: BasicOperationsSubtractionStageTwoSplashComponent,
    children: [
      {
        path: '',
        component: BasicOperationsSubtractionStageTwoInstructionalVideoComponent,
      },
      {
        path: 'interlude',
        component: BasicOperationsSubtractionStageTwoInstructionalVideoComponent,
      },
    ],
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicOperationsSubtractionStageTwoSplashRoutingModule { }
