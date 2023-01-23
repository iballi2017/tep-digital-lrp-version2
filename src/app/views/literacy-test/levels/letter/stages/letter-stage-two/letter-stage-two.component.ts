import { Component, OnInit } from '@angular/core';
import { LaunchGameService } from 'src/app/services/launch-game.service';
import { PlaySoundService } from 'src/app/services/play-sound.service';

@Component({
  selector: 'app-letter-stage-two',
  templateUrl: './letter-stage-two.component.html',
  styleUrls: ['./letter-stage-two.component.scss']
})
export class LetterStageTwoComponent implements OnInit {

  isLaunchTest!: boolean;
  btnTitle = "Launch";
  constructor(private _playSoundSvc: PlaySoundService, private _launchGameSvc: LaunchGameService) { }

  ngOnInit(): void {
    this._launchGameSvc.launchGameBehaviorSubject.subscribe((msg: any) => {
      if (msg) {
        this.isLaunchTest = msg
      }
    })
  }

  playBGSound() {
    this._playSoundSvc.playLiteracyBGSound();
    this._launchGameSvc.sendLaunchGameBehaviorSubject(true)
  }

  stopBGSound() {
    this._playSoundSvc.stopLiteracyBGSound();
  }

  ngOnDestroy(): void {
    this._playSoundSvc.stopLiteracyBGSound();
    this._launchGameSvc.sendLaunchGameBehaviorSubject(false)
  }
}
