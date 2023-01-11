import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsiveWebpagesRoutingModule } from './responsive-webpages-routing.module';
import { ActivityPageComponent } from './activity-page/activity-page.component';


@NgModule({
  declarations: [
    ActivityPageComponent
  ],
  imports: [
    CommonModule,
    ResponsiveWebpagesRoutingModule
  ]
})
export class ResponsiveWebpagesModule { }
