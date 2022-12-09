import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiteracyTestRoutingModule } from './literacy-test-routing.module';
import { LetterComponent } from './levels/letter/letter.component';
import { LiteracyTestComponent } from './literacy-test.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LiteracyTestComponent,
    LetterComponent
  ],
  imports: [
    CommonModule,
    LiteracyTestRoutingModule,
    SharedModule
  ]
})
export class LiteracyTestModule { }
