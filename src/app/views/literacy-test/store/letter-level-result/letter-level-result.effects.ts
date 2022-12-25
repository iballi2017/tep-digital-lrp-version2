import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Snackbar } from 'src/app/models/class/snackbar';
import { GameLevelResultAndRatingService } from 'src/app/services/game-level-result-and-rating.service';
import { LetterStageOneService } from 'src/app/services/letter/letter-stage-one.service';
import * as fromLetterLevelResultActions from './letter-level-result.actions';

@Injectable()
export class LetterLevelResultEffects {
  addLetterLevelResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromLetterLevelResultActions.addLetterLevelResult),
      mergeMap((action: any) => {
        console.group("action: ", action)
        return this._letterStageOneSvc.SubmitResult(action.payload).pipe(
          map((response: any) => {
            if (response) {
              const successResponse = response?.message;
              const x = new Snackbar(successResponse, this._snackBar);
              x.successSnackbar();
              this._letterStageOneSvc.sendAddLetterLevelResultBehaviour(
                'Occupant added!'
              );
            }
            return fromLetterLevelResultActions.addLetterLevelResultSuccess({ payload: response });
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
              fromLetterLevelResultActions.addLetterLevelResultFailure({ error: err })
            );
          })
        )
      }
      )
      // tap(() => this._router.navigate(['']))
    );
  });


  loadLetterLevelResults$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromLetterLevelResultActions.loadLetterLevelResults),
      mergeMap((action: any) =>
        this._gameLevelResultAndRatingSvc.LoadLetterGameResultAndRating(action?.session_id).pipe(
          map((response: any) =>
          // fromLetterLevelResultActions.loadOccupantListSuccess({ occupantList })
          {
            // let occupantList = occupantListArray?.data.map((item: any) => {
            //   return {
            //     ...item,
            //     id: item.occ_id,
            //   };
            // });
            return fromLetterLevelResultActions.loadLetterLevelResultsSuccess({
              letterLevelResults: response,
            });
          }
          ),
          catchError((error: any) =>
            of(fromLetterLevelResultActions.loadLetterLevelResultsFailure({ error }))
          )
        )
      )
      // tap(() => this._router.navigate(['/practicals/ngrx/products']))
    );
  });

  constructor(
    private actions$: Actions,
    private _gameLevelResultAndRatingSvc: GameLevelResultAndRatingService,
    private _letterStageOneSvc: LetterStageOneService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) { }
}
