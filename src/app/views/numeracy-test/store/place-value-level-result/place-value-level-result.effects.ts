import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
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

  constructor(
    private actions$: Actions,
    private _gameLevelResultAndRatingSvc: GameLevelResultAndRatingService,
    private _router: Router,
    private _PlaceValueSvc: PlaceValueService,
    private _snackBar: MatSnackBar
  ) {}
}
