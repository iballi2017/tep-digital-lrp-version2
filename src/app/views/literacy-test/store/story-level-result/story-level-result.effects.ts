import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Snackbar } from 'src/app/models/class/snackbar';
import { GameLevelResultAndRatingService } from 'src/app/services/game-level-result-and-rating.service';
import { StoryStageOneService } from 'src/app/services/story/story-stage-one.service';
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

  // ADD PARAGRAPH LEVEL STAGE ONE
  addStoryLevelStageOneResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StoryLevelResultActions.addStoryLevelStageOneResult),
      mergeMap((action: any) => {
        
        return this._storyStageOneSvc
          .SubmitResult(action.payload)
          .pipe(
            map((response: any) => {
              if (response) {
                const successResponse = response?.message;
                const x = new Snackbar(successResponse, this._snackBar);
                x.successSnackbar();
                this._storyStageOneSvc.sendAddStoryLevelResultBehaviour(
                  response
                );
              }
              return StoryLevelResultActions.addStoryLevelStageOneResultSuccess(
                { payload: response }
              );
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
                StoryLevelResultActions.addStoryLevelStageOneResultFailure(
                  {
                    error: err,
                  }
                )
              );
            })
          );
      })
      // tap(() => this._router.navigate(['']))
    );
  });

  
  constructor(
    private actions$: Actions,
    private _gameLevelResultAndRatingSvc: GameLevelResultAndRatingService,
    private _router: Router,
    private _storyStageOneSvc: StoryStageOneService,
    private _snackBar: MatSnackBar
  ) {}
}
