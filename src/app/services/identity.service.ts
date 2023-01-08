import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable } from 'rxjs';
import { baseUrl } from '../config/api';
import { handleError } from '../helpers/errorHandler';
import { UpdatePassword, UpdateUserModel } from '../models/interface/user';

@Injectable({
  providedIn: 'root',
})
export class IdentityService {
  UpdateUserUrl = baseUrl + '/update-user-profile';
  FetchUserByIdUrl = baseUrl + '/fetch-user-by-id';
  UpdatePasswordUrl = baseUrl + '/update-user-password';
  UpdateUserDetailsBehaviour = new BehaviorSubject(false);

  constructor(private _router: Router, private _http: HttpClient) {}

  sendUpdateUserDetailsBehaviour(msg: any) {
    this.UpdateUserDetailsBehaviour.next(msg);
  }

  getLoggedInUserData() {
    let data: any = localStorage.getItem('currentUserData');
    if (!data) {
      this._router.navigate(['/auth']);
    }
    let userData = JSON.parse(data);
    return userData;
  }

  getUserById(): Observable<any> {
    // return this._http.get(`${this.FetchUserByIdUrl}/${userId}`)
    let userData: any;
    let storedData = this.getLoggedInUserData();
    // this.ngRedux.dispatch({ type: FETCH_USER_DETAILS });
    return this._http.get(`${this.FetchUserByIdUrl}/${storedData?.usr_id}`);
    // .subscribe({
    //   next: (response: any) => {
    //     if (response) {

    //       userData = response?.data;
    //       // this.ngRedux.dispatch({
    //       //   type: FETCH_USER_DETAILS_SUCCESS,
    //       //   payload: userData,
    //       // });
    //       return userData;
    //     }
    //   },
    //   error: (err: any) => {
    //     console.warn('Error: ', err);
    //     // this.ngRedux.dispatch({
    //     //   type: FETCH_USER_DETAILS_ERROR,
    //     //   payload: err?.error,
    //     // });
    //     if (err?.error?.status == '0') {
    //       this._router.navigate(['/auth']);
    //     }
    //   },
    // });

    // this.ngRedux.dispatch({ type: FETCH_USER_DETAILS });
    // let loggedInUser = this._identitySvc.getLoggedInUserData();
    // this.ngRedux.dispatch({
    //   type: FETCH_USER_DETAILS_SUCCESS,
    //   payload: loggedInUser,
    // });
  }

  UpdateUserDetails(payload: UpdateUserModel) {
    return this._http
      .post(this.UpdateUserUrl, payload)
      .pipe(catchError(handleError));
  }

  UpdateUserPassword(Payload: UpdatePassword) {
    return this._http
      .post(`${this.UpdatePasswordUrl}`, Payload)
      .pipe(catchError(handleError));
  }
}
