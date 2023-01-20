import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumberRecognitionThreeRoutingModule } from './number-recognition-three-routing.module';
import { NumberRecognitionThreeStageOneComponent } from './stages/number-recognition-three-stage-one/number-recognition-three-stage-one.component';


@NgModule({
  declarations: [
    NumberRecognitionThreeStageOneComponent
  ],
  imports: [
    CommonModule,
    NumberRecognitionThreeRoutingModule
  ]
})
export class NumberRecognitionThreeModule { }
