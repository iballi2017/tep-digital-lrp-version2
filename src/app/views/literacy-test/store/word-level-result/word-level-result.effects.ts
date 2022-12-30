import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Snackbar } from 'src/app/models/class/snackbar';
import { GameLevelResultAndRatingService } from 'src/app/services/game-level-result-and-rating.service';
import { WordStageFourService } from 'src/app/services/word/word-stage-four.service';
import { WordStageOneService } from 'src/app/services/word/word-stage-one.service';
import { WordStageThreeService } from 'src/app/services/word/word-stage-three.service';
import { WordStageTwoService } from 'src/app/services/word/word-stage-two.service';
import * as fromWordLevelResultActions from './word-level-result.actions';

@Injectable()
export class WordLevelResultEffects {
  // ADD WORD LEVEL STAGE ONE
  addWordLevelStageOneResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromWordLevelResultActions.addWordLevelStageOneResult),
      mergeMap((action: any) => {
        console.group('action: ', action);
        return this._wordStageOneSvc.SubmitResult(action.payload).pipe(
          map((response: any) => {
            if (response) {
              const successResponse = response?.message;
              const x = new Snackbar(successResponse, this._snackBar);
              x.successSnackbar();
              this._wordStageOneSvc.sendAddWordLevelResultBehaviour(
                'Occupant added!'
              );
            }
            return fromWordLevelResultActions.addWordLevelStageOneResultSuccess(
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
              fromWordLevelResultActions.addWordLevelStageOneResultFailure({
                error: err,
              })
            );
          })
        );
      })
      // tap(() => this._router.navigate(['']))
    );
  });

  // ADD WORD LEVEL STAGE TWO
  addWordLevelStageTwoResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromWordLevelResultActions.addWordLevelStageTwoResult),
      mergeMap((action: any) => {
        console.group('action: ', action);
        return this._wordStageTwoSvc.SubmitResult(action.payload).pipe(
          map((response: any) => {
            if (response) {
              const successResponse = response?.message;
              const x = new Snackbar(successResponse, this._snackBar);
              x.successSnackbar();
              this._wordStageTwoSvc.sendAddWordLevelResultBehaviour(
                'Occupant added!'
              );
            }
            return fromWordLevelResultActions.addWordLevelStageTwoResultSuccess(
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
              fromWordLevelResultActions.addWordLevelStageTwoResultFailure({
                error: err,
              })
            );
          })
        );
      })
      // tap(() => this._router.navigate(['']))
    );
  });

  // ADD WORD LEVEL STAGE THREE
  addWordLevelStageThreeResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromWordLevelResultActions.addWordLevelStageThreeResult),
      mergeMap((action: any) => {
        console.group('action: ', action);
        return this._wordStageThreeSvc.SubmitResult(action.payload).pipe(
          map((response: any) => {
            if (response) {
              const successResponse = response?.message;
              const x = new Snackbar(successResponse, this._snackBar);
              x.successSnackbar();
              this._wordStageThreeSvc.sendAddWordLevelResultBehaviour(
                'Occupant added!'
              );
            }
            return fromWordLevelResultActions.addWordLevelStageThreeResultSuccess(
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
              fromWordLevelResultActions.addWordLevelStageThreeResultFailure({
                error: err,
              })
            );
          })
        );
      })
      // tap(() => this._router.navigate(['']))
    );
  });

  // ADD WORD LEVEL STAGE FOUR
  addWordLevelStageFourResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromWordLevelResultActions.addWordLevelStageFourResult),
      mergeMap((action: any) => {
        console.group('action: ', action);
        return this._wordStageFourSvc.SubmitResult(action.payload).pipe(
          map((response: any) => {
            if (response) {
              const successResponse = response?.message;
              const x = new Snackbar(successResponse, this._snackBar);
              x.successSnackbar();
              this._wordStageFourSvc.sendAddWordLevelResultBehaviour(
                'Occupant added!'
              );
            }
            return fromWordLevelResultActions.addWordLevelStageFourResultSuccess(
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
              fromWordLevelResultActions.addWordLevelStageFourResultFailure({
                error: err,
              })
            );
          })
        );
      })
      // tap(() => this._router.navigate(['']))
    );
  });

  /* LOAD WORD LEVEL RESULTS WITH RATINGS*/
  loadwordLevelResults$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromWordLevelResultActions.loadWordLevelResult),
      mergeMap((action: any) =>
        this._gameLevelResultAndRatingSvc
          .LoadWordGameResultAndRating(action?.session_id)
          .pipe(
            map((response: any) => {
              // console.warn('response: ', response);
              let x: any;
              if (response) {
                x = fromWordLevelResultActions.loadWordLevelResultSuccess({
                  wordLevelResults: response,
                });
              }else{
                alert("No game started!!!");
                this._router.navigate(['/program-starter'])
              }
              return x;
            }),
            catchError((error: any) =>
              of(
                fromWordLevelResultActions.loadWordLevelResultFailure({
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
    private _wordStageOneSvc: WordStageOneService,
    private _wordStageTwoSvc: WordStageTwoService,
    private _wordStageThreeSvc: WordStageThreeService,
    private _wordStageFourSvc: WordStageFourService,
    private _snackBar: MatSnackBar,
    private _router: Router
  ) {}
}
