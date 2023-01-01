import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParagraphStageThreeSplashRoutingModule } from './paragraph-stage-three-splash-routing.module';
import { ParagraphStageThreeSplashComponent } from './paragraph-stage-three-splash.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ParagraphStageThreeInstructionalVideoComponent } from './paragraph-stage-three-instructional-video/paragraph-stage-three-instructional-video.component';


@NgModule({
  declarations: [
    ParagraphStageThreeSplashComponent,
    ParagraphStageThreeInstructionalVideoComponent
  ],
  imports: [
    CommonModule,
    ParagraphStageThreeSplashRoutingModule,
    SharedModule
  ]
})
export class ParagraphStageThreeSplashModule { }
