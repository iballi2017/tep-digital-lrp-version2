import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Snackbar } from 'src/app/models/class/snackbar';
import { GameLevelResultAndRatingService } from 'src/app/services/game-level-result-and-rating.service';
import { NumberRecognitionTwoService } from 'src/app/services/number-recognition/number-recognition-two.service';
import * as NumberRecognitionTwoLevelResultActions from './number-recognition-two-level-result.actions';



@Injectable()
export class NumberRecognitionTwoLevelResultEffects {
  loadNumberRecognitionTwoLevelResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        NumberRecognitionTwoLevelResultActions.loadNumberRecognitionTwoLevelResult
      ),
      mergeMap((action: any) => {
        return this._gameLevelResultAndRatingSvc
          .LoadNumberRecognition_1_gameResult(action?.session_id)
          .pipe(
            map((response: any) => {
              let x: any;
              if (response) {
                x =
                  NumberRecognitionTwoLevelResultActions.loadNumberRecognitionTwoLevelResultSuccess(
                    {
                      numberRecognitionTwoLevelResult: response,
                    }
                  );
              } else {
                alert('No game started!!!');
                this._router.navigate(['/program-starter']);
              }
              return x;

              // return NumberRecognitionTwoLevelResultActions.loadNumberRecognitionTwoLevelResultSuccess({
              //   NumberRecognitionTwoLevelResult: response,
              // });
            }),
            catchError((error: any) =>
              of(
                NumberRecognitionTwoLevelResultActions.loadNumberRecognitionTwoLevelResultFailure(
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


  // ADD NumberRecognitionTwo LEVEL STAGE ONE
  addNumberRecognitionTwoLevelStageOneResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(NumberRecognitionTwoLevelResultActions.addNumberRecognitionTwoLevelStageOneResult),
      mergeMap((action: any) => {
        console.group('action: ', action);
        return this._numberRecognitionTwoSvc.SubmitResult(action.payload).pipe(
          map((response: any) => {
            if (response) {
              // console.warn('response: ', response);
              const successResponse = response?.message;
              const x = new Snackbar(successResponse, this._snackBar);
              x.successSnackbar();
              this._numberRecognitionTwoSvc.sendAddNumberRecognitionTwoLevelResultBehaviour(
                'Occupant added!'
              );
            }
            return NumberRecognitionTwoLevelResultActions.addNumberRecognitionTwoLevelStageOneResultSuccess(
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
              NumberRecognitionTwoLevelResultActions.addNumberRecognitionTwoLevelStageOneResultFailure({
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
    private _numberRecognitionTwoSvc: NumberRecognitionTwoService,
    private _snackBar: MatSnackBar
  ) {}
}
