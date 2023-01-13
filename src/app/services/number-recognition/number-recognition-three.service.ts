import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { baseUrl } from 'src/app/config/api';
import { handleError } from 'src/app/helpers/errorHandler';
import { ExerciseAnswer } from 'src/app/models/types/exercise-answer';
import { actionNumbers, resultNumbers } from 'src/assets/data/numeracy.data/number-recognition-three.data';

@Injectable({
  providedIn: 'root'
})
export class NumberRecognitionThreeService {
  SubmitNumberRecognition_3_GameStage_1_Url =
    baseUrl + '/submit-number-recognition-3-stage-1';

  constructor(private _http: HttpClient) {}

  GetActionNumbers() {
    let numbersList = [...actionNumbers];
    return numbersList;
  }
  GetresultNumbers() {
    let numbersList = { ...resultNumbers };
    return numbersList;
  }

  SubmitGameStageResult(_GameStageResult: ExerciseAnswer) {
    return this._http
      .post(`${this.SubmitNumberRecognition_3_GameStage_1_Url}`, _GameStageResult)
      .pipe(catchError(handleError));
  }
}
