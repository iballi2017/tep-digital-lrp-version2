import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { GameLevelResultAndRatingService } from 'src/app/services/game-level-result-and-rating.service';
import * as StoryLevelResultActions from './story-level-result.actions';

@Injectable()
export class StoryLevelResultEffects {
  loadStoryLevelResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StoryLevelResultActions.loadStoryLevelResult),
      mergeMap((action: any) =>
        this._gameLevelResultAndRatingSvc
          .LoadStoryGameResultAndRating(action?.session_id)
          .pipe(
            map((response: any) => {
              let x: any;
              if (response) {
                x = StoryLevelResultActions.loadStoryLevelResultSuccess({
                  storyLevelResult: response,
                });
              } else {
                alert('No game started!!!');
                this._router.navigate(['/program-starter']);
              }
              return x;

              // return StoryLevelResultActions.loadStoryLevelResultSuccess({
              //   storyLevelResult: response,
              // });
            }),
            catchError((error: any) =>
              of(
                StoryLevelResultActions.loadStoryLevelResultFailure({
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
    private _gameLevelResultAndRatingSvc: GameLevelResultAndRatingService,
    private _router: Router
  ) {}
}
