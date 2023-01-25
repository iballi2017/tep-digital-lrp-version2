import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsMultiplicationStageOneSplashRoutingModule } from './basic-operations-multiplication-stage-one-splash-routing.module';
import { BasicOperationsMultiplicationStageOneSplashComponent } from './basic-operations-multiplication-stage-one-splash.component';
import { BasicOperationsMultiplicationStageOneInstructionalVideoComponent } from './basic-operations-multiplication-stage-one-instructional-video/basic-operations-multiplication-stage-one-instructional-video.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BasicOperationsMultiplicationStageOneSplashComponent,
    BasicOperationsMultiplicationStageOneInstructionalVideoComponent
  ],
  imports: [
    CommonModule,
    BasicOperationsMultiplicationStageOneSplashRoutingModule,
    SharedModule
  ]
})
export class BasicOperationsMultiplicationStageOneSplashModule { }
