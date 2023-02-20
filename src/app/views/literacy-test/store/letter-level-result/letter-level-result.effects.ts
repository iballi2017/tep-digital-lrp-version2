import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Snackbar } from 'src/app/models/class/snackbar';
import { GameLevelResultAndRatingService } from 'src/app/services/game-level-result-and-rating.service';
import { LetterStageOneService } from 'src/app/services/letter/letter-stage-one.service';
import { LetterStageThreeService } from 'src/app/services/letter/letter-stage-three.service';
import { LetterStageTwoService } from 'src/app/services/letter/letter-stage-two.service';
import * as fromLetterLevelResultActions from './letter-level-result.actions';

@Injectable()
export class LetterLevelResultEffects {
  // ADD LETTER LEVEL STAGE ONE
  addLetterLevelStageOneResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromLetterLevelResultActions.addLetterLevelStageOneResult),
      mergeMap((action: any) => {
        
        return this._letterStageOneSvc.SubmitResult(action.payload).pipe(
          map((response: any) => {
            if (response) {
              console.log('response: ', response);
              const successResponse = response?.message;
              const x = new Snackbar(successResponse, this._snackBar);
              x.successSnackbar();
              this._letterStageOneSvc.sendAddLetterLevelResultBehaviour(
                'Occupant added!'
              );
            }
            return fromLetterLevelResultActions.addLetterLevelStageOneResultSuccess(
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
              fromLetterLevelResultActions.addLetterLevelStageOneResultFailure({
                error: err,
              })
            );
          })
        );
      })
      // tap(() => this._router.navigate(['']))
    );
  });

  // ADD LETTER LEVEL STAGE TWO
  addLetterLevelStageTwoResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromLetterLevelResultActions.addLetterLevelStageTwoResult),
      mergeMap((action: any) => {
        
        return this._letterStageTwoSvc.SubmitResult(action.payload).pipe(
          map((response: any) => {
            if (response) {
              const successResponse = response?.message;
              const x = new Snackbar(successResponse, this._snackBar);
              x.successSnackbar();
              this._letterStageTwoSvc.sendAddLetterLevelResultBehaviour(
                'Occupant added!'
              );
            }
            return fromLetterLevelResultActions.addLetterLevelStageTwoResultSuccess(
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
              fromLetterLevelResultActions.addLetterLevelStageTwoResultFailure({
                error: err,
              })
            );
          })
        );
      })
      // tap(() => this._router.navigate(['']))
    );
  });

  // ADD LETTER LEVEL STAGE THREE
  addLetterLevelStageThreeResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromLetterLevelResultActions.addLetterLevelStageThreeResult),
      mergeMap((action: any) => {
        
        return this._letterStageThreeSvc.SubmitResult(action.payload).pipe(
          map((response: any) => {
            if (response) {
              const successResponse = response?.message;
              const x = new Snackbar(successResponse, this._snackBar);
              x.successSnackbar();
              this._letterStageThreeSvc.sendAddLetterLevelResultBehaviour(
                'Occupant added!'
              );
            }
            return fromLetterLevelResultActions.addLetterLevelStageThreeResultSuccess(
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
              fromLetterLevelResultActions.addLetterLevelStageThreeResultFailure(
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

  /* LOAD LETTER LEVEL RESULTS WITH RATINGS*/
  loadLetterLevelResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromLetterLevelResultActions.loadLetterLevelResult),
      mergeMap((action: any) =>
        this._gameLevelResultAndRatingSvc
          .LoadLetterGameResultAndRating(action?.session_id)
          .pipe(
            map((response: any) => {
              let x: any;
              if (response) {
                x = fromLetterLevelResultActions.loadLetterLevelResultSuccess({
                  letterLevelResult: response,
                });
              } else {
                alert('No game started!!!');
                this._router.navigate(['/program-starter']);
              }
              return x;

              // return fromLetterLevelResultActions.loadLetterLevelResultSuccess(
              //   {
              //     letterLevelResult: response,
              //   }
              // );
            }),
            catchError((error: any) =>
              of(
                fromLetterLevelResultActions.loadLetterLevelResultFailure({
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
    private _letterStageOneSvc: LetterStageOneService,
    private _letterStageTwoSvc: LetterStageTwoService,
    private _letterStageThreeSvc: LetterStageThreeService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {}
}
