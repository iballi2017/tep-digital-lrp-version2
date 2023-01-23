import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaunchGameService {
  launchGameBehaviorSubject = new BehaviorSubject<any>(false);
  constructor() { }

  sendLaunchGameBehaviorSubject(msg: any) {
    this.launchGameBehaviorSubject.next(msg)
  }
}
