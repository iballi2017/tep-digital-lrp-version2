import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoryRoutingModule } from './story-routing.module';
import { StoryStageOneComponent } from './stages/story-stage-one/story-stage-one.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    StoryStageOneComponent
  ],
  imports: [
    CommonModule,
    StoryRoutingModule,
    SharedModule
  ]
})
export class StoryModule { }
