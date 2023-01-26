import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError } from 'rxjs';
import { baseUrl } from 'src/app/config/api';
import { handleError } from 'src/app/helpers/errorHandler';
import { ExerciseAnswer } from 'src/app/models/interface/game';

@Injectable({
  providedIn: 'root'
})
export class BasicOperationsDivisionStageTwoService {
  StartGameUrl = baseUrl + '/start-game-session';
  SubmitBasicOperationsDivisionGameStage_2_Url = baseUrl + '/submit-basic-operations-div-stage-2';
  BasicOperationsDivisionLevelResultBehaviour = new BehaviorSubject(false);

  constructor(private _http: HttpClient) { }


  sendBasicOperationsDivisionLevelResultBehaviour(Msg: any) {
    this.BasicOperationsDivisionLevelResultBehaviour.next(Msg);
  }
  getBasicOperationsDivisionLevelResultBehaviour() {
    return this.BasicOperationsDivisionLevelResultBehaviour.asObservable();
  }


  SubmitResult(_GameStageResult: ExerciseAnswer) {
    return this._http
      .post(
        `${this.SubmitBasicOperationsDivisionGameStage_2_Url}`,
        _GameStageResult
      )
      .pipe(catchError(handleError));
  }
}
