import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsAdditionRoutingModule } from './basic-operations-addition-routing.module';
import { BasicOperationsAdditionStageOneComponent } from './stages/basic-operations-addition-stage-one/basic-operations-addition-stage-one.component';
import { BasicOperationsAdditionStageTwoComponent } from './stages/basic-operations-addition-stage-two/basic-operations-addition-stage-two.component';


@NgModule({
  declarations: [
    BasicOperationsAdditionStageOneComponent,
    BasicOperationsAdditionStageTwoComponent
  ],
  imports: [
    CommonModule,
    BasicOperationsAdditionRoutingModule
  ]
})
export class BasicOperationsAdditionModule { }
