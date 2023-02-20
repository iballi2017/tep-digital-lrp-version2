import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Snackbar } from 'src/app/models/class/snackbar';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ForgotPasswordService } from 'src/app/services/forgot-password.service';
import * as ForgotPasswordActions from './forgot-password.actions';

@Injectable()
export class ForgotPasswordEffects {
  sendForgotPasswordAccountEmail$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ForgotPasswordActions.sendForgotPasswordEmailAddress),
      mergeMap((action: any) => {
        console.group('action: ', action);
        return this._forgotPasswordSvc
          .SendRegisteredEmail(action.emailAddress)
          .pipe(
            map((response: any) => {
              if (response) {
                const successResponse = response?.message;
                const x = new Snackbar(successResponse, this._snackBar);
                x.successSnackbar();
                this._forgotPasswordSvc.SetSendRegisteredEmailBehaviourSubject(
                  'Email address sent!'
                );
              }
              return ForgotPasswordActions.sendForgotPasswordEmailAddressSuccess(
                {
                  sendForgotPasswordEmailAddressResponseMessage:
                    response.message,
                }
              );
            }),
            catchError((err: any) => {
              console.warn('Error: ', err);
              console.group('Error: ', err);
              // let successResponse = err?.error?.message;
              let successResponse: any;
              if (err?.error?.error?.message) {
                successResponse = err?.error?.error?.message;
              } else if (err?.error?.message) {
                successResponse = err?.error?.message;
              } else {
                successResponse = 'Request failed, please try again';
              }
              const x = new Snackbar(successResponse, this._snackBar);
              x.errorSnackbar();
              return of(
                ForgotPasswordActions.sendForgotPasswordEmailAddressFailure({
                  error: err,
                })
              );
            })
          );
      })
      // tap(() => this._router.navigate(['']))
    );
  });

  updatePassword$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ForgotPasswordActions.updatePassword),
      mergeMap((action: any) => {
        console.group('action: ', action);
        return this._authSvc.resetUserPassword(action.payload).pipe(
          map((response: any) => {
            if (response) {
              const successResponse = response?.message;
              const x = new Snackbar(successResponse, this._snackBar);
              x.successSnackbar();
              this._authSvc.sendUpdateUserPasswordBehaviorSubject(
                'Password reset successful!'
              );
              this._router.navigate(['/auth']);
            }
            return ForgotPasswordActions.updatePasswordSuccess({
              updatePasswordResponseMessage: response.message,
            });
          }),
          catchError((err: any) => {
            console.warn('Error: ', err);
            console.group('Error: ', err);
            // let successResponse = err?.error?.message;
            let successResponse: any;
            if (err?.error?.error?.message) {
              successResponse = err?.error?.error?.message;
            } else if (err?.error?.message) {
              successResponse = err?.error?.message;
            } else {
              successResponse = 'Request failed, please try again';
            }
            const x = new Snackbar(successResponse, this._snackBar);
            x.errorSnackbar();
            return of(
              ForgotPasswordActions.updatePasswordFailure({
                error: err,
              })
            );
          })
        );
      })
      // tap(() => this._router.navigate(['']))
    );
  });

  constructor(
    private actions$: Actions,
    private _forgotPasswordSvc: ForgotPasswordService,
    private _authSvc: AuthenticationService,
    private _snackBar: MatSnackBar,
    private _router: Router
  ) {}
}
