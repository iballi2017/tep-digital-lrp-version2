import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { baseUrl } from '../config/api';

@Injectable({
  providedIn: 'root',
})
export class GameLevelResultAndRatingService {
  // GetUserGameResultUrl = baseUrl + '/fetch-user-game-result-by-session-id';
  // LETERACY
  LetterLevelGameResult_Url = baseUrl + '/letter-level-game-result';
  WordLevelGameResult_Url = baseUrl + '/word-level-game-result';
  ParagraphLevelGameResult_Url = baseUrl + '/paragraph-level-game-result';
  StoryLevelGameResult_Url = baseUrl + '/story-level-game-result';
  // NUMERACY
  NumberRecognition_1_gameResult_Url = baseUrl + '/number-recognition-1-game-result';
  NumberRecognition_2_gameResult_Url = baseUrl + '/number-recognition-2-game-result';
  NumberRecognition_3_gameResult_Url = baseUrl + '/number-recognition-3-game-result';
  PlaceValueLevelGameResult_Url = baseUrl + '/place-value-game-result';
  basicOperationsAddLevelGameResult_Url = baseUrl + '/basic-operation-add-game-result';
  basicOperationsSubtractionLevelGameResult_Url = baseUrl + '/basic-operation-sub-game-result';
  basicOperationsMultiplicationLevelGameResult_Url = baseUrl + '/basic-operation-mul-game-result';
  basicOperationsDivisionLevelGameResult_Url = baseUrl + '/basic-operation-div-game-result';



  constructor(private _http: HttpClient,
    ) { }

  // GetUserGameResult(SessionId: string) {
  //   return this._http.get(`${this.GetUserGameResultUrl}/${SessionId}`);
  // }



  // LETERACY
  LoadLetteringGameResultAndRating(SessionId: string) {
    return this._http.get(`${this.LetterLevelGameResult_Url}/${SessionId}`).pipe(
      map((response: any) => {
        return response?.letterData;
      })
    );;
  }

  LoadWordGameResultAndRating(SessionId: string) {
    return this._http.get(`${this.WordLevelGameResult_Url}/${SessionId}`).pipe(
      map((response: any) => {
        return response?.wordData;
      })
    );
  }

  LoadParagraphGameResultAndRating(SessionId: string) {
    return this._http.get(`${this.ParagraphLevelGameResult_Url}/${SessionId}`).pipe(
      map((response: any) => {
        return response?.paragraphData;
      })
    );
  }

  LoadStoryGameResultAndRating(SessionId: string) {
    return this._http.get(`${this.StoryLevelGameResult_Url}/${SessionId}`).pipe(
      map((response: any) => {
        return response?.storyData;
      })
    );
  }


  // NUMERACY
  LoadNumberRecognition_1_gameResult(SessionId: string) {
    return this._http.get(`${this.NumberRecognition_1_gameResult_Url}/${SessionId}`).pipe(
      map((response: any) => {
        return response?.numRecognitionData;
      })
    );
  }

  LoadNumberRecognition_2_gameResult(SessionId: string) {
    return this._http.get(`${this.NumberRecognition_2_gameResult_Url}/${SessionId}`).pipe(
      map((response: any) => {
        return response?.numRecognition2Data;
      })
    );
  }

  LoadNumberRecognition_3_gameResult(SessionId: string) {
    return this._http.get(`${this.NumberRecognition_3_gameResult_Url}/${SessionId}`).pipe(
      map((response: any) => {
        return response?.numRecognition3Data;
      })
    );
  }

  LoadPlaceValueGameResultAndRating(SessionId: string) {
    return this._http.get(`${this.PlaceValueLevelGameResult_Url}/${SessionId}`).pipe(
      map((response: any) => {
        return response?.placeValue;
      })
    );
  }


  LoadbasicOperationsAddGameResultAndRating(SessionId: string) {
    return this._http.get(`${this.basicOperationsAddLevelGameResult_Url}/${SessionId}`).pipe(
      map((response: any) => {
        return response?.basicOpAdd;
      })
    );
  }



  LoadbasicOperationsSubtractionGameResultAndRating(SessionId: string) {
    return this._http.get(`${this.basicOperationsSubtractionLevelGameResult_Url}/${SessionId}`).pipe(
      map((response: any) => {
        return response?.basicOpSub;
      })
    );
  }


  LoadbasicOperationsMultiplicationGameResultAndRating(SessionId: string) {
    return this._http.get(`${this.basicOperationsMultiplicationLevelGameResult_Url}/${SessionId}`).pipe(
      map((response: any) => {
        return response?.basicOpMul;
      })
    );
  }


  LoadbasicOperationsDivisionGameResultAndRating(SessionId: string) {
    return this._http.get(`${this.basicOperationsDivisionLevelGameResult_Url}/${SessionId}`).pipe(
      map((response: any) => {
        return response?.basicOpDiv;
      })
    );
  }

  

}
