import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsMultiplicationRoutingModule } from './basic-operations-multiplication-routing.module';
import { BasicOperationsMultiplicationStageOneComponent } from './stages/basic-operations-multiplication-stage-one/basic-operations-multiplication-stage-one.component';
import { BasicOperationsMultiplicationStageTwoComponent } from './stages/basic-operations-multiplication-stage-two/basic-operations-multiplication-stage-two.component';


@NgModule({
  declarations: [
    BasicOperationsMultiplicationStageOneComponent,
    BasicOperationsMultiplicationStageTwoComponent
  ],
  imports: [
    CommonModule,
    BasicOperationsMultiplicationRoutingModule
  ]
})
export class BasicOperationsMultiplicationModule { }
