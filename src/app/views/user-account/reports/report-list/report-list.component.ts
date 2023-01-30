import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { buildQueryParams } from 'src/app/helpers/buildQueryParams';
import { SessionId } from 'src/app/models/interface/game-report';
import { ProgramCompletion } from 'src/app/models/interface/game-type';
import { QueryParamsModel } from 'src/app/models/interface/queryParamsModel';
import { ReportService } from 'src/app/services/report.service';
import { BooleanAlertDialogComponent } from 'src/app/shared/shared.components/boolean-alert-dialog/boolean-alert-dialog.component';
import {
  reportSelectStateIsLoading,
  selectedReportParams,
  selectReports,
} from '../../store/reports/report.selectors';
import {
  deleteReport,
  loadPagedReports,
  loadReports,
} from '../../store/reports/reports.actions';
import { ReportState } from '../../store/reports/reports.reducer';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss'],
})
export class ReportListComponent implements OnInit {
  reportList$!: Observable<any>;
  filterDropdownList = [
    FilterDropdown?.ASCENDING,
    FilterDropdown?.DESCENDING,
    FilterDropdown?.AGE,
    FilterDropdown?.LOWEST_SCORE,
    FilterDropdown?.HIGHEST_SCORE,
  ];
  Subscriptions: Subscription[] = [];
  reportList: any;
  primaryBtnTitle = 'View';
  dangerBtnTitle = 'Delete';
  SortItem: any;
  FilterForm!: any;
  btnClasses = 'btn-40-height';
  btnDanger = {
    title: 'Delete',
  };
  btnEdit = {
    title: 'View',
  };
  isLoadingReportList$!: Observable<boolean>;
  pageRequest!: { pageSize: number; pageNumber: number; search: string };
  reportParams$!: Observable<any>;
  page: number = 1;
  count = 0;
  ItemsPerPage = 20;
  searchTerm: string = '';
  totalRecords!: string;
  completed = ProgramCompletion.COMPLETED;

  reportQuery: QueryParamsModel = {
    pageSize: this.ItemsPerPage,
    pageNumber: this.page,
    search: this.searchTerm,
  };
  constructor(
    private _reportSvc: ReportService,
    // private ngRedux: NgRedux<IAppState>,
    private _router: Router,
    public dialog: MatDialog,
    private store: Store<ReportState>,
    private _route: ActivatedRoute
  ) {
    this.SortItem = '';
  }

  ngOnInit(): void {
    this.onGetSearchTerm();
    this.onGetReportList();
    // this._reportSvc.LoadUserGameResult();
  }

  onGetSearchTerm() {
    this._route.paramMap.subscribe({
      next: (params: any) => {
        if (params) {
          let searchTerm = params.get('searchTerm');
          this.reportQuery.search = searchTerm;
          if (!searchTerm) {
            this.reportQuery.search = '';
          } else {
            this._reportSvc.sendGameResultWithSearchParamBehavior(true);
          }
          const Payload = buildQueryParams(this.reportQuery);
          this.store.dispatch(loadPagedReports({ Payload }));
        }
      },
      error: (err: any) => {
        console.warn('Error: ', err);
      },
    });
  }

  onGetReportList() {
    if (!this.searchTerm) {
      this.reportQuery.search = '';
    }
    const Payload = buildQueryParams(this.reportQuery);
    this.store.dispatch(loadPagedReports({ Payload }));
    this.reportList$ = this.store.pipe(select(selectReports));
    this.reportParams$ = this.store.pipe(select(selectedReportParams));
    this.isLoadingReportList$ = this.store.pipe(
      select(reportSelectStateIsLoading)
    );
    let subscription = this.reportList$.subscribe({
      next: (response: any) => {
        if (response) {
          this.reportList = response;
        }
      },
    });
    this.Subscriptions.push(subscription);

    let reportParamsSubscription = this.reportParams$.subscribe({
      next: (response: any) => {
        if (response) {
          this.totalRecords = response.totalRecords;
        }
      },
    });
    this.Subscriptions.push(reportParamsSubscription);
  }
  onViewReportDetails(sessionId: any) {
    this._router.navigate([`account/reports/details/${sessionId}`]);
  }

  onRemoveReport(sessionId: string) {
    this.openDialog(sessionId);
  }

  openDialog(item: any) {
    const dialogRef = this.dialog.open(BooleanAlertDialogComponent, {
      width: '100%',
      maxWidth: '500px',
      data: {
        textInfo: 'Are you sure you want to delete this Report?',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      //
      if (result) {
        this.onDeleteOccupant(item);
      }
    });
  }

  onDeleteOccupant(sessionId: string) {
    const _sessionId: SessionId = {
      session_id: sessionId,
    };
    this.store.dispatch(deleteReport({ id: _sessionId }));
  }

  sortReportListBy(FilterForm: any) {
    console.warn('FilterForm: ', FilterForm.value.Filter);
    console.log('this.reportList: ', this.reportList);
    let SortItem = FilterForm.value.Filter;
    switch (SortItem) {
      case FilterDropdown.ASCENDING:
        this.reportList = [...this.reportList].sort((a: any, b: any) =>
          a['fullname'] > b['fullname'] ? 1 : -1
        );
        console.log('arange: ', this.reportList);
        break;

      case FilterDropdown.DESCENDING:
        this.reportList = [...this.reportList].sort((a: any, b: any) =>
          a['fullname'] > b['fullname'] ? -1 : 1
        );
        break;

      case FilterDropdown.AGE:
        this.reportList = [...this.reportList].sort((a: any, b: any) => {
          let x = parseInt(a['age']);
          let y = parseInt(b['age']);
          return x > y ? 1 : -1;
        });
        break;

      case FilterDropdown.HIGHEST_SCORE:
        [...this.reportList].sort((a: any, b: any) => {
          let x = parseInt(a['overallScore']);
          let y = parseInt(b['overallScore']);
          return x > y ? -1 : 1;
        });
        break;

      case FilterDropdown.LOWEST_SCORE:
        this.reportList = [...this.reportList].sort((a: any, b: any) => {
          let x = parseInt(a['overallScore']);
          let y = parseInt(b['overallScore']);
          return x > y ? 1 : -1;
        });
        break;

      default:
        return this.reportList;
    }
  }

  pageChangeEvent($event: any) {
    this.page = $event;
    const Payload = {
      pageSize: this.ItemsPerPage,
      pageNumber: this.page,
      search: this.searchTerm,
    };
    this.store.dispatch(loadPagedReports({ Payload }));
  }

  ngOnDestroy(): void {
    this.Subscriptions.forEach((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    });
  }
}

export enum FilterDropdown {
  ASCENDING = 'ASCENDING',
  DESCENDING = 'DESCENDING',
  AGE = 'AGE',
  HIGHEST_SCORE = 'HIGHEST SCORE',
  LOWEST_SCORE = 'LOWEST SCORE',
}
