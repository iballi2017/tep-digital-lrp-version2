import { addSpeechTexts, addSpeechTextsSuccess } from "src/app/views/literacy-test/store/speech-texts/speech-texts.actions";


export class SpeechToText {
  text: any;
  tempWords: any;
  store: any;
  constructor(store: any, text: any, tempWords: any) {
    this.tempWords = tempWords;
    this.text = text;
    this.store = store;
  }

  wordConcat() {
    this.store.dispatch(addSpeechTexts());
    this.text = this.text + ' ' + this.tempWords + ' ';
    console.warn("this.tempWords: ", this.tempWords)
    // if(this.tempWords){

    // }
    this.tempWords = '';
    this.store.dispatch(addSpeechTextsSuccess({ speechTexts: this.text.trim() }));
  }

  clear(){
    this.store.dispatch(addSpeechTexts());    
    this.text = '';
    this.store.dispatch(addSpeechTextsSuccess({ speechTexts: null }));
  }
}
