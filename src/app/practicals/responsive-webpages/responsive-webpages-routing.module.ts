import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityPageComponent } from './activity-page/activity-page.component';
import { ResponsiveWebpagesComponent } from './responsive-webpages.component';

const routes: Routes = [
  {
    path: '', component: ResponsiveWebpagesComponent,
    children:[
      {path: '', component: ActivityPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsiveWebpagesRoutingModule { }
