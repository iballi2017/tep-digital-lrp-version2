import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError } from 'rxjs';
import { baseUrl } from 'src/app/config/api';
import { handleError } from 'src/app/helpers/errorHandler';

@Injectable({
  providedIn: 'root',
})
export class WordStageTwoService {
  SubmitGameStage_2_Url = baseUrl + '/submit-word-stage-2';
  addWordLevelResultBehaviour = new BehaviorSubject(false);

  constructor(private _http: HttpClient) {}

  sendAddWordLevelResultBehaviour(Msg: any) {
    this.addWordLevelResultBehaviour.next(Msg);
  }
  getAddWordLevelResultBehaviour() {
    return this.addWordLevelResultBehaviour.asObservable();
  }

  SubmitResult(_WordStageTwoResult: any) {
    console.log('_WordStageTwoResult: ', _WordStageTwoResult);
    return this._http
      .post(`${this.SubmitGameStage_2_Url}`, _WordStageTwoResult)
      .pipe(catchError(handleError));
  }
}
