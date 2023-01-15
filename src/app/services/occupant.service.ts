import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subscription } from 'rxjs';
import { baseUrl } from '../config/api';
import { handleError } from '../helpers/errorHandler';
import { IOccupant } from '../models/interface/occupant';

@Injectable({
  providedIn: 'root'
})
export class OccupantService {
  GetOccupantUrl = baseUrl + '/fetch-account-occupants';
  AddOccupantUrl = baseUrl + '/add-new-occupant';
  FetchOccupantUrl = baseUrl + '/fetch-occupant-by-id';
  RemoveOccupantUrl = baseUrl + '/delete-occupant';
  UpdateOccupantAccountUrl = baseUrl + '/update-occupant-account';
  Subscriptions: Subscription[] = [];

  constructor(private _http: HttpClient, 
    // private ngRedux: NgRedux<IAppState>
    ) { }

  LoadOccupants(queryParams: any):Observable<any> {
    // return this._http.get(this.GetOccupantUrl);
    return this._http.get<any>(
      `${this.GetOccupantUrl}${queryParams}`,
      {
        observe: 'response',
        // observe: 'events',
      }
    );
  }

  AddOccupant(Occupant: Occupant) {
    return this._http.post(this.AddOccupantUrl, Occupant);
  }

  FetchOccupantDetails(OccupantId: string) {
    // this.ngRedux.dispatch({ type: FETCH_SINGLE_OCCUPANT });
    // return this._http.get(`${this.FetchOccupantUrl}/${OccupantId}`);
    let subscription = this._http.get(`${this.FetchOccupantUrl}/${encodeURIComponent(OccupantId)}`).subscribe({
      next: (response: any) => {
        if (response) {

          // this.ngRedux.dispatch({
          //   type: FETCH_SINGLE_OCCUPANT_SUCCESS,
          //   payload: response.data,
          // });
        }
      },
      error: (err: any) => {
        console.warn('Error: ', err);
        // this.ngRedux.dispatch({
        //   type: FETCH_SINGLE_OCCUPANT_ERROR,
        //   payload: err,
        // });
      },
    });
    this.Subscriptions.push(subscription);
  }


  GetSingleOccupant(OccupantId:string){
    return this._http.get(`${this.FetchOccupantUrl}/${encodeURIComponent(OccupantId)}`)
  }

  UpdateOccupantDetails(Occupant: IOccupant) {
    // UpdateOccupantAccountUrl
    return this._http.post(this.UpdateOccupantAccountUrl, Occupant)
      .pipe(catchError(handleError));
  }

  RemoveOccupant(Item: any) {
    let x: any = {
      occ_id: Item?.occ_id,
    };

    // return this._http.delete(this.RemoveOccupantUrl, x);
    return this._http.post(
      'https://lrp.mainlandcode.com/v1/api/delete-occupant',
      x
    )
      .pipe(catchError(handleError));
    // return this._http.delete(`${this.RemoveOccupantUrl}/${Item?.occ_id}`);
  }


  ngOnDestroy(): void {
    this.Subscriptions.forEach((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    });
  }
}

interface Occupant {
  occ_name: string;
  occ_state: string;
  occ_age: number;
  occ_gender: string;
}
