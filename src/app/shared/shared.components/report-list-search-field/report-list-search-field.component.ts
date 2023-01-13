import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-list-search-field',
  templateUrl: './report-list-search-field.component.html',
  styleUrls: ['./report-list-search-field.component.scss'],
})
export class ReportListSearchFieldComponent implements OnInit {
  searchTerm = '';
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  onSearch(searchTerm: any) {
    console.log('searchTerm: ', searchTerm);
    // this._router.navigate([`/account/reports/search/${this.searchTerm}`]);
    this._router.navigate([`/account/reports/report-list/${this.searchTerm}`]);
  }
}
