import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { BasicOperationsSubtractionStageOneService } from 'src/app/services/basic-operations/subtraction/basic-operations-subtraction-stage-one.service';
import { GameLevelResultAndRatingService } from 'src/app/services/game-level-result-and-rating.service';
import * as BasicOperationsSubtractionLevelResultActions from './basic-operations-subtraction-level-result.actions';

@Injectable()
export class BasicOperationsSubtractionLevelResultEffects {
  loadBasicOperationsSubtractionLevelResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        BasicOperationsSubtractionLevelResultActions.loadBasicOperationsSubtractionLevelResult
      ),
      mergeMap((action: any) => {
        return this._gameLevelResultAndRatingSvc
          .LoadbasicOperationsAddGameResultAndRating(action?.session_id)
          .pipe(
            map((response: any) => {
              let x: any;
              if (response) {
                x =
                  BasicOperationsSubtractionLevelResultActions.loadBasicOperationsSubtractionLevelResultSuccess(
                    {
                      basicOperationsSubtractionLevelResult: response,
                    }
                  );
              } else {
                alert('No game started!!!');
                this._router.navigate(['/program-starter']);
              }
              return x;

              // return BasicOperationsSubtractionLevelResultActions.loadNumberRecognitionOneLevelResultSuccess({
              //   NumberRecognitionOneLevelResult: response,
              // });
            }),
            catchError((error: any) =>
              of(
                BasicOperationsSubtractionLevelResultActions.loadBasicOperationsSubtractionLevelResultFailure(
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
    private _basicOperationsSubtractionStageOneSvc: BasicOperationsSubtractionStageOneService,
    private _snackBar: MatSnackBar
  ) {}
}
