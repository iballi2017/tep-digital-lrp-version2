import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Snackbar } from 'src/app/models/class/snackbar';
import { GameLevelResultAndRatingService } from 'src/app/services/game-level-result-and-rating.service';
import { PlaceValueService } from 'src/app/services/place-value/place-value.service';
import * as PlaceValueLevelResultActions from './place-value-level-result.actions';

@Injectable()
export class PlaceValueLevelResultEffects {
  loadPlaceValueLevelResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        PlaceValueLevelResultActions.loadPlaceValueLevelResult
      ),
      mergeMap((action: any) => {
        return this._gameLevelResultAndRatingSvc
          .LoadPlaceValueGameResultAndRating(action?.session_id)
          .pipe(
            map((response: any) => {
              let x: any;
              if (response) {
                x =
                  PlaceValueLevelResultActions.loadPlaceValueLevelResultSuccess(
                    {
                      placeValueLevelResult: response,
                    }
                  );
              } else {
                alert('No game started!!!');
                this._router.navigate(['/program-starter']);
              }
              return x;

              // return PlaceValueLevelResultActions.loadNumberRecognitionOneLevelResultSuccess({
              //   NumberRecognitionOneLevelResult: response,
              // });
            }),
            catchError((error: any) =>
              of(
                PlaceValueLevelResultActions.loadPlaceValueLevelResultFailure(
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


  

  /* ADD PLACE_VALUE LEVEL STAGE ONE RESULT */
  addNumberRecognitionTwoLevelStageOneResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PlaceValueLevelResultActions.addPlaceValueLevelStageOneResult),
      mergeMap((action: any) => {
        console.group('action: ', action);
        return this._PlaceValueSvc.SubmitResult(action.payload).pipe(
          map((response: any) => {
            if (response) {
              // console.warn('response: ', response);
              const successResponse = response?.message;
              const x = new Snackbar(successResponse, this._snackBar);
              x.successSnackbar();
              this._PlaceValueSvc.sendAddPlaceValueLevelResultBehaviour(
                'Occupant added!'
              );
            }
            return PlaceValueLevelResultActions.addPlaceValueLevelStageOneResultSuccess(
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
              PlaceValueLevelResultActions.addPlaceValueLevelStageOneResultFailure({
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
    private _PlaceValueSvc: PlaceValueService,
    private _snackBar: MatSnackBar
  ) {}
}
