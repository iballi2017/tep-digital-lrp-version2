import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicOperationsAdditionStageTwoInstructionalVideoComponent } from './basic-operations-addition-stage-two-instructional-video/basic-operations-addition-stage-two-instructional-video.component';
import { BasicOperationsAdditionStageTwoSplashComponent } from './basic-operations-addition-stage-two-splash.component';

const routes: Routes = [
  {
    path: '',
    component: BasicOperationsAdditionStageTwoSplashComponent,
    children: [
      {
        path: '',
        component: BasicOperationsAdditionStageTwoInstructionalVideoComponent,
      },
      {
        path: 'interlude',
        component: BasicOperationsAdditionStageTwoInstructionalVideoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicOperationsAdditionStageTwoSplashRoutingModule { }
