import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, catchError } from 'rxjs';
import { baseUrl } from 'src/app/config/api';
import { handleError } from 'src/app/helpers/errorHandler';
import {
  addSpeechTexts,
  addSpeechTextsSuccess,
} from 'src/app/views/literacy-test/store/speech-texts/speech-texts.actions';
import { SpeechTextsState } from 'src/app/views/literacy-test/store/speech-texts/speech-texts.reducer';


@Injectable({
  providedIn: 'root',
})
export class ParagraphStageFourService {
  addParagraphLevelResultBehaviour = new BehaviorSubject(false);
  StartGameUrl = baseUrl + '/start-game-session';
  SubmitGameStage_4_Url = baseUrl + '/submit-paragraph-stage-4';
  isStoppedSpeechRecog = false;
  public text = '';
  tempWords!: string;
  VoiceText: any;

  constructor(
    private _http: HttpClient,
  ) {}

  

  sendAddParagraphLevelResultBehaviour(Msg: any) {
    this.addParagraphLevelResultBehaviour.next(Msg);
  }
  getAddParagraphLevelResultBehaviour() {
    return this.addParagraphLevelResultBehaviour.asObservable();
  }



  GetExerciseTexts() {
    return exerciseTexts;
  }

  SubmitGameStageResult(_GameStageResult: any) {
    return this._http
      .post(`${this.SubmitGameStage_4_Url}`, _GameStageResult)
      .pipe(catchError(handleError));
  }
}

export const exerciseTexts = [
  {
    isDone: false,
    statement: [
      { text: 'my', isHide: true },
      { text: 'name', isHide: false },
      { text: 'is', isHide: false },
      { text: 'Ahmed', isHide: false },
    ],
    testKeys: [
      {
        name: 'no',
        isWrongChoice: false,
      },
      {
        name: 'have',
        isWrongChoice: false,
      },
      {
        name: 'my',
        isWrongChoice: false,
      },
    ],
  },
  {
    isDone: false,
    statement: [
      { text: 'i', isHide: false },
      { text: 'live', isHide: true },
      { text: 'in', isHide: false },
      { text: 'a', isHide: false },
      { text: 'big', isHide: false },
      { text: 'town', isHide: false },
    ],
    testKeys: [
      {
        name: 'live',
        isWrongChoice: false,
      },
      {
        name: 'is',
        isWrongChoice: false,
      },
      {
        name: 'not',
        isWrongChoice: false,
      },
    ],
  },
  {
    isDone: false,
    statement: [
      { text: 'i', isHide: false },
      { text: 'have', isHide: true },
      { text: 'three', isHide: false },
      { text: 'brothers', isHide: false },
      { text: 'and', isHide: true },
      { text: 'two', isHide: false },
      { text: 'sisters', isHide: false },
    ],
    testKeys: [
      {
        name: 'have',
        isWrongChoice: false,
      },
      {
        name: 'my',
        isWrongChoice: false,
      },
      {
        name: 'and',
        isWrongChoice: false,
      },
    ],
  },
  {
    isDone: false,
    statement: [
      { text: 'we', isHide: false },
      { text: 'all', isHide: true },
      { text: 'clean', isHide: false },
      { text: 'the', isHide: false },
      { text: 'house', isHide: false },
      { text: 'every', isHide: false },
      { text: 'morning', isHide: false },
      { text: 'before', isHide: true },
      { text: 'going', isHide: false },
      { text: 'out', isHide: false },
      { text: 'to', isHide: true },
      { text: 'the', isHide: false },
      { text: 'shop', isHide: false },
    ],
    testKeys: [
      {
        name: 'all',
        isWrongChoice: false,
      },
      {
        name: 'is',
        isWrongChoice: false,
      },
      {
        name: 'to',
        isWrongChoice: false,
      },
      {
        name: 'came',
        isWrongChoice: false,
      },
      {
        name: 'before',
        isWrongChoice: false,
      },
      {
        name: 'they',
        isWrongChoice: false,
      },
    ],
  },
  {
    isDone: false,
    // Today is a market day in the
    statement: [
      { text: 'today', isHide: false },
      { text: 'is', isHide: false },
      { text: 'a', isHide: false },
      { text: 'market', isHide: false },
      { text: 'day', isHide: false },
      { text: 'in', isHide: false },
      { text: 'the', isHide: false },
      { text: 'town', isHide: true },
      { text: 'I', isHide: false },
      { text: 'live, ', isHide: false },
      { text: 'we', isHide: true },
      { text: 'are', isHide: false },
      { text: 'going', isHide: false },
      { text: 'to', isHide: false },
      { text: 'have', isHide: false },
      { text: 'lots', isHide: false },
      { text: 'of', isHide: false },
      { text: 'fun', isHide: true },
      { text: 'today', isHide: false },
    ],
    testKeys: [
      {
        name: 'we',
        isWrongChoice: false,
      },
      {
        name: 'town',
        isWrongChoice: false,
      },
      {
        name: 'not',
        isWrongChoice: false,
      },
      {
        name: 'have',
        isWrongChoice: false,
      },
      {
        name: 'my',
        isWrongChoice: false,
      },
      {
        name: 'fun',
        isWrongChoice: false,
      },
    ],
  },
];
