import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParagraphStageOneSplashRoutingModule } from './paragraph-stage-one-splash-routing.module';
import { ParagraphStageOneSplashComponent } from './paragraph-stage-one-splash.component';
import { ParagraphStageOneInstructionalVideoComponent } from './paragraph-stage-one-instructional-video/paragraph-stage-one-instructional-video.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ParagraphStageOneSplashComponent,
    ParagraphStageOneInstructionalVideoComponent
  ],
  imports: [
    CommonModule,
    ParagraphStageOneSplashRoutingModule,
    SharedModule
  ]
})
export class ParagraphStageOneSplashModule { }
