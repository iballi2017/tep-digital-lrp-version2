import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError } from 'rxjs';
import { baseUrl } from 'src/app/config/api';
import { handleError } from 'src/app/helpers/errorHandler';
import { SpeechToText } from 'src/app/models/class/speech-to-text';
import { addSpeechTexts, addSpeechTextsFailure, addSpeechTextsSuccess } from 'src/app/views/literacy-test/store/speech-texts/speech-texts.actions';
import { SpeechTextsState } from 'src/app/views/literacy-test/store/speech-texts/speech-texts.reducer';

declare var webkitSpeechRecognition: any;
@Injectable({
  providedIn: 'root'
})
export class ParagraphStageOneService {
  StartGameUrl = baseUrl + '/start-game-session';
  SubmitGameStage_1_Url = baseUrl + '/submit-paragraph-stage-1';
  recognition = new webkitSpeechRecognition();
  isStoppedSpeechRecog = false;
  public text = '';
  tempWords: any;
  VoiceText: any;

  constructor(private _http: HttpClient,
    private store: Store<SpeechTextsState>,) { }

  init() {
    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';

    this.recognition.addEventListener('result', (e: any) => {
      console.warn("e: ", e)
      const transcript = Array.from(e.results)
        .map((result: any) => result[0])
        .map((result: any) => result.transcript)
        .join('');
      this.tempWords = transcript;
      this.VoiceText = this.text;
      this.GetVoiceText();
    });
  }

  GetVoiceText() {
    console.group("this.VoiceText: ", this.VoiceText)
    return this.VoiceText;
  }

  start() {
    this.isStoppedSpeechRecog = false;
    this.recognition.start();
    this.recognition.addEventListener('end', (condition: any) => {
      if (this.isStoppedSpeechRecog) {
        this.recognition.stop();

      } else {
        this.wordConcat();
        this.recognition.start();
      }
    });
  }

  stop() {
    this.isStoppedSpeechRecog = true;
    // this.wordConcat();
    this.recognition.stop();

  }

  clear() {
    this.text = '';
    this.store.dispatch(addSpeechTextsSuccess({ speechTexts: null }));
    // this.ngRedux.dispatch({
    //   type: ADD_SPEECH_TO_TEXT_SUCCESS,
    //   payload: null,
    // });
  }

  wordConcat() {
    let x = new SpeechToText(this.store, this.text, this.tempWords);
    x.wordConcat();
  }

  GetExerciseTexts() {
    return exerciseTexts;
  }

  SubmitGameStageResult(_GameStageResult: any) {
    return this._http
      .post(`${this.SubmitGameStage_1_Url}`, _GameStageResult)
      .pipe(catchError(handleError));
  }
}


export const exerciseTexts = [
  {
    text: 'this is a rat',
    uiText: 'This is a Rat.',
    isDone: false,
  },
  {
    text: 'this is a cat',
    uiText: 'This is a Cat.',
    isDone: false,
  },
  {
    text: 'cats eat rats',
    uiText: 'Cats eat Rats.',
    isDone: false,
  },
  {
    text: 'rats do not play with cats',
    uiText: 'Rats do not play with Cats.',
    isDone: false,
  },
];
