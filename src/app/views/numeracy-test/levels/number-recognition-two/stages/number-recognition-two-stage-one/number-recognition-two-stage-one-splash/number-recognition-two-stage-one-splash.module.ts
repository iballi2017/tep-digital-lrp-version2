import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumberRecognitionTwoStageOneSplashRoutingModule } from './number-recognition-two-stage-one-splash-routing.module';
import { NumberRecognitionTwoStageOneSplashComponent } from './number-recognition-two-stage-one-splash.component';


@NgModule({
  declarations: [
    NumberRecognitionTwoStageOneSplashComponent
  ],
  imports: [
    CommonModule,
    NumberRecognitionTwoStageOneSplashRoutingModule
  ]
})
export class NumberRecognitionTwoStageOneSplashModule { }
