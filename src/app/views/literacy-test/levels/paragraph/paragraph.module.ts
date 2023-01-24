import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParagraphRoutingModule } from './paragraph-routing.module';
import { ParagraphStageTwoComponent } from './stages/paragraph-stage-two/paragraph-stage-two.component';
import { ParagraphStageThreeComponent } from './stages/paragraph-stage-three/paragraph-stage-three.component';
import { ParagraphStageFourComponent } from './stages/paragraph-stage-four/paragraph-stage-four.component';
import { ParagraphStageOneComponent } from './stages/paragraph-stage-one/paragraph-stage-one.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ParagraphStageOneComponent,
    ParagraphStageTwoComponent,
    ParagraphStageThreeComponent,
    ParagraphStageFourComponent
  ],
  imports: [
    CommonModule,
    ParagraphRoutingModule,
    SharedModule
  ]
})
export class ParagraphModule { }
