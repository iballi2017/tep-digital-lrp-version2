import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { ReportListComponent } from './report-list/report-list.component';
import { ReportSearchResultComponent } from './report-search-result/report-search-result.component';
import { ReportsComponent } from './reports.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsComponent,
    children: [
      { path: '', component: ReportListComponent },
      { path: 'report-list', component: ReportListComponent },
      { path: 'details/:sessionId', component: ReportDetailsComponent },
      // { path: 'search/:searchTerm', component: ReportSearchResultComponent },
      { path: 'report-list/:searchTerm', component: ReportListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportRoutingModule {}
