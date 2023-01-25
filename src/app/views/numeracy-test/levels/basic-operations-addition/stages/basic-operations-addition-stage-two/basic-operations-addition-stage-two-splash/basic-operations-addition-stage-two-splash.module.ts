import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsAdditionStageTwoSplashRoutingModule } from './basic-operations-addition-stage-two-splash-routing.module';
import { BasicOperationsAdditionStageTwoInstructionalVideoComponent } from './basic-operations-addition-stage-two-instructional-video/basic-operations-addition-stage-two-instructional-video.component';
import { BasicOperationsAdditionStageTwoSplashComponent } from './basic-operations-addition-stage-two-splash.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BasicOperationsAdditionStageTwoInstructionalVideoComponent,
    BasicOperationsAdditionStageTwoSplashComponent
  ],
  imports: [
    CommonModule,
    BasicOperationsAdditionStageTwoSplashRoutingModule,
    SharedModule
  ]
})
export class BasicOperationsAdditionStageTwoSplashModule { }
