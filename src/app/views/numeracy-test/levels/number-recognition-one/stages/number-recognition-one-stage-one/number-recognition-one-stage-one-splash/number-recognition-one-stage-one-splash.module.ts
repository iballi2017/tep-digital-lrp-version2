import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumberRecognitionOneStageOneSplashRoutingModule } from './number-recognition-one-stage-one-splash-routing.module';
import { NumberRecognitionOneStageOneSplashComponent } from './number-recognition-one-stage-one-splash.component';
import { NumberRecognitionOneStageOneInstructionalVideoComponent } from './number-recognition-one-stage-one-instructional-video/number-recognition-one-stage-one-instructional-video.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    NumberRecognitionOneStageOneSplashComponent,
    NumberRecognitionOneStageOneInstructionalVideoComponent
  ],
  imports: [
    CommonModule,
    NumberRecognitionOneStageOneSplashRoutingModule,
    SharedModule
  ]
})
export class NumberRecognitionOneStageOneSplashModule { }
