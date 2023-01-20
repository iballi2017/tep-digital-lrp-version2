import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError } from 'rxjs';
import { baseUrl } from 'src/app/config/api';
import { handleError } from 'src/app/helpers/errorHandler';
import { ExerciseAnswer } from 'src/app/models/interface/game';

@Injectable({
  providedIn: 'root',
})
export class NumberRecognitionThreeService {
  SubmitNumberRecognition_3_GameStage_1_Url =
    baseUrl + '/submit-number-recognition-3-stage-1';
  addNumberRecognitionThreeLevelResultBehaviour = new BehaviorSubject(false);

  constructor(private _http: HttpClient) {}

  sendAddNumberRecognitionThreeLevelResultBehaviour(Msg: any) {
    this.addNumberRecognitionThreeLevelResultBehaviour.next(Msg);
  }
  getAddNumberRecognitionThreeLevelResultBehaviour() {
    return this.addNumberRecognitionThreeLevelResultBehaviour.asObservable();
  }

  SubmitResult(_GameStageResult: ExerciseAnswer) {
    return this._http
      .post(
        `${this.SubmitNumberRecognition_3_GameStage_1_Url}`,
        _GameStageResult
      )
      .pipe(catchError(handleError));
  }
}
