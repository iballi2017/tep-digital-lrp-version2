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
  stageCompletionSound = BackgroundNote.StageCompletion_Note;
  levelCompletionSound = BackgroundNote.LevelCompletion_Note;
  _PlayLiteracyBGSound = new PlaySound(this.literacySound);
  _PlayNumeracyBGSound = new PlaySound(this.numeracySound);
  _PlayStageCompletionSound = new PlaySound(this.stageCompletionSound, 1, false);
  _PlayLevelCompletionSound = new PlaySound(this.levelCompletionSound, 1, false);

  constructor() {}

  playLiteracyBGSound() {
    this._PlayLiteracyBGSound.playBGSound();
  }
  playNumeracyBGSound() {
    this._PlayNumeracyBGSound.playBGSound();
  }
  playStageCompletionSound() {
    this._PlayStageCompletionSound.playBGSound();
  }
  playLevelCompletionSound() {
    this._PlayLevelCompletionSound.playBGSound();
  }

  stopLiteracyBGSound() {
    this._PlayLiteracyBGSound.stopSound();
  }
  stopNumeracyBGSound() {
    this._PlayNumeracyBGSound.stopSound();
  }
  stopStageCompletionSound() {
    this._PlayStageCompletionSound.stopSound();
  }
  stopLevelCompletionSound() {
    this._PlayLevelCompletionSound.stopSound();
  }
}
