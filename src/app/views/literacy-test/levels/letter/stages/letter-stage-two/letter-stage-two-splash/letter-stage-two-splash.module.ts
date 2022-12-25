import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LetterStageTwoSplashRoutingModule } from './letter-stage-two-splash-routing.module';
import { LetterStageTwoInstructionalVideoComponent } from './letter-stage-two-instructional-video/letter-stage-two-instructional-video.component';
import { LetterStageTwoSplashComponent } from './letter-stage-two-splash.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LetterStageTwoInstructionalVideoComponent,
    LetterStageTwoSplashComponent,
  ],
  imports: [CommonModule, LetterStageTwoSplashRoutingModule, SharedModule],
})
export class LetterStageTwoSplashModule {}
