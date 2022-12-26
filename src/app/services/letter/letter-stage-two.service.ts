import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError } from 'rxjs';
import { baseUrl } from 'src/app/config/api';
import { handleError } from 'src/app/helpers/errorHandler';

@Injectable({
  providedIn: 'root',
})
export class LetterStageTwoService {
  StartGameUrl = baseUrl + '/start-game-session';
  SubmitGameStage_2_Url = baseUrl + '/submit-letter-stage-2';
  addLetterLevelResultBehaviour = new BehaviorSubject(false);

  constructor(private _http: HttpClient) {}

  sendAddLetterLevelResultBehaviour(Msg: any) {
    this.addLetterLevelResultBehaviour.next(Msg);
  }
  getAddLetterLevelResultBehaviour() {
    return this.addLetterLevelResultBehaviour.asObservable();
  }

  SubmitResult(_LetterStageTwoResult: any) {
    console.log('_LetterStageTwoResult: ', _LetterStageTwoResult);
    return this._http
      .post(`${this.SubmitGameStage_2_Url}`, _LetterStageTwoResult)
      .pipe(catchError(handleError));
  }
}
