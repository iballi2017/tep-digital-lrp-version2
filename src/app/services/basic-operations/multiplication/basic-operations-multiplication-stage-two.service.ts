import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError } from 'rxjs';
import { baseUrl } from 'src/app/config/api';
import { handleError } from 'src/app/helpers/errorHandler';
import { ExerciseAnswer } from 'src/app/models/interface/game';

@Injectable({
  providedIn: 'root'
})
export class BasicOperationsMultiplicationStageTwoService {
  StartGameUrl = baseUrl + '/start-game-session';
    SubmitBasicOperationsMultiplicationGameStage_2_Url = baseUrl + '/submit-basic-operations-mul-stage-2';
  BasicOperationsMultiplicationLevelResultBehaviour = new BehaviorSubject(false);

  constructor(private _http: HttpClient) {}
  

  sendBasicOperationsMultiplicationLevelResultBehaviour(Msg: any) {
    this.BasicOperationsMultiplicationLevelResultBehaviour.next(Msg);
  }
  getBasicOperationsMultiplicationLevelResultBehaviour() {
    return this.BasicOperationsMultiplicationLevelResultBehaviour.asObservable();
  }


  SubmitResult(_GameStageResult: ExerciseAnswer) {
    return this._http
      .post(
        `${this.SubmitBasicOperationsMultiplicationGameStage_2_Url}`,
        _GameStageResult
      )
      .pipe(catchError(handleError));
  }
}
