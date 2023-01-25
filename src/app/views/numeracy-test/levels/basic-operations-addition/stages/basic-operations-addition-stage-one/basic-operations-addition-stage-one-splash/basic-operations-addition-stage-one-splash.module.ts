import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsAdditionStageOneSplashRoutingModule } from './basic-operations-addition-stage-one-splash-routing.module';
import { BasicOperationsAdditionStageOneSplashComponent } from './basic-operations-addition-stage-one-splash.component';
import { BasicOperationsAdditionStageOneInstructionalVideoComponent } from './basic-operations-addition-stage-one-instructional-video/basic-operations-addition-stage-one-instructional-video.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BasicOperationsAdditionStageOneSplashComponent,
    BasicOperationsAdditionStageOneInstructionalVideoComponent
  ],
  imports: [
    CommonModule,
    BasicOperationsAdditionStageOneSplashRoutingModule,
    SharedModule
  ]
})
export class BasicOperationsAdditionStageOneSplashModule { }
