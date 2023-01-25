import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsMultiplicationStageTwoSplashRoutingModule } from './basic-operations-multiplication-stage-two-splash-routing.module';
import { BasicOperationsMultiplicationStageTwoSplashComponent } from './basic-operations-multiplication-stage-two-splash.component';
import { BasicOperationsMultiplicationStageTwoInstructionalVideoComponent } from './basic-operations-multiplication-stage-two-instructional-video/basic-operations-multiplication-stage-two-instructional-video.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BasicOperationsMultiplicationStageTwoSplashComponent,
    BasicOperationsMultiplicationStageTwoInstructionalVideoComponent
  ],
  imports: [
    CommonModule,
    BasicOperationsMultiplicationStageTwoSplashRoutingModule,
    SharedModule
  ]
})
export class BasicOperationsMultiplicationStageTwoSplashModule { }
