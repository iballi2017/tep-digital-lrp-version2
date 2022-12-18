import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { GameLevelResultAndRatingService } from 'src/app/services/game-level-result-and-rating.service';
import * as StoryLevelResultActions from './story-level-result.actions';

@Injectable()
export class StoryLevelResultEffects {
  loadStoryLevelResults$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StoryLevelResultActions.loadStoryLevelResults),
      mergeMap((action: any) =>
        this._gameLevelResultAndRatingSvc
          .LoadStoryGameResultAndRating(action?.session_id)
          .pipe(
            map((response: any) => {
              return StoryLevelResultActions.loadStoryLevelResultsSuccess({
                storyLevelResults: response,
              });
            }),
            catchError((error: any) =>
              of(
                StoryLevelResultActions.loadStoryLevelResultsFailure({
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
