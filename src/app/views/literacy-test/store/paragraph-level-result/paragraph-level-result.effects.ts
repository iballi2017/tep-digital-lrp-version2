import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { GameLevelResultAndRatingService } from 'src/app/services/game-level-result-and-rating.service';
import * as ParagraphLevelResultActions from './paragraph-level-result.actions';

@Injectable()
export class ParagraphLevelResultEffects {
  loadParagrapLevelResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ParagraphLevelResultActions.loadParagraphLevelResult),
      mergeMap((action: any) =>
        this._gameLevelResultAndRatingSvc
          .LoadParagraphGameResultAndRating(action?.session_id)
          .pipe(
            map((response: any) => {
              let x: any;
              if (response) {
                x = ParagraphLevelResultActions.loadParagraphLevelResultSuccess(
                  {
                    paragraphLevelResult: response,
                  }
                );
              } else {
                alert('No game started!!!');
                this._router.navigate(['/program-starter']);
              }
              return x;

              // return ParagraphLevelResultActions.loadParagraphLevelResultSuccess({
              //   paragraphLevelResult: response,
              // });
            }),
            catchError((error: any) =>
              of(
                ParagraphLevelResultActions.loadParagraphLevelResultFailure({
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
