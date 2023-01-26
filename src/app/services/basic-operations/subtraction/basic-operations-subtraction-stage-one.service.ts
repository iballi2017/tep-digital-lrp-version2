import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError } from 'rxjs';
import { baseUrl } from 'src/app/config/api';
import { handleError } from 'src/app/helpers/errorHandler';
import { ExerciseAnswer } from 'src/app/models/interface/game';

@Injectable({
  providedIn: 'root'
})
export class BasicOperationsSubtractionStageOneService {
  StartGameUrl = baseUrl + '/start-game-session';
    SubmitBasicOperationsSubtractionGameStage_1_Url = baseUrl + '/submit-basic-operations-sub-stage-1';
  BasicOperationsSubtractionLevelResultBehaviour = new BehaviorSubject(false);

  constructor(private _http: HttpClient) {}
  

  sendBasicOperationsSubtractionLevelResultBehaviour(Msg: any) {
    this.BasicOperationsSubtractionLevelResultBehaviour.next(Msg);
  }
  getBasicOperationsSubtractionLevelResultBehaviour() {
    return this.BasicOperationsSubtractionLevelResultBehaviour.asObservable();
  }


  SubmitResult(_GameStageResult: ExerciseAnswer) {
    return this._http
      .post(
        `${this.SubmitBasicOperationsSubtractionGameStage_1_Url}`,
        _GameStageResult
      )
      .pipe(catchError(handleError));
  }
}
