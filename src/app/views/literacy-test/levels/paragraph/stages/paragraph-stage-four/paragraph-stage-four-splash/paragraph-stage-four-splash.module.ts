import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParagraphStageFourSplashRoutingModule } from './paragraph-stage-four-splash-routing.module';
import { ParagraphStageFourSplashComponent } from './paragraph-stage-four-splash.component';
import { ParagraphStageFourInstructionalVideoComponent } from './paragraph-stage-four-instructional-video/paragraph-stage-four-instructional-video.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ParagraphStageFourSplashComponent,
    ParagraphStageFourInstructionalVideoComponent
  ],
  imports: [
    CommonModule,
    ParagraphStageFourSplashRoutingModule,
    SharedModule
  ]
})
export class ParagraphStageFourSplashModule { }
