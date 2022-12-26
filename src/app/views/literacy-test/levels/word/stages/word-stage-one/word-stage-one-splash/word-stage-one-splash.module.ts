import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WordStageOneSplashRoutingModule } from './word-stage-one-splash-routing.module';
import { WordStageOneSplashComponent } from './word-stage-one-splash.component';
import { WordStageOneInstructionalVideoComponent } from './word-stage-one-instructional-video/word-stage-one-instructional-video.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    WordStageOneSplashComponent,
    WordStageOneInstructionalVideoComponent
  ],
  imports: [
    CommonModule,
    WordStageOneSplashRoutingModule,
    SharedModule
  ]
})
export class WordStageOneSplashModule { }
