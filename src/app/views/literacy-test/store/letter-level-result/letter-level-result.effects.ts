import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { GameLevelResultAndRatingService } from 'src/app/services/game-level-result-and-rating.service';
import * as LetterLevelResultActions from './letter-level-result.actions';

@Injectable()
export class LetterLevelResultEffects {
  loadLetterLevelResults$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LetterLevelResultActions.loadLetterLevelResults),
      mergeMap((action: any) =>
        this._gameLevelResultAndRatingSvc.LoadLetterGameResultAndRating(action?.session_id).pipe(
          map((response: any) =>
            // LetterLevelResultActions.loadOccupantListSuccess({ occupantList })
            {
              // let occupantList = occupantListArray?.data.map((item: any) => {
              //   return {
              //     ...item,
              //     id: item.occ_id,
              //   };
              // });
              return LetterLevelResultActions.loadLetterLevelResultsSuccess({
                letterLevelResults: response,
              });
            }
          ),
          catchError((error: any) =>
            of(LetterLevelResultActions.loadLetterLevelResultsFailure({ error }))
          )
        )
      )
      // tap(() => this._router.navigate(['/practicals/ngrx/products']))
    );
  });

  constructor(
    private actions$: Actions,
    private _gameLevelResultAndRatingSvc: GameLevelResultAndRatingService
  ) {}
}
