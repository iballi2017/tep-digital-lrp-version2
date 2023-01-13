import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumberRecognitionOneRoutingModule } from './number-recognition-one-routing.module';
import { NumberRecognitionOneStageOneComponent } from './stages/number-recognition-one-stage-one/number-recognition-one-stage-one.component';


@NgModule({
  declarations: [
    NumberRecognitionOneStageOneComponent
  ],
  imports: [
    CommonModule,
    NumberRecognitionOneRoutingModule
  ]
})
export class NumberRecognitionOneModule { }
