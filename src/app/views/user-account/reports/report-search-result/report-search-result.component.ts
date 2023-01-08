import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report-search-result',
  templateUrl: './report-search-result.component.html',
  styleUrls: ['./report-search-result.component.scss'],
})
export class ReportSearchResultComponent implements OnInit {
  title = 'Reports';

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {}

  onGetSearchTerm() {
    this._route.paramMap.subscribe({
      next: (params: any) => {
        let searchTerm = params.get('searchTerm');
        this.onGlobalSearch(searchTerm);
      },
      error: (err: any) => {
        console.warn('Error: ', err);
      },
    });

    // this._globalSearchSvc.searchTerm.subscribe({
    //   next: (response: any) => {
    //     this.searchTerm = response;
    //     // console.log('SEARCHTERM: ', this.searchTerm);
    //   },
    //   error: (err: any) => {
    //     console.warn('Error: ', err);
    //   },
    // });
  }

  onGlobalSearch(searchTerm: any) {
    const Payload: any = searchTerm;
    console.log('searchTerm: ', searchTerm);
  }
}
