import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceValueStageOneSplashRoutingModule } from './place-value-stage-one-splash-routing.module';
import { PlaceValueStageOneSplashComponent } from './place-value-stage-one-splash.component';
import { PlaceValueStageOneInstructionalVideoComponent } from './place-value-stage-one-instructional-video/place-value-stage-one-instructional-video.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PlaceValueStageOneSplashComponent,
    PlaceValueStageOneInstructionalVideoComponent
  ],
  imports: [
    CommonModule,
    PlaceValueStageOneSplashRoutingModule,
    SharedModule
  ]
})
export class PlaceValueStageOneSplashModule { }
