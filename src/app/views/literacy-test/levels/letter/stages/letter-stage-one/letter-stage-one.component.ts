import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlaySound } from 'src/app/models/class/play-sound';
import { PlaySoundService } from 'src/app/services/play-sound.service';
import { BackgroundNote } from 'src/assets/data/background-sound.voicenote';

@Component({
  selector: 'app-letter-stage-one',
  templateUrl: './letter-stage-one.component.html',
  styleUrls: ['./letter-stage-one.component.scss'],
})
export class LetterStageOneComponent implements OnInit, OnDestroy {
  isLaunchTest: boolean = true;

  constructor(private _playSoundSvc: PlaySoundService) {}

  ngOnInit(): void {}

  playBGSound() {
    this._playSoundSvc.playLiteracyBGSound();
    this.isLaunchTest = true;
  }

  stopBGSound() {
    this._playSoundSvc.stopLiteracyBGSound();
  }

  ngOnDestroy(): void {
    this._playSoundSvc.stopLiteracyBGSound();
  }
}
