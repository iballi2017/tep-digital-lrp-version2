import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OccupantMessengerService {
  addOccupantBehaviour = new BehaviorSubject(false);
  constructor() {}

  sendAddOccupantBehaviour(Msg: any) {
    this.addOccupantBehaviour.next(Msg);
  }
  getAddOccupantBehaviour() {
    return this.addOccupantBehaviour.asObservable();
  }
}
