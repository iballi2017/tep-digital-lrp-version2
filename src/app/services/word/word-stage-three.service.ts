import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError } from 'rxjs';
import { baseUrl } from 'src/app/config/api';
import { handleError } from 'src/app/helpers/errorHandler';

@Injectable({
  providedIn: 'root',
})
export class WordStageThreeService {
  SubmitGameStage_3_Url = baseUrl + '/submit-word-stage-3';
  addWordLevelResultBehaviour = new BehaviorSubject(false);

  constructor(private _http: HttpClient) {}

  sendAddWordLevelResultBehaviour(Msg: any) {
    this.addWordLevelResultBehaviour.next(Msg);
  }
  getAddWordLevelResultBehaviour() {
    return this.addWordLevelResultBehaviour.asObservable();
  }

  SubmitResult(_WordStageThreeResult: any) {
    console.log('_WordStageThreeResult: ', _WordStageThreeResult);
    return this._http
      .post(`${this.SubmitGameStage_3_Url}`, _WordStageThreeResult)
      .pipe(catchError(handleError));
  }
}
