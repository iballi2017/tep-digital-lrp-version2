import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LetterStageThreeSplashRoutingModule } from './letter-stage-three-splash-routing.module';
import { LetterStageThreeSplashComponent } from './letter-stage-three-splash.component';
import { LetterStageThreeInstructionalVideoComponent } from './letter-stage-three-instructional-video/letter-stage-three-instructional-video.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LetterStageThreeSplashComponent,
    LetterStageThreeInstructionalVideoComponent,
  ],
  imports: [CommonModule, LetterStageThreeSplashRoutingModule, SharedModule],
})
export class LetterStageThreeSplashModule {}
