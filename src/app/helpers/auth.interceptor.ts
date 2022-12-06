import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _authenticationSvc: AuthenticationService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const key: any = '6mPsbhhN6ZGGWgwzn6wX';
    request = this.AddDeveloper_Key(request, key);
    return next.handle(request);
  }

  AddDeveloper_Key(request: HttpRequest<any>, key: string) {
    return request.clone({
      setHeaders: { Developer_Key: key },
    });
  }
}
