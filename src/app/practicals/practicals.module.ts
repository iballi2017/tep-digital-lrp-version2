import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticalsRoutingModule } from './practicals-routing.module';
import { PracticalsComponent } from './practicals.component';


@NgModule({
  declarations: [
    PracticalsComponent
  ],
  imports: [
    CommonModule,
    PracticalsRoutingModule
  ]
})
export class PracticalsModule { }
