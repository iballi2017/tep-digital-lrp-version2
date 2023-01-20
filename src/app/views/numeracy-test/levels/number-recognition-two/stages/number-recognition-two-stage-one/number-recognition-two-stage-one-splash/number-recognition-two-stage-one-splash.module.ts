import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumberRecognitionTwoStageOneSplashRoutingModule } from './number-recognition-two-stage-one-splash-routing.module';
import { NumberRecognitionTwoStageOneSplashComponent } from './number-recognition-two-stage-one-splash.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NumberRecognitionTwoStageOneInstructionalVideoComponent } from './number-recognition-two-stage-one-instructional-video/number-recognition-two-stage-one-instructional-video.component';


@NgModule({
  declarations: [
    NumberRecognitionTwoStageOneSplashComponent,
    NumberRecognitionTwoStageOneInstructionalVideoComponent
  ],
  imports: [
    CommonModule,
    NumberRecognitionTwoStageOneSplashRoutingModule,
    SharedModule
  ]
})
export class NumberRecognitionTwoStageOneSplashModule { }
