import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumeracyTestRoutingModule } from './numeracy-test-routing.module';
import { NumeracyTestComponent } from './numeracy-test.component';
import { NumberRecognitionOneComponent } from './levels/number-recognition-one/number-recognition-one.component';


@NgModule({
  declarations: [
    NumeracyTestComponent,
    NumberRecognitionOneComponent
  ],
  imports: [
    CommonModule,
    NumeracyTestRoutingModule
  ]
})
export class NumeracyTestModule { }
