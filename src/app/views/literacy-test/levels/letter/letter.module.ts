import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LetterRoutingModule } from './letter-routing.module';
import { LetterStageOneComponent } from './stages/letter-stage-one/letter-stage-one.component';
import { LetterStageTwoComponent } from './stages/letter-stage-two/letter-stage-two.component';
import { LetterStageThreeComponent } from './stages/letter-stage-three/letter-stage-three.component';


@NgModule({
  declarations: [
    LetterStageOneComponent,
    LetterStageTwoComponent,
    LetterStageThreeComponent
  ],
  imports: [
    CommonModule,
    LetterRoutingModule
  ]
})
export class LetterModule { }
