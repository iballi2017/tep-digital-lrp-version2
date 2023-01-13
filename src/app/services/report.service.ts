import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Subscription } from 'rxjs';
import { baseUrl } from '../config/api';
import { handleError } from '../helpers/errorHandler';
import { GameReport, SessionId } from '../models/interface/game-report';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  GetUserGameResultUrl = baseUrl + '/fetch-user-game-result';
  // fetch-user-game-result?search=lite&pageLength=20&pageNumber=1&sort=Asc
  DeleteUserGameResultUrl = baseUrl + '/delete-game-result';
  GetUserGameResultDetailsUrl = baseUrl + '/fetch-game-result-details';

  Subscriptions: Subscription[] = [];

  constructor(
    private _http: HttpClient //  private ngRedux: NgRedux<IAppState>
  ) {}

  // search=lite&pageLength=20&pageNumber=1&sort=Asc

  LoadPagedUserGameResult(Payload: any) {
    console.warn('Payload: ', Payload);
    return this._http.get<GameReport>(
      `${this.GetUserGameResultUrl}?search=${Payload?.searchWord}&pageLength=${Payload?.pageSize}&pageNumber=${Payload?.pageNumber}&sort=Asc`
    );
  }

  LoadUserGameResult() {
    // this.ngRedux.dispatch({ type: FETCH_REPORTS_LIST });
    return this._http.get<GameReport>(this.GetUserGameResultUrl);

    // let subscription = this._http
    //   .get<GameReport>(this.GetUserGameResultUrl)
    //   .pipe(
    //     map((result: any) => {
    //       console.log('result: ', result);
    //       let reports: any[] = result?.data;
    //       let reportList: GameReport[] = [];
    //       if (result) {
    //         // return result;

    //         // gms_type: 'Literacy';
    //         // occ_age: '9';
    //         // occ_gender: 'Male';
    //         // occ_name: 'Taye Taiwo';
    //         // score_percent: '0.00%';
    //         // session_id: 'e075b69c-f539-44128f5b';
    //         // status: 'Incomplete';
    //         // total_score: 0;

    //         for (let key in reports) {
    //           let report: GameReport = {
    //             sessionId: reports[key].session_id,
    //             fullname: reports[key].occ_name,
    //             age: reports[key].occ_age,
    //             gender: reports[key].occ_gender,
    //             program: reports[key].gms_type,
    //             status: reports[key].status,
    //             overallScore: reports[key].total_score,
    //             scorePercent: reports[key].score_percent,
    //           };
    //           reportList.push({ ...report, key: key });
    //         }
    //       }
    //       return reportList;
    //     }),
    //     catchError(handleError)
    //   )
    //   .subscribe({
    //     next: (response: any) => {
    //       console.log('response: ', response);
    //       if (response) {
    //         // this.ngRedux.dispatch({
    //         //   type: FETCH_REPORTS_LIST_SUCCESS,
    //         //   payload: response,
    //         // });
    //       }
    //     },
    //     error: (err: any) => {
    //       if (err) {
    //         // this.ngRedux.dispatch({
    //         //   type: FETCH_REPORTS_LIST_ERROR,
    //         //   payload: err,
    //         // });
    //       }
    //     },
    //   });
    // this.Subscriptions.push(subscription);
  }

  LoadGameResultDetails(sessionId: SessionId) {
    return this._http.get(`${this.GetUserGameResultDetailsUrl}/${sessionId}`);
  }

  RemoveReport(sessionId: SessionId) {
    // return this._http.delete(`${this.testUrl}/${reportId}`);
    return this._http
      .post(`${this.DeleteUserGameResultUrl}`, sessionId)
      .pipe(catchError(handleError));
  }

  ngOnDestroy(): void {
    this.Subscriptions.forEach((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    });
  }
}
