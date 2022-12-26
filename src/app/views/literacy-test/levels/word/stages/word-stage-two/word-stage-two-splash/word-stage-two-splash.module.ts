import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WordStageTwoSplashRoutingModule } from './word-stage-two-splash-routing.module';
import { WordStageTwoSplashComponent } from './word-stage-two-splash.component';
import { WordStageTwoInstructionalVideoComponent } from './word-stage-two-instructional-video/word-stage-two-instructional-video.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    WordStageTwoSplashComponent,
    WordStageTwoInstructionalVideoComponent,
  ],
  imports: [CommonModule, WordStageTwoSplashRoutingModule, SharedModule],
})
export class WordStageTwoSplashModule {}
