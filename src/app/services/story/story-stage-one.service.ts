import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError } from 'rxjs';
import { baseUrl } from 'src/app/config/api';
import { handleError } from 'src/app/helpers/errorHandler';

@Injectable({
  providedIn: 'root'
})
export class StoryStageOneService {
  StartGameUrl = baseUrl + '/start-game-session';
  SubmitGameStage_1_Url = baseUrl + '/submit-story-stage-1';
  addStoryLevelResultBehaviour = new BehaviorSubject(false);

  constructor(private _http: HttpClient) { }

  sendAddStoryLevelResultBehaviour(Msg: any) {
    this.addStoryLevelResultBehaviour.next(Msg);
  }
  getAddStoryLevelResultBehaviour() {
    return this.addStoryLevelResultBehaviour.asObservable();
  }

  SubmitResult(_StoryStageOneResult: any) {
    console.log('_StoryStageOneResult: ', _StoryStageOneResult);
    return this._http
      .post(`${this.SubmitGameStage_1_Url}`, _StoryStageOneResult)
      .pipe(catchError(handleError));
  }
}
