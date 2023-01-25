import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsSubtractionStageTwoSplashRoutingModule } from './basic-operations-subtraction-stage-two-splash-routing.module';
import { BasicOperationsSubtractionStageTwoSplashComponent } from './basic-operations-subtraction-stage-two-splash.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BasicOperationsSubtractionStageTwoInstructionalVideoComponent } from './basic-operations-subtraction-stage-two-instructional-video/basic-operations-subtraction-stage-two-instructional-video.component';


@NgModule({
  declarations: [
    BasicOperationsSubtractionStageTwoSplashComponent,
    BasicOperationsSubtractionStageTwoInstructionalVideoComponent
  ],
  imports: [
    CommonModule,
    BasicOperationsSubtractionStageTwoSplashRoutingModule,
    SharedModule
  ]
})
export class BasicOperationsSubtractionStageTwoSplashModule { }
