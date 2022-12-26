import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError } from 'rxjs';
import { baseUrl } from 'src/app/config/api';
import { handleError } from 'src/app/helpers/errorHandler';

@Injectable({
  providedIn: 'root',
})
export class LetterStageThreeService {
  StartGameUrl = baseUrl + '/start-game-session';
  SubmitGameStage_3_Url = baseUrl + '/submit-letter-stage-3';
  addLetterLevelResultBehaviour = new BehaviorSubject(false);

  constructor(private _http: HttpClient) {}

  sendAddLetterLevelResultBehaviour(Msg: any) {
    this.addLetterLevelResultBehaviour.next(Msg);
  }
  getAddLetterLevelResultBehaviour() {
    return this.addLetterLevelResultBehaviour.asObservable();
  }

  SubmitResult(_LetterStageThreeResult: any) {
    console.log('_LetterStageThreeResult: ', _LetterStageThreeResult);
    return this._http
      .post(`${this.SubmitGameStage_3_Url}`, _LetterStageThreeResult)
      .pipe(catchError(handleError));
  }
}
