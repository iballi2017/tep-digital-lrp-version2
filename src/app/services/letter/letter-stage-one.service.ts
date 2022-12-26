import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError } from 'rxjs';
import { baseUrl } from 'src/app/config/api';
import { handleError } from 'src/app/helpers/errorHandler';

@Injectable({
  providedIn: 'root'
})
export class LetterStageOneService {
  StartGameUrl = baseUrl + '/start-game-session';
  SubmitGameStage_1_Url = baseUrl + '/submit-letter-stage-1';
  addLetterLevelResultBehaviour = new BehaviorSubject(false);

  constructor(
    private _http: HttpClient) { }



  sendAddLetterLevelResultBehaviour(Msg: any) {
    this.addLetterLevelResultBehaviour.next(Msg);
  }
  getAddLetterLevelResultBehaviour() {
    return this.addLetterLevelResultBehaviour.asObservable();
  }


  SubmitResult(_LetterStageOneResult: any) {
    console.log("_LetterStageOneResult: ", _LetterStageOneResult)
    return this._http
      .post(`${this.SubmitGameStage_1_Url}`, _LetterStageOneResult)
      .pipe(catchError(handleError));
  }

}
