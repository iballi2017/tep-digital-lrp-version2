import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlaySound } from 'src/app/models/class/play-sound';
import { BackgroundNote } from 'src/assets/data/background-sound.voicenote';

@Component({
  selector: 'app-letter-stage-one',
  templateUrl: './letter-stage-one.component.html',
  styleUrls: ['./letter-stage-one.component.scss']
})
export class LetterStageOneComponent implements OnInit, OnDestroy {
  isLaunchTest: boolean = false;
  sound = BackgroundNote.Literacy_Note;
  _PlayBGSound = new PlaySound(this.sound);

  constructor() { }

  ngOnInit(): void {
  }

  playBGSound() {
    this._PlayBGSound.playBGSound();
    // this.isLaunchTest = true;
  }

  stopBGSound() {
    this._PlayBGSound.stopSound();
    // this.isLaunchTest = true;
  }

  ngOnDestroy(): void {
    console.warn("leave");
    this._PlayBGSound.stopSound();
    console.warn("left");
  }
}
