import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Snackbar } from 'src/app/models/class/snackbar';
import { GameLevelResultAndRatingService } from 'src/app/services/game-level-result-and-rating.service';
import { NumberRecognitionThreeService } from 'src/app/services/number-recognition/number-recognition-three.service';
import * as NumberRecognitionThreeLevelResultActions from './number-recognition-three-level-result.actions';

@Injectable()
export class NumberRecognitionThreeLevelResultEffects {
  loadNumberRecognitionThreeLevelResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        NumberRecognitionThreeLevelResultActions.loadNumberRecognitionThreeLevelResult
      ),
      mergeMap((action: any) => {
        return this._gameLevelResultAndRatingSvc
          .LoadNumberRecognition_1_gameResult(action?.session_id)
          .pipe(
            map((response: any) => {
              let x: any;
              if (response) {
                x =
                  NumberRecognitionThreeLevelResultActions.loadNumberRecognitionThreeLevelResultSuccess(
                    {
                      numberRecognitionThreeLevelResult: response,
                    }
                  );
              } else {
                alert('No game started!!!');
                this._router.navigate(['/program-starter']);
              }
              return x;

              // return NumberRecognitionThreeLevelResultActions.loadNumberRecognitionThreeLevelResultSuccess({
              //   NumberRecognitionThreeLevelResult: response,
              // });
            }),
            catchError((error: any) =>
              of(
                NumberRecognitionThreeLevelResultActions.loadNumberRecognitionThreeLevelResultFailure(
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
  /* ADD NUMBER_RECOGNITION_THREE LEVEL STAGE ONE RESULT */
  addNumberRecognitionThreeLevelStageOneResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(NumberRecognitionThreeLevelResultActions.addNumberRecognitionThreeLevelStageOneResult),
      mergeMap((action: any) => {
        
        return this._numberRecognitionThreeSvc.SubmitResult(action.payload).pipe(
          map((response: any) => {
            if (response) {
              // console.warn('response: ', response);
              const successResponse = response?.message;
              const x = new Snackbar(successResponse, this._snackBar);
              x.successSnackbar();
              this._numberRecognitionThreeSvc.sendAddNumberRecognitionThreeLevelResultBehaviour(
                response
              );
            }
            return NumberRecognitionThreeLevelResultActions.addNumberRecognitionThreeLevelStageOneResultSuccess(
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
              NumberRecognitionThreeLevelResultActions.addNumberRecognitionThreeLevelStageOneResultFailure({
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
    private _numberRecognitionThreeSvc: NumberRecognitionThreeService,
    private _snackBar: MatSnackBar
  ) { }
}
