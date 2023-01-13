import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { SessionId } from 'src/app/models/interface/game-report';
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
  reportsList$!: Observable<any>;
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
  pageRequest!: { pageSize: number; pageNumber: number; searchWord: string };
  reportParams$!: Observable<any>;
  page: number = 1;
  count = 0;
  ItemsPerPage = 10;
  searchTerm:string = '';
  totalRecords!: string;
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
          console.log('params: ', params);
          let searchTerm = params.get('searchTerm');
          console.log('searchTerm: ', searchTerm);
          this.searchTerm = searchTerm;
          const Payload = {
            pageSize: this.ItemsPerPage,
            pageNumber: this.page,
            searchWord: this.searchTerm,
          };
          this.store.dispatch(loadPagedReports({ Payload }));
        } 
        // else {
          // this.searchTerm = '';
          // const Payload = {
          //   pageSize: this.ItemsPerPage,
          //   pageNumber: this.page,
          //   searchWord: this.searchTerm,
          // };
          // this.store.dispatch(loadPagedReports({ Payload }));
        // }
      },
      error: (err: any) => {
        console.warn('Error: ', err);
      },
    });
  }
  onGetReportList() {
    if(!this.searchTerm){
      this.searchTerm = ""
    }
    const Payload = {
      pageSize: this.ItemsPerPage,
      pageNumber: 1,
      searchWord: this.searchTerm,
    };
    console.log("Payload: ", Payload)
    this.store.dispatch(loadPagedReports({ Payload }));
    // this.store.dispatch(loadReports());
    this.reportsList$ = this.store.pipe(select(selectReports));
    this.reportParams$ = this.store.pipe(select(selectedReportParams));
    this.isLoadingReportList$ = this.store.pipe(
      select(reportSelectStateIsLoading)
    );

    // this.isLoadingReportList$.subscribe((data: any) => {
    //   this.isLoadingReportList = data;
    // });
    let subscription = this.reportsList$.subscribe({
      next: (response: any) => {
        if (response) {
          console.log('response: ', response);
          this.reportList = response;
        }
      },
    });
    this.Subscriptions.push(subscription);

    let reportParamsSubscription = this.reportParams$.subscribe({
      next: (response: any) => {
        if (response) {
          console.log('response: ', response);
          this.totalRecords = response.totalRecords;
        }
      },
    });
    this.Subscriptions.push(reportParamsSubscription);
  }
  onViewReportDetails(sessionId: any) {
    console.log('sessionId: ', sessionId);
    this._router.navigate([`account/reports/details/${sessionId}`]);
  }

  onRemoveReport(sessionId: string) {
    console.log('sessionId: ', sessionId);
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
    console.log('sessionId: ', sessionId);
    const _sessionId: SessionId = {
      session_id: sessionId,
    };
    this.store.dispatch(deleteReport({ id: _sessionId }));
  }

  sortReportListBy(FilterForm: any) {
    let SortItem = FilterForm.value.Filter;
    switch (SortItem) {
      case FilterDropdown.ASCENDING:
        this.reportList.sort((a: any, b: any) =>
          a['fullname'] > b['fullname'] ? 1 : -1
        );
        break;

      case FilterDropdown.DESCENDING:
        this.reportList.sort((a: any, b: any) =>
          a['fullname'] > b['fullname'] ? -1 : 1
        );
        break;

      case FilterDropdown.AGE:
        this.reportList.sort((a: any, b: any) => {
          let x = parseInt(a['age']);
          let y = parseInt(b['age']);
          return x > y ? 1 : -1;
        });
        break;

      case FilterDropdown.HIGHEST_SCORE:
        this.reportList.sort((a: any, b: any) => {
          let x = parseInt(a['overallScore']);
          let y = parseInt(b['overallScore']);
          return x > y ? -1 : 1;
        });
        break;

      case FilterDropdown.LOWEST_SCORE:
        this.reportList.sort((a: any, b: any) => {
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
    // console.log("Paginate: ", this.ItemsPerPage, this.page);
    // this._IdentitySvc._LoadAllUsers(this.ItemsPerPage, this.page);
    const Payload = {
      pageSize: this.ItemsPerPage,
      pageNumber: this.page,
      searchWord: this.searchTerm,
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
