import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiComponentStorageRoutingModule } from './ui-component-storage-routing.module';
import { UiComponentStorageComponent } from './ui-component-storage.component';
import { SlidingSidenavComponent } from './sliding-sidenav/sliding-sidenav.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';


@NgModule({
  declarations: [
    UiComponentStorageComponent,
    SlidingSidenavComponent
  ],
  imports: [
    CommonModule,
    UiComponentStorageRoutingModule,
    NgMaterialModule
  ]
})
export class UiComponentStorageModule { }
