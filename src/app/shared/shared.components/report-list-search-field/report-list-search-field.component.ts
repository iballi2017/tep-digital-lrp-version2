import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-report-list-search-field',
  templateUrl: './report-list-search-field.component.html',
  styleUrls: ['./report-list-search-field.component.scss'],
})
export class ReportListSearchFieldComponent implements OnInit {
  searchTerm = '';
  isSearchTermSearchStart!: boolean;
  constructor(private _router: Router, private _reportSvc: ReportService) {}

  ngOnInit(): void {
    this._reportSvc.GameResultWithSearchParamBehavior.subscribe((msg) => {
        this.isSearchTermSearchStart = msg;
    });
  }

  onSearch(searchTerm: any) {
    console.log('searchTerm: ', searchTerm);
    // this._router.navigate([`/account/reports/search/${this.searchTerm}`]);
    this._router.navigate([`/account/reports/report-list/${this.searchTerm}`]);
  }
}
