import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError } from 'rxjs';
import { baseUrl } from 'src/app/config/api';
import { handleError } from 'src/app/helpers/errorHandler';
import { ExerciseAnswer } from 'src/app/models/interface/game';

@Injectable({
  providedIn: 'root'
})
export class BasicOperationsAdditionStageOneService {
  StartGameUrl = baseUrl + '/start-game-session';
    SubmitBasicOperationsAddGameStage_1_Url = baseUrl + '/submit-basic-operations-add-stage-1';
  BasicOperationsAdditionLevelResultBehaviour = new BehaviorSubject(false);

  constructor(private _http: HttpClient) {}
  

  sendBasicOperationsAdditionLevelResultBehaviour(Msg: any) {
    this.BasicOperationsAdditionLevelResultBehaviour.next(Msg);
  }
  getBasicOperationsAdditionLevelResultBehaviour() {
    return this.BasicOperationsAdditionLevelResultBehaviour.asObservable();
  }


  SubmitResult(_GameStageResult: ExerciseAnswer) {
    return this._http
      .post(
        `${this.SubmitBasicOperationsAddGameStage_1_Url}`,
        _GameStageResult
      )
      .pipe(catchError(handleError));
  }
}
