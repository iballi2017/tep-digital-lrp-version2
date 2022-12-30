import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SessionId } from 'src/app/models/interface/game-report';
import { GameType } from 'src/app/models/interface/game-type';
import { ReportService } from 'src/app/services/report.service';
import { BooleanAlertDialogComponent } from 'src/app/shared/shared.components/boolean-alert-dialog/boolean-alert-dialog.component';
import {
  addGameSession,
  addGameSessionSuccess,
} from 'src/app/shared/store/game/game.actions';
import { selectedReport } from '../../store/reports/report.selectors';
import {
  deleteReport,
  deleteReportFailure,
  deleteReportSuccess,
  loadSingleReport,
} from '../../store/reports/reports.actions';
import { ReportState } from '../../store/reports/reports.reducer';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss'],
})
export class ReportDetailsComponent implements OnInit {
  // primaryBtnTitle = 'Continue';
  // dangerBtnTitle = 'Delete Report';
  // primaryBtnClasses =
  //   'edit-btn action-button primary-btn text-bold text-uppercase px-3';
  // dangerBtnClasses =
  //   'btn action-button delete-btn danger-btn text-uppercase px-4';
  // primaryBtnStyle = { fontSize: '17px' };
  // dangerBtnStyle = { fontSize: '17px' };

  //

  SortItem: any;
  btnClasses = 'btn-40-height text-bold text-uppercase px-3';
  btnDanger = {
    title: 'Delete Report',
  };
  btnEdit = {
    title: 'Continue',
  };

  title = 'REPORT DETAILS';
  respondentInformation: any;
  reportDetails: any;
  reportDetails$!: Observable<any>;
  constructor(
    private _route: ActivatedRoute,
    private _reportSvc: ReportService,
    private store: Store<ReportState>,
    public dialog: MatDialog,
    public _router: Router
  ) {}

  ngOnInit(): void {
    this.getRouteParams();
  }

  getRouteParams() {
    this._route.paramMap.subscribe({
      next: (params: any) => {
        if (params) {
          let x = params.get('sessionId');
          console.log('params: ', params);
          this.respondentInformation = x;
          this.onGetReportDetails(x);
        }
      },
      error: (err: any) => {
        console.warn('Error: ', err);
      },
    });
  }

  onGetReportDetails(sessionId: string) {
    console.log('sessionId***: ', sessionId);
    this.store.dispatch(loadSingleReport({ session_id: sessionId }));
    this.reportDetails$ = this.store.pipe(select(selectedReport));
    // this._reportSvc.LoadGameResultDetails(sessionId);

    // this.gameResultDetails$.subscribe({
    //   next: (data: any) => {
    //     if (data) {
    //       this.reportDetails = data;
    //     }
    //   },
    //   error: (err: any) => {
    //     if (err) {
    //       console.error('Error: ', err);
    //     }
    //   },
    // });
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

    this._reportSvc.RemoveReport(_sessionId).subscribe({
      next: (response: any) => {
        if (response) {
          console.log('response: ', response);
          this.store.dispatch(deleteReport({ id: _sessionId }));
          // this.ngRedux.dispatch({
          //   type: REMOVE_REPORT_SUCCESS,
          //   payload: {
          //     sessionId: sessionId,
          //   },
          // });
          this._router.navigate(['/account/reports']);
        }
      },
      error: (err: any) => {
        console.warn('Error: ', err);
        this.store.dispatch(deleteReportFailure({ error: err }));
        // this.ngRedux.dispatch({
        //   type: REMOVE_REPORT_ERROR,
        //   payload: err,
        // });
      },
    });
  }

  onContinueReportGame(sessionId: string, GameType: string) {
    this.store.dispatch(addGameSession());
    console.log('sessionId: ', sessionId);
    const Payload = {
      status: 'success',
      session_id: sessionId,
      game_type: GameType.toLowerCase(),
      message: 'Game initiated successfully',
    };
    this.store.dispatch(addGameSessionSuccess({ sessionData: Payload }));
    this.routeToGame(Payload.game_type);
  }
  routeToGame(GT: string) {
    switch (GT) {
      case GameType.LITERACY.toLowerCase():
        this._router.navigate(['/literacy/levels/letter']);
        break;
      case GameType.NUMERACY.toLowerCase():
        this._router.navigate(['/numeracy/levels/number-recognition-one']);
        break;
      default:
        break;
    }
  }

  back() {
    history.back();
  }
}
