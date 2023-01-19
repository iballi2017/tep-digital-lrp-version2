import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumberRecognitionTwoRoutingModule } from './number-recognition-two-routing.module';
import { NumberRecognitionTwoStageOneComponent } from './stages/number-recognition-two-stage-one/number-recognition-two-stage-one.component';


@NgModule({
  declarations: [
    NumberRecognitionTwoStageOneComponent
  ],
  imports: [
    CommonModule,
    NumberRecognitionTwoRoutingModule
  ]
})
export class NumberRecognitionTwoModule { }
