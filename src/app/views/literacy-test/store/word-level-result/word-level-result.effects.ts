import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { GameLevelResultAndRatingService } from 'src/app/services/game-level-result-and-rating.service';
import * as WordLevelResultActions from './word-level-result.actions';

@Injectable()
export class WordLevelResultEffects {
  loadSwordLevelResults$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(WordLevelResultActions.loadWordLevelResults),
      mergeMap((action: any) =>
        this._gameLevelResultAndRatingSvc
          .LoadWordGameResultAndRating(action?.session_id)
          .pipe(
            map((response: any) => {
              return WordLevelResultActions.loadWordLevelResultsSuccess({
                wordLevelResults: response,
              });
            }),
            catchError((error: any) =>
              of(
                WordLevelResultActions.loadWordLevelResultsFailure({
                  error,
                })
              )
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
