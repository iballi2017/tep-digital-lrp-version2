import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-activity-launcher',
  templateUrl: './activity-launcher.component.html',
  styleUrls: ['./activity-launcher.component.scss']
})
export class ActivityLauncherComponent implements OnInit {
  @Output() onPlayBGSound = new EventEmitter();
  @Input()btnTitle!:string;
  // btnTitle = "Launch";

  constructor() { }

  ngOnInit(): void {
  }


  StartTestAndPlaySound() {
    this.onPlayBGSound.emit();
  }

}
