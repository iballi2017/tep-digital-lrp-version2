import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError } from 'rxjs';
import { baseUrl } from 'src/app/config/api';
import { handleError } from 'src/app/helpers/errorHandler';
import { ExerciseAnswer } from 'src/app/models/interface/game';

@Injectable({
  providedIn: 'root',
})
export class NumberRecognitionOneService {
  StartGameUrl = baseUrl + '/start-game-session';
  SubmitNumberRecognition_1_GameStage_1_Url =
    baseUrl + '/submit-number-recognition-1-stage-1';
  addLetterLevelResultBehaviour = new BehaviorSubject(false);

  constructor(private _http: HttpClient) {}

  SubmitGameStageResult(_GameStageResult: ExerciseAnswer) {
    return this._http
      .post(
        `${this.SubmitNumberRecognition_1_GameStage_1_Url}`,
        _GameStageResult
      )
      .pipe(catchError(handleError));
  }
}
