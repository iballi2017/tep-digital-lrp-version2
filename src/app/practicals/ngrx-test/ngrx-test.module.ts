import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxTestRoutingModule } from './ngrx-test-routing.module';
import { NgrxTestComponent } from './ngrx-test.component';


@NgModule({
  declarations: [
    NgrxTestComponent
  ],
  imports: [
    CommonModule,
    NgrxTestRoutingModule
  ]
})
export class NgrxTestModule { }
