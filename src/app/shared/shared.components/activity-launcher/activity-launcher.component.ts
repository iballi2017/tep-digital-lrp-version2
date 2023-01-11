import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-activity-launcher',
  templateUrl: './activity-launcher.component.html',
  styleUrls: ['./activity-launcher.component.scss']
})
export class ActivityLauncherComponent implements OnInit {
  @Output()onPlayBGSound = new EventEmitter();
  @Output()onStopBGSound = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  StartTestAndPlaySound(){
    this.onPlayBGSound.emit();
  }
  StopTestAndPlaySound(){
    this.onStopBGSound.emit();
  }

}
