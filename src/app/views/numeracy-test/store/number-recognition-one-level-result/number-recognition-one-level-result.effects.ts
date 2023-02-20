import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Snackbar } from 'src/app/models/class/snackbar';
import { GameLevelResultAndRatingService } from 'src/app/services/game-level-result-and-rating.service';
import { NumberRecognitionOneService } from 'src/app/services/number-recognition/number-recognition-one.service';
import * as NumberRecognitionOneLevelResultActions from './number-recognition-one-level-result.actions';

@Injectable()
export class NumberRecognitionOneLevelResultEffects {
  loadNumberRecognitionOneLevelResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        NumberRecognitionOneLevelResultActions.loadNumberRecognitionOneLevelResult
      ),
      mergeMap((action: any) => {
        return this._gameLevelResultAndRatingSvc
          .LoadNumberRecognition_1_gameResult(action?.session_id)
          .pipe(
            map((response: any) => {
              // console.warn('response>>>: ', response);
              let x: any;
              if (response) {
                x =
                  NumberRecognitionOneLevelResultActions.loadNumberRecognitionOneLevelResultSuccess(
                    {
                      numberRecognitionOneLevelResult: response,
                    }
                  );
              } else {
                alert('No game started!!!');
                this._router.navigate(['/program-starter']);
              }
              return x;

              // return NumberRecognitionOneLevelResultActions.loadNumberRecognitionOneLevelResultSuccess({
              //   NumberRecognitionOneLevelResult: response,
              // });
            }),
            catchError((error: any) =>
              of(
                NumberRecognitionOneLevelResultActions.loadNumberRecognitionOneLevelResultFailure(
                  {
                    error,
                  }
                )
              )
            )
          );
      })
      // tap(() => this._router.navigate(['/practicals/ngrx/products']))
    );
  });

  
  // ADD NumberRecognitionOne LEVEL STAGE ONE
  addNumberRecognitionOneLevelStageOneResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(NumberRecognitionOneLevelResultActions.addNumberRecognitionOneLevelStageOneResult),
      mergeMap((action: any) => {
        
        return this._numberRecognitionOneSvc.SubmitResult(action.payload).pipe(
          map((response: any) => {
            if (response) {
              // console.warn('response: ', response);
              const successResponse = response?.message;
              const x = new Snackbar(successResponse, this._snackBar);
              x.successSnackbar();
              this._numberRecognitionOneSvc.sendAddNumberRecognitionOneLevelResultBehaviour(
                response
              );
            }
            return NumberRecognitionOneLevelResultActions.addNumberRecognitionOneLevelStageOneResultSuccess(
              { payload: response }
            );
          }),
          catchError((err: any) => {
            console.warn('Error: ', err);
            let successResponse = err?.error?.message;
            if (err?.error?.message) {
              successResponse = err?.error?.message;
            } else {
              successResponse = 'Test submission failed!, please try again';
            }
            const x = new Snackbar(successResponse, this._snackBar);
            x.errorSnackbar();
            return of(
              NumberRecognitionOneLevelResultActions.addNumberRecognitionOneLevelStageOneResultFailure({
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
    private _gameLevelResultAndRatingSvc: GameLevelResultAndRatingService,
    private _router: Router,
    private _numberRecognitionOneSvc: NumberRecognitionOneService,
    private _snackBar: MatSnackBar
  ) {}
}
