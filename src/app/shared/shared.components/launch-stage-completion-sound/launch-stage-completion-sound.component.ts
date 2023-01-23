import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-launch-stage-completion-sound',
  templateUrl: './launch-stage-completion-sound.component.html',
  styleUrls: ['./launch-stage-completion-sound.component.scss']
})
export class LaunchStageCompletionSoundComponent implements OnInit {
  @Output() onPlayBGSound = new EventEmitter();
  @Input() btnTitle!: string;
  // btnTitle = "Launch";

  constructor() { }

  ngOnInit(): void {
  }


  StartTestAndPlaySound() {
    this.onPlayBGSound.emit();
  }
}
