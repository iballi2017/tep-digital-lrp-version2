import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError } from 'rxjs';
import { baseUrl } from 'src/app/config/api';
import { handleError } from 'src/app/helpers/errorHandler';
import { ExerciseAnswer } from 'src/app/models/interface/game';

@Injectable({
  providedIn: 'root',
})
export class PlaceValueService {
  SubmitPlaceValueStage_1_Url = baseUrl + '/submit-place-value-stage-1';
  addPlaceValueLevelResultBehaviour = new BehaviorSubject(false);

  constructor(private _http: HttpClient) {}

  sendAddPlaceValueLevelResultBehaviour(Msg: any) {
    this.addPlaceValueLevelResultBehaviour.next(Msg);
  }
  getAddPlaceValueLevelResultBehaviour() {
    return this.addPlaceValueLevelResultBehaviour.asObservable();
  }

  SubmitResult(_GameStageResult: ExerciseAnswer) {
    return this._http
      .post(`${this.SubmitPlaceValueStage_1_Url}`, _GameStageResult)
      .pipe(catchError(handleError));
  }
}
