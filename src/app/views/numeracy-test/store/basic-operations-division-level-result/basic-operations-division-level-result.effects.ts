import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { BasicOperationsDivisionStageOneService } from 'src/app/services/basic-operations/division/basic-operations-division-stage-one.service';
import { GameLevelResultAndRatingService } from 'src/app/services/game-level-result-and-rating.service';
import * as BasicOperationsDivisionLevelResultActions from './basic-operations-division-level-result.actions';



@Injectable()
export class BasicOperationsDivisionLevelResultEffects {
  loadBasicOperationsDivisionLevelResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        BasicOperationsDivisionLevelResultActions.loadBasicOperationsDivisionLevelResult
      ),
      mergeMap((action: any) => {
        return this._gameLevelResultAndRatingSvc
          .LoadbasicOperationsAddGameResultAndRating(action?.session_id)
          .pipe(
            map((response: any) => {
              let x: any;
              if (response) {
                x =
                  BasicOperationsDivisionLevelResultActions.loadBasicOperationsDivisionLevelResultSuccess(
                    {
                      basicOperationsDivisionLevelResult: response,
                    }
                  );
              } else {
                alert('No game started!!!');
                this._router.navigate(['/program-starter']);
              }
              return x;

              // return BasicOperationsDivisionLevelResultActions.loadNumberRecognitionOneLevelResultSuccess({
              //   NumberRecognitionOneLevelResult: response,
              // });
            }),
            catchError((error: any) =>
              of(
                BasicOperationsDivisionLevelResultActions.loadBasicOperationsDivisionLevelResultFailure(
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
    private _basicOperationsDivisionStageOneSvc: BasicOperationsDivisionStageOneService,
    private _snackBar: MatSnackBar
  ) {}

}
