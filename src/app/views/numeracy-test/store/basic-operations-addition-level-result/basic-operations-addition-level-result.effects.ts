import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { BasicOperationsAdditionStageOneService } from 'src/app/services/basic-operations/addition/basic-operations-addition-stage-one.service';
import { GameLevelResultAndRatingService } from 'src/app/services/game-level-result-and-rating.service';
import * as BasicOperationsAdditionLevelResultActions from './basic-operations-addition-level-result.actions';

@Injectable()
export class BasicOperationsAdditionLevelResultEffects {
  loadNumberRecognitionOneLevelResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        BasicOperationsAdditionLevelResultActions.loadBasicOperationsAdditionLevelResult
      ),
      mergeMap((action: any) => {
        return this._gameLevelResultAndRatingSvc
          .LoadbasicOperationsAddGameResultAndRating(action?.session_id)
          .pipe(
            map((response: any) => {
              let x: any;
              if (response) {
                x =
                  BasicOperationsAdditionLevelResultActions.loadBasicOperationsAdditionLevelResultSuccess(
                    {
                      basicOperationsAdditionLevelResult: response,
                    }
                  );
              } else {
                alert('No game started!!!');
                this._router.navigate(['/program-starter']);
              }
              return x;

              // return BasicOperationsAdditionLevelResultActions.loadNumberRecognitionOneLevelResultSuccess({
              //   NumberRecognitionOneLevelResult: response,
              // });
            }),
            catchError((error: any) =>
              of(
                BasicOperationsAdditionLevelResultActions.loadBasicOperationsAdditionLevelResultFailure(
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
    private _basicOperationsAdditionStageOneSvc: BasicOperationsAdditionStageOneService,
    private _snackBar: MatSnackBar
  ) {}
}
