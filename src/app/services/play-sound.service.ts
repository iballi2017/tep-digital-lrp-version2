import { Injectable } from '@angular/core';
import { BackgroundNote } from 'src/assets/data/background-sound.voicenote';
import { PlaySound } from '../models/class/play-sound';

@Injectable({
  providedIn: 'root',
})
export class PlaySoundService {
  isLaunchTest: boolean = false;
  literacySound = BackgroundNote.Literacy_Note;
  numeracySound = BackgroundNote.Numeracy_Note;
  _PlayLiteracyBGSound = new PlaySound(this.literacySound);
  _PlayNumeracyBGSound = new PlaySound(this.numeracySound);

  constructor() {}

  playLiteracyBGSound() {
    this._PlayLiteracyBGSound.playBGSound();
  }
  playNumeracyBGSound() {
    this._PlayNumeracyBGSound.playBGSound();
  }

  stopLiteracyBGSound() {
    this._PlayLiteracyBGSound.stopSound();
  }
  stopNumeracyBGSound() {
    this._PlayNumeracyBGSound.stopSound();
  }
}
