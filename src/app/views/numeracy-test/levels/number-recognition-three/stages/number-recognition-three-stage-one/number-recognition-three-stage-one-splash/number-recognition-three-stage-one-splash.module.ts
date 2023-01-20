import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumberRecognitionThreeStageOneSplashRoutingModule } from './number-recognition-three-stage-one-splash-routing.module';
import { NumberRecognitionThreeStageOneSplashComponent } from './number-recognition-three-stage-one-splash.component';
import { NumberRecognitionThreeStageOneInstructionalVideoComponent } from './number-recognition-three-stage-one-instructional-video/number-recognition-three-stage-one-instructional-video.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    NumberRecognitionThreeStageOneSplashComponent,
    NumberRecognitionThreeStageOneInstructionalVideoComponent
  ],
  imports: [
    CommonModule,
    NumberRecognitionThreeStageOneSplashRoutingModule,
    SharedModule
  ]
})
export class NumberRecognitionThreeStageOneSplashModule { }
