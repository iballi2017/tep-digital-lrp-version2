import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceValueRoutingModule } from './place-value-routing.module';
import { PlaceValueStageOneComponent } from './stages/place-value-stage-one/place-value-stage-one.component';


@NgModule({
  declarations: [
    PlaceValueStageOneComponent
  ],
  imports: [
    CommonModule,
    PlaceValueRoutingModule
  ]
})
export class PlaceValueModule { }
