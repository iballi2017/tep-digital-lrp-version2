import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { SessionId } from 'src/app/models/interface/game-report';
import { ReportService } from 'src/app/services/report.service';
import { BooleanAlertDialogComponent } from 'src/app/shared/shared.components/boolean-alert-dialog/boolean-alert-dialog.component';
import { selectReports } from '../../store/reports/report.selectors';
import { loadReports } from '../../store/reports/reports.actions';
import { ReportState } from '../../store/reports/reports.reducer';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss'],
})
export class ReportListComponent implements OnInit {
  // @select((s) => s.reportsList.reportsList) reportsList$!: any;
  // @select((s) => s.reportsList.isLoading) isLoading$!: any;
  // reportList: any[] = [1, 2, 3];
  reportsList$!: Observable<any>;
  filterDropdownList = [
    FilterDropdown?.ASCENDING,
    FilterDropdown?.DESCENDING,
    FilterDropdown?.AGE,
    FilterDropdown?.LOWEST_SCORE,
    FilterDropdown?.HIGHEST_SCORE,
  ];
  Subscriptions: Subscription[] = [];
  reports: any;
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
  constructor(
    private _reportSvc: ReportService,
    // private ngRedux: NgRedux<IAppState>,
    private _router: Router,
    public dialog: MatDialog,
    private store: Store<ReportState>
  ) {
    this.SortItem = '';
  }

  ngOnInit(): void {
    this.onGetReportList();
    // this._reportSvc.LoadUserGameResult();
  }

  onGetReportList() {
    this.store.dispatch(loadReports());
    this.reportsList$ = this.store.pipe(select(selectReports));
    // let subscription = this.reportsList$.subscribe({
    //   next: (response: any) => {
    //     console.log('response: ', response);
    //     this.reports = response;
    //   },
    // });
    // this.Subscriptions.push(subscription);
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
    // this.ngRedux.dispatch({ type: REMOVE_REPORT });
    const _sessionId: SessionId = {
      session_id: sessionId,
    };

    this._reportSvc.RemoveReport(_sessionId).subscribe({
      next: (response: any) => {
        if (response) {
          console.log('response: ', response);
          // this.ngRedux.dispatch({
          //   type: REMOVE_REPORT_SUCCESS,
          //   payload: {
          //     sessionId: sessionId,
          //   },
          // });
        }
      },
      error: (err: any) => {
        console.warn('Error: ', err);
        // this.ngRedux.dispatch({
        //   type: REMOVE_REPORT_ERROR,
        //   payload: err,
        // });
      },
    });
  }

  onEditReport() {}



  sortReportListBy(FilterForm: any) {
    let SortItem = FilterForm.value.Filter;
    switch (SortItem) {
      case FilterDropdown.ASCENDING:
        this.reports.sort((a: any, b: any) =>
          a['fullname'] > b['fullname'] ? 1 : -1
        );
        break;

      case FilterDropdown.DESCENDING:
        this.reports.sort((a: any, b: any) =>
          a['fullname'] > b['fullname'] ? -1 : 1
        );
        break;

      case FilterDropdown.AGE:
        this.reports.sort((a: any, b: any) => {
          let x = parseInt(a['age']);
          let y = parseInt(b['age']);
          return x > y ? 1 : -1;
        });
        break;

      case FilterDropdown.HIGHEST_SCORE:
        this.reports.sort((a: any, b: any) => {
          let x = parseInt(a['overallScore']);
          let y = parseInt(b['overallScore']);
          return x > y ? -1 : 1;
        });
        break;

      case FilterDropdown.LOWEST_SCORE:
        this.reports.sort((a: any, b: any) => {
          let x = parseInt(a['overallScore']);
          let y = parseInt(b['overallScore']);
          return x > y ? 1 : -1;
        });
        break;

      default:
        return this.reports;
    }
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
