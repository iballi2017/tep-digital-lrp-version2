import { Injectable } from '@angular/core';
import {
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  routeBehaviorSubject = new BehaviorSubject(false);
  Subscriptions: Subscription[] = [];
  constructor(private _router: Router) {}

  ngOnInit() {
    this.onCheckRouteEvents();
  }

  sendRouteBehaviorSubject(msg: any) {
    this.routeBehaviorSubject.next(msg);
  }

  onCheckRouteEvents() {
    let subscription = this._router.events.subscribe({
      next: (event: any) => {
        if (event instanceof NavigationStart) {
          // Show progress spinner or progress bar
          console.log('event: ', event);
          //
        }

        if (event instanceof NavigationEnd) {
          // Hide progress spinner or progress bar
          // console.log("event: ", event)
          let currentRoute = event.url;
          console.log('currentRoute: ', currentRoute);
          //
          // this._messengerSvc.sendOpenSideNavitionMessageBehaviorSubjet(false);
        }

        if (event instanceof NavigationError) {
          // Hide progress spinner or progress bar

          // Present error to user
          console.log(event.error);
        }
      },
      error: (err: any) => {
        console.warn('Error: ', err);
      },
    });
    this.Subscriptions.push(subscription);
  }
}
