import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ReportService } from 'src/app/services/report.service';
import * as fromReportActions from './reports.actions';

@Injectable()
export class ReportsEffects {
  loadReportList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromReportActions.loadReports),
      mergeMap((action: any) =>
        this._reportSvc.LoadUserGameResult().pipe(
          map((response: any) => {
            console.log('response: ', response);
            let reports = response?.data.map((item: any) => {
              return {
                ...item,
                id: item.session_id,
                sessionId: item.session_id,
                fullname: item.occ_name,
                age: item.occ_age,
                gender: item.occ_gender,
                program: item.gms_type,
                status: item.status,
                overallScore: item.total_score,
                scorePercent: item.score_percent,
              };
            });
            return fromReportActions.loadReportsSuccess({
              reports,
            });
          }),
          catchError((error: any) =>
            of(fromReportActions.loadReportsFailure({ error }))
          )
        )
      )
      // tap(() => this._router.navigate(['/practicals/ngrx/products']))
    );
  });

  loadPagedReportList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromReportActions.loadPagedReports),
      mergeMap((action: any) =>
        this._reportSvc.LoadPagedUserGameResult(action.Payload).pipe(
          map((response: any) => {
            this._reportSvc.sendGameResultWithSearchParamBehavior(false);
            let _reports = response?.body?.data.map((item: any) => {
              return {
                ...item,
                id: item.session_id,
                sessionId: item.session_id,
                fullname: item.occ_name,
                age: item.occ_age,
                gender: item.occ_gender,
                program: item.gms_type,
                status: item.status,
                overallScore: item.total_score,
                scorePercent: item.score_percent,
              };
            });
            const reports = Object.assign(response, { data: _reports });
            return fromReportActions.loadPagedReportsSuccess({
              reports,
            });
          }),
          catchError((error: any) => {
            this._reportSvc.sendGameResultWithSearchParamBehavior(false);
            return of(fromReportActions.loadPagedReportsFailure({ error }));
          })
        )
      )
      // tap(() => this._router.navigate(['/practicals/ngrx/products']))
    );
  });

  loadSingleReport$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromReportActions.loadSingleReport),
      mergeMap((action: any) =>
        this._reportSvc.LoadGameResultDetails(action.session_id).pipe(
          map((report: any) => {
            // console.group('report: ', report);
            return fromReportActions.loadSingleReportSuccess({
              selectedReport: report,
            });
          }),
          catchError((error: any) =>
            of(fromReportActions.loadSingleReportFailure({ error }))
          )
        )
      )
      // tap(() => this._router.navigate(['/practicals/ngrx/products']))
    );
  });

  deleteSingleReportt$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromReportActions.deleteReport),
      mergeMap((action: any) =>
        this._reportSvc.RemoveReport(action.id).pipe(
          map((report: any) => {
            // console.log('report: ', report);
            return fromReportActions.deleteReportSuccess({
              id: action?.id,
            });
          }),
          catchError((error: any) =>
            of(fromReportActions.deleteReportFailure({ error }))
          )
        )
      )
      // tap(() => this._router.navigate(['/practicals/ngrx/products']))
    );
  });
  constructor(private actions$: Actions, private _reportSvc: ReportService) {}
}
