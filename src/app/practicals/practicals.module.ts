import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticalsRoutingModule } from './practicals-routing.module';
import { PracticalsComponent } from './practicals.component';
import { ResponsiveWebpagesComponent } from './responsive-webpages/responsive-webpages.component';


@NgModule({
  declarations: [
    PracticalsComponent,
    ResponsiveWebpagesComponent
  ],
  imports: [
    CommonModule,
    PracticalsRoutingModule
  ]
})
export class PracticalsModule { }
