import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError } from 'rxjs';
import { baseUrl } from 'src/app/config/api';
import { handleError } from 'src/app/helpers/errorHandler';

@Injectable({
  providedIn: 'root',
})
export class WordStageFourService {
  SubmitGameStage_4_Url = baseUrl + '/submit-word-stage-4';
  addWordLevelResultBehaviour = new BehaviorSubject(false);

  constructor(private _http: HttpClient) {}

  sendAddWordLevelResultBehaviour(Msg: any) {
    this.addWordLevelResultBehaviour.next(Msg);
  }
  getAddWordLevelResultBehaviour() {
    return this.addWordLevelResultBehaviour.asObservable();
  }

  SubmitResult(_WordStageFourResult: any) {
    console.log('_WordStageFourResult: ', _WordStageFourResult);
    return this._http
      .post(`${this.SubmitGameStage_4_Url}`, _WordStageFourResult)
      .pipe(catchError(handleError));
  }
}
