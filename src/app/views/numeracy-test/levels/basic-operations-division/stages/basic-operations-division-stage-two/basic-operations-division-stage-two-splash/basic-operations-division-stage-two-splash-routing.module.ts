import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicOperationsDivisionStageTwoInstructionalVideoComponent } from './basic-operations-division-stage-two-instructional-video/basic-operations-division-stage-two-instructional-video.component';
import { BasicOperationsDivisionStageTwoSplashComponent } from './basic-operations-division-stage-two-splash.component';

const routes: Routes = [
  {
    path: '',
    component: BasicOperationsDivisionStageTwoSplashComponent,
    children: [
      {
        path: '',
        component: BasicOperationsDivisionStageTwoInstructionalVideoComponent,
      },
      {
        path: 'interlude',
        component: BasicOperationsDivisionStageTwoInstructionalVideoComponent,
      },
    ],
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicOperationsDivisionStageTwoSplashRoutingModule { }
