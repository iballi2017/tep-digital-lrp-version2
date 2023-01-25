import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicOperationsAdditionStageOneInstructionalVideoComponent } from './basic-operations-addition-stage-one-instructional-video/basic-operations-addition-stage-one-instructional-video.component';
import { BasicOperationsAdditionStageOneSplashComponent } from './basic-operations-addition-stage-one-splash.component';

const routes: Routes = [
  {
    path: '',
    component: BasicOperationsAdditionStageOneSplashComponent,
    children: [
      {
        path: '',
        component: BasicOperationsAdditionStageOneInstructionalVideoComponent,
      },
      {
        path: 'interlude',
        component: BasicOperationsAdditionStageOneInstructionalVideoComponent,
      },
    ],
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicOperationsAdditionStageOneSplashRoutingModule { }
