import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsDivisionStageTwoSplashRoutingModule } from './basic-operations-division-stage-two-splash-routing.module';
import { BasicOperationsDivisionStageTwoInstructionalVideoComponent } from './basic-operations-division-stage-two-instructional-video/basic-operations-division-stage-two-instructional-video.component';
import { BasicOperationsDivisionStageTwoSplashComponent } from './basic-operations-division-stage-two-splash.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BasicOperationsDivisionStageTwoInstructionalVideoComponent,
    BasicOperationsDivisionStageTwoSplashComponent
  ],
  imports: [
    CommonModule,
    BasicOperationsDivisionStageTwoSplashRoutingModule,
    SharedModule
  ]
})
export class BasicOperationsDivisionStageTwoSplashModule { }
