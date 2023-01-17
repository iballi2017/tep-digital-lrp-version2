import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { baseUrl } from 'src/app/config/api';
import { handleError } from 'src/app/helpers/errorHandler';
import { ExerciseAnswer } from 'src/app/models/interface/game';

@Injectable({
  providedIn: 'root'
})
export class NumberRecognitionTwoService {
  SubmitNumberRecognition_2_GameStage_1_Url =
    baseUrl + '/submit-number-recognition-2-stage-1';

  constructor(private _http: HttpClient) {}

  
  SubmitGameStageResult(_GameStageResult: ExerciseAnswer) {
    return this._http
      .post(`${this.SubmitNumberRecognition_2_GameStage_1_Url}`, _GameStageResult)
      .pipe(catchError(handleError));
  }
}
