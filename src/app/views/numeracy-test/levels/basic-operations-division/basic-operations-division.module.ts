import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsDivisionRoutingModule } from './basic-operations-division-routing.module';
import { BasicOperationsDivisionStageOneComponent } from './stages/basic-operations-division-stage-one/basic-operations-division-stage-one.component';
import { BasicOperationsDivisionStageTwoComponent } from './stages/basic-operations-division-stage-two/basic-operations-division-stage-two.component';


@NgModule({
  declarations: [
    BasicOperationsDivisionStageOneComponent,
    BasicOperationsDivisionStageTwoComponent
  ],
  imports: [
    CommonModule,
    BasicOperationsDivisionRoutingModule
  ]
})
export class BasicOperationsDivisionModule { }
