import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsSubtractionStageOneSplashRoutingModule } from './basic-operations-subtraction-stage-one-splash-routing.module';
import { BasicOperationsSubtractionStageOneSplashComponent } from './basic-operations-subtraction-stage-one-splash.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BasicOperationsSubtractionStageOneInstructionalVideoComponent } from './basic-operations-subtraction-stage-one-instructional-video/basic-operations-subtraction-stage-one-instructional-video.component';


@NgModule({
  declarations: [
    BasicOperationsSubtractionStageOneSplashComponent,
    BasicOperationsSubtractionStageOneInstructionalVideoComponent
  ],
  imports: [
    CommonModule,
    BasicOperationsSubtractionStageOneSplashRoutingModule,
    SharedModule
  ]
})
export class BasicOperationsSubtractionStageOneSplashModule { }
