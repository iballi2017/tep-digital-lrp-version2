import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType,
  HttpErrorResponse,
} from '@angular/common/http';
import {
  BehaviorSubject,
  filter,
  Observable,
  throwError,
  tap,
  switchMap,
  take,
  catchError,
} from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private IsRefreshing = false;
  private RefreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );
  constructor(
    private _authenticationSvc: AuthenticationService,
    private _router: Router
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this._authenticationSvc.isLogin()) {
      const token: any = localStorage.getItem('token');
      request = this.AddToken(request, token);
    }
    return next.handle(request).pipe(
      tap((event: any) => {
        if (event.type === HttpEventType.Response) {
          // console.warn('EventBody: ', event.body);
        }
      }),
      catchError((err) => {
        if (err instanceof HttpErrorResponse && err.status === 401) {
          // auto logout if 401 response returned from api
          // localStorage.clear();
          return this.Handle401Error(request, next);
        }
        //  const error = err.error.message || err.statusText;
        const errormgs = {
          ErrorCode: err.status,
          Message: err.message,
          Response: err.error,
        };
        if (errormgs?.Response?.error == 'Expired token') {
          this._router.navigate(['/auth']);
        }
        // return throwError(errormgs);
        return throwError(() => err);
      })
    );
  }

  AddToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
  }

  private Handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.IsRefreshing) {
      this.IsRefreshing = true;
      this.RefreshTokenSubject.next(null);

      return this._authenticationSvc
        .RefreshToken(this._authenticationSvc.getRefreshToken())
        .pipe(
          switchMap((token: any) => {
            this.IsRefreshing = false;
            // this.RefreshTokenSubject.next(token.jwt);
            // return next.handle(this.AddToken(request, token.jwt));
            this.RefreshTokenSubject.next(token);
            return next.handle(this.AddToken(request, token));
          })
        );
    } else {
      return this.RefreshTokenSubject.pipe(
        filter((token) => token != null),
        take(1),
        switchMap((jwt: any) => {
          return next.handle(this.AddToken(request, jwt));
        })
      );
    }
  }
}
