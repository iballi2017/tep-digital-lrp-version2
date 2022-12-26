import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WordStageThreeSplashRoutingModule } from './word-stage-three-splash-routing.module';
import { WordStageThreeSplashComponent } from './word-stage-three-splash.component';
import { WordStageThreeInstructionalVideoComponent } from './word-stage-three-instructional-video/word-stage-three-instructional-video.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    WordStageThreeSplashComponent,
    WordStageThreeInstructionalVideoComponent
  ],
  imports: [
    CommonModule,
    WordStageThreeSplashRoutingModule,
    SharedModule
  ]
})
export class WordStageThreeSplashModule { }
