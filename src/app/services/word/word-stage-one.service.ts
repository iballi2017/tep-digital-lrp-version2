import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError } from 'rxjs';
import { baseUrl } from 'src/app/config/api';
import { handleError } from 'src/app/helpers/errorHandler';

@Injectable({
  providedIn: 'root',
})
export class WordStageOneService {
  StartGameUrl = baseUrl + '/start-game-session';
  SubmitGameStage_1_Url = baseUrl + '/submit-word-stage-1';
  addWordLevelResultBehaviour = new BehaviorSubject(false);

  constructor(private _http: HttpClient) {}

  sendAddWordLevelResultBehaviour(Msg: any) {
    this.addWordLevelResultBehaviour.next(Msg);
  }
  getAddWordLevelResultBehaviour() {
    return this.addWordLevelResultBehaviour.asObservable();
  }

  SubmitResult(_WordStageOneResult: any) {
    console.log('_WordStageOneResult: ', _WordStageOneResult);
    return this._http
      .post(`${this.SubmitGameStage_1_Url}`, _WordStageOneResult)
      .pipe(catchError(handleError));
  }
}
