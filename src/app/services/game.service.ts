import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError } from 'rxjs';
import { baseUrl } from '../config/api';
import { handleError } from '../helpers/errorHandler';
import { GameSessionData, GameStageResult, StartGame } from '../models/interface/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  StartGameUrl = baseUrl + '/start-game-session';
  // FetchUserByIdrUrl = baseUrl + '/fetch-user-by-id';
  // UpdatePasswordUrl = baseUrl + '/update-user-password';
  SubmitGameStage_1_Url = baseUrl + '/submit-letter-stage-1';
  SubmitGameStage_2_Url = baseUrl + '/submit-letter-stage-2';
  SubmitGameStage_3_Url = baseUrl + '/submit-letter-stage-3';
  isCorrectAnswerBehaviorSubject: BehaviorSubject<any> =
    new BehaviorSubject<any>(null);

  constructor(
    private _http: HttpClient,
    // private ngRedux: NgRedux<IAppState>,
    private _router: Router
  ) { }

  sendIsCorrectAnswerBehaviorSubject(data: any) {
    this.isCorrectAnswerBehaviorSubject.next(data);
  }

  StartGame(Payload: StartGame) {
    return this._http.post(this.StartGameUrl, Payload);
  }

  LoadGameSession() {
    // this.ngRedux.dispatch({ type: FETCH_GAME_SESSION });
    let sessionData = localStorage.getItem(GameSessionData.name);
    if (sessionData) {
      let x = JSON.parse(sessionData);
      // this.ngRedux.dispatch({ type: FETCH_GAME_SESSION_SUCCESS, payload: x });
      return x
    } else {
      // this.ngRedux.dispatch({
      //   type: FETCH_GAME_SESSION_ERROR,
      //   payload: 'No Session stored',
      // });
      this._router.navigate(['/program-starter']);
    }
  }

  GetGameLevels() {
    let levels = [
      {
        title: 'lettering',
        stages: [
          {
            stageTitle: 1,
            stageUrl: '',
          },
          {
            stageTitle: 2,
            stageUrl: '',
          },
          {
            stageTitle: 3,
            stageUrl: '',
          },
          {
            stageTitle: 4,
            stageUrl: '',
          },
        ],
      },
    ];

    return levels;
  }

  IsGame() {
    let sessionData: any = localStorage.getItem(GameSessionData.name);
    let stageResultBook: any = localStorage.getItem(GameSessionData.result);
    return sessionData && stageResultBook ? true : false;
  }

  SubmitGameStageResult(_GameStageResult: GameStageResult) {
    return this._http
      .post(`${this.SubmitGameStage_1_Url}`, _GameStageResult)
      .pipe(catchError(handleError));
  }

  SubmitLetteringStageOneResult(_LetteringStageOneResult: any) {
    return this._http
      .post(`${this.SubmitGameStage_1_Url}`, _LetteringStageOneResult)
      .pipe(catchError(handleError));
  }

  SubmitLetteringStageTwoResult(_LetteringStageTwoResult: any) {
    return this._http
      .post(`${this.SubmitGameStage_2_Url}`, _LetteringStageTwoResult)
      .pipe(catchError(handleError));
  }

  SubmitLetteringStageThreeResult(_LetteringStageThreeResult: any) {
    return this._http
      .post(`${this.SubmitGameStage_3_Url}`, _LetteringStageThreeResult)
      .pipe(catchError(handleError));
  }
}

export interface LetteringStageOneAnswer {
  session_id: string;
  answer: string;
  data: any[];
}
