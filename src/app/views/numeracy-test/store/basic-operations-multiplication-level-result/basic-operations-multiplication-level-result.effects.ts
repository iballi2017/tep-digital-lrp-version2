import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { BasicOperationsMultiplicationStageOneService } from 'src/app/services/basic-operations/multiplication/basic-operations-multiplication-stage-one.service';
import { GameLevelResultAndRatingService } from 'src/app/services/game-level-result-and-rating.service';
import * as BasicOperationsMultiplicationLevelResultActions from './basic-operations-multiplication-level-result.actions';

@Injectable()
export class BasicOperationsMultiplicationLevelResultEffects {
  loadBasicOperationsMultiplicationLevelResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        BasicOperationsMultiplicationLevelResultActions.loadBasicOperationsMultiplicationLevelResult
      ),
      mergeMap((action: any) => {
        return this._gameLevelResultAndRatingSvc
          .LoadbasicOperationsAddGameResultAndRating(action?.session_id)
          .pipe(
            map((response: any) => {
              let x: any;
              if (response) {
                x =
                  BasicOperationsMultiplicationLevelResultActions.loadBasicOperationsMultiplicationLevelResultSuccess(
                    {
                      basicOperationsMultiplicationLevelResult: response,
                    }
                  );
              } else {
                alert('No game started!!!');
                this._router.navigate(['/program-starter']);
              }
              return x;

              // return BasicOperationsMultiplicationLevelResultActions.loadNumberRecognitionOneLevelResultSuccess({
              //   NumberRecognitionOneLevelResult: response,
              // });
            }),
            catchError((error: any) =>
              of(
                BasicOperationsMultiplicationLevelResultActions.loadBasicOperationsMultiplicationLevelResultFailure(
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
    private _basicOperationsMultiplicationStageOneSvc: BasicOperationsMultiplicationStageOneService,
    private _snackBar: MatSnackBar
  ) {}
}
