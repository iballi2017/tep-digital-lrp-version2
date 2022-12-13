import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LetterStageOneSplashRoutingModule } from './letter-stage-one-splash-routing.module';
import { LetterStageOneInstructionalVideoComponent } from './letter-stage-one-instructional-video/letter-stage-one-instructional-video.component';
import { LetterStageOneSplashComponent } from './letter-stage-one-splash.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LetterStageOneInstructionalVideoComponent,
    LetterStageOneSplashComponent,
  ],
  imports: [CommonModule, LetterStageOneSplashRoutingModule, SharedModule],
})
export class LetterStageOneSplashModule {}
