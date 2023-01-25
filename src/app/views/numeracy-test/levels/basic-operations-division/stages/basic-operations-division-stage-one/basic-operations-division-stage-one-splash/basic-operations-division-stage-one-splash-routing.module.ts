import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicOperationsDivisionStageOneInstructionalVideoComponent } from './basic-operations-division-stage-one-instructional-video/basic-operations-division-stage-one-instructional-video.component';
import { BasicOperationsDivisionStageOneSplashComponent } from './basic-operations-division-stage-one-splash.component';

const routes: Routes = [
  {
    path: '',
    component: BasicOperationsDivisionStageOneSplashComponent,
    children: [
      {
        path: '',
        component: BasicOperationsDivisionStageOneInstructionalVideoComponent,
      },
      {
        path: 'interlude',
        component: BasicOperationsDivisionStageOneInstructionalVideoComponent,
      },
    ],
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicOperationsDivisionStageOneSplashRoutingModule { }
