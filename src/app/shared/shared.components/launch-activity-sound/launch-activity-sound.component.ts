import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-launch-activity-sound',
  templateUrl: './launch-activity-sound.component.html',
  styleUrls: ['./launch-activity-sound.component.scss']
})
export class LaunchActivitySoundComponent implements OnInit {
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
