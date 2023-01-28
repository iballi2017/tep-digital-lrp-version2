import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportListComponent } from './report-list/report-list.component';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { ReportsComponent } from './reports.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReportSearchResultComponent } from './report-search-result/report-search-result.component';
import { NgMaterialModule } from 'src/app/ng-material/ng-material.module';


@NgModule({
  declarations: [
    ReportsComponent,
    ReportListComponent,
    ReportDetailsComponent,
    ReportSearchResultComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgMaterialModule
  ]
})
export class ReportModule { }
