import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsSubtractionRoutingModule } from './basic-operations-subtraction-routing.module';
import { BasicOperationsSubtractionStageOneComponent } from './stages/basic-operations-subtraction-stage-one/basic-operations-subtraction-stage-one.component';
import { BasicOperationsSubtractionStageTwoComponent } from './stages/basic-operations-subtraction-stage-two/basic-operations-subtraction-stage-two.component';


@NgModule({
  declarations: [
    BasicOperationsSubtractionStageOneComponent,
    BasicOperationsSubtractionStageTwoComponent,
    // BasicOperationsSubtractionStageTwoComponent
  ],
  imports: [
    CommonModule,
    BasicOperationsSubtractionRoutingModule,
  ]
})
export class BasicOperationsSubtractionModule { }
