import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Snackbar } from 'src/app/models/class/snackbar';
import { GameLevelResultAndRatingService } from 'src/app/services/game-level-result-and-rating.service';
import { ParagraphStageFourService } from 'src/app/services/paragraph/paragraph-stage-four.service';
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

  
  // ADD PARAGRAPH LEVEL STAGE TWO
  addParagraphLevelStageFourResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ParagraphLevelResultActions.addParagraphLevelStageFourResult),
      mergeMap((action: any) => {
        console.group('action: ', action);
        return this._paragraphStageFourSvc.SubmitGameStageResult(action.payload).pipe(
          map((response: any) => {
            if (response) {
              const successResponse = response?.message;
              const x = new Snackbar(successResponse, this._snackBar);
              x.successSnackbar();
              this._paragraphStageFourSvc.sendAddParagraphLevelResultBehaviour(
                'Occupant added!'
              );
            }
            return ParagraphLevelResultActions.addParagraphLevelStageFourResultSuccess(
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
              ParagraphLevelResultActions.addParagraphLevelStageFourResultFailure({
                error: err,
              })
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
    private _paragraphStageFourSvc: ParagraphStageFourService,
    private _snackBar: MatSnackBar
  ) {}
}
