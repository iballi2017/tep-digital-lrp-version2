import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Snackbar } from 'src/app/models/class/snackbar';
import { BasicOperationsSubtractionStageOneService } from 'src/app/services/basic-operations/subtraction/basic-operations-subtraction-stage-one.service';
import { BasicOperationsSubtractionStageTwoService } from 'src/app/services/basic-operations/subtraction/basic-operations-subtraction-stage-two.service';
import { GameLevelResultAndRatingService } from 'src/app/services/game-level-result-and-rating.service';
import * as BasicOperationsSubtractionLevelResultActions from './basic-operations-subtraction-level-result.actions';

@Injectable()
export class BasicOperationsSubtractionLevelResultEffects {
  loadBasicOperationsSubtractionLevelResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        BasicOperationsSubtractionLevelResultActions.loadBasicOperationsSubtractionLevelResult
      ),
      mergeMap((action: any) => {
        return this._gameLevelResultAndRatingSvc
          .LoadbasicOperationsAddGameResultAndRating(action?.session_id)
          .pipe(
            map((response: any) => {
              let x: any;
              if (response) {
                x =
                  BasicOperationsSubtractionLevelResultActions.loadBasicOperationsSubtractionLevelResultSuccess(
                    {
                      basicOperationsSubtractionLevelResult: response,
                    }
                  );
              } else {
                alert('No game started!!!');
                this._router.navigate(['/program-starter']);
              }
              return x;

              // return BasicOperationsSubtractionLevelResultActions.loadBasicOperationsSubtractionLevelResultSuccess({
              //   BasicOperationsSubtractionLevelResult: response,
              // });
            }),
            catchError((error: any) =>
              of(
                BasicOperationsSubtractionLevelResultActions.loadBasicOperationsSubtractionLevelResultFailure(
                  {
                    error,
                  }
                )
              )
            )
          );
      })
      // tap(() => this._router.navigate(['/practicals/ngrx/products']))
    );
  });


  // ADD BasicOperationsSubtraction LEVEL STAGE ONE
  addBasicOperationsSubtractionLevelStageOneResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BasicOperationsSubtractionLevelResultActions.addBasicOperationsSubtractionLevelStageOneResult),
      mergeMap((action: any) => {
        console.group('action: ', action);
        return this._basicOperationsSubtractionStageOneSvc.SubmitResult(action.payload).pipe(
          map((response: any) => {
            if (response) {
              // console.warn('response: ', response);
              const successResponse = response?.message;
              const x = new Snackbar(successResponse, this._snackBar);
              x.successSnackbar();
              this._basicOperationsSubtractionStageOneSvc.sendBasicOperationsSubtractionLevelResultBehaviour(
                'Occupant added!'
              );
            }
            return BasicOperationsSubtractionLevelResultActions.addBasicOperationsSubtractionLevelStageOneResultSuccess(
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
              BasicOperationsSubtractionLevelResultActions.addBasicOperationsSubtractionLevelStageOneResultFailure({
                error: err,
              })
            );
          })
        );
      })
      // tap(() => this._router.navigate(['']))
    );
  });


  // ADD BasicOperationsSubtraction LEVEL STAGE TWO
  addBasicOperationsSubtractionLevelStageTwoResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BasicOperationsSubtractionLevelResultActions.addBasicOperationsSubtractionLevelStageTwoResult),
      mergeMap((action: any) => {
        console.group('action: ', action);
        return this._basicOperationsSubtractionStageTwoSvc.SubmitResult(action.payload).pipe(
          map((response: any) => {
            if (response) {
              // console.warn('response: ', response);
              const successResponse = response?.message;
              const x = new Snackbar(successResponse, this._snackBar);
              x.successSnackbar();
              this._basicOperationsSubtractionStageTwoSvc.sendBasicOperationsSubtractionLevelResultBehaviour(
                'Occupant added!'
              );
            }
            return BasicOperationsSubtractionLevelResultActions.addBasicOperationsSubtractionLevelStageTwoResultSuccess(
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
              BasicOperationsSubtractionLevelResultActions.addBasicOperationsSubtractionLevelStageTwoResultFailure({
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
    private _basicOperationsSubtractionStageOneSvc: BasicOperationsSubtractionStageOneService,
    private _basicOperationsSubtractionStageTwoSvc: BasicOperationsSubtractionStageTwoService,
    private _snackBar: MatSnackBar
  ) { }
}
