import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Snackbar } from 'src/app/models/class/snackbar';
import { BasicOperationsMultiplicationStageOneService } from 'src/app/services/basic-operations/multiplication/basic-operations-multiplication-stage-one.service';
import { BasicOperationsMultiplicationStageThreeService } from 'src/app/services/basic-operations/multiplication/basic-operations-multiplication-stage-three.service';
import { BasicOperationsMultiplicationStageTwoService } from 'src/app/services/basic-operations/multiplication/basic-operations-multiplication-stage-two.service';
import { GameLevelResultAndRatingService } from 'src/app/services/game-level-result-and-rating.service';
import * as BasicOperationsMultiplicationLevelResultActions from './basic-operations-multiplication-level-result.actions';

@Injectable()
export class BasicOperationsMultiplicationLevelResultEffects {
  loadBasicOperationsMultiplicationLevelResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        BasicOperationsMultiplicationLevelResultActions.loadBasicOperationsMultiplicationLevelResult
      ),
      mergeMap((action: any) => {
        return this._gameLevelResultAndRatingSvc
          .LoadbasicOperationsAddGameResultAndRating(action?.session_id)
          .pipe(
            map((response: any) => {
              let x: any;
              if (response) {
                x =
                  BasicOperationsMultiplicationLevelResultActions.loadBasicOperationsMultiplicationLevelResultSuccess(
                    {
                      basicOperationsMultiplicationLevelResult: response,
                    }
                  );
              } else {
                alert('No game started!!!');
                this._router.navigate(['/program-starter']);
              }
              return x;

              // return BasicOperationsMultiplicationLevelResultActions.loadNumberRecognitionOneLevelResultSuccess({
              //   NumberRecognitionOneLevelResult: response,
              // });
            }),
            catchError((error: any) =>
              of(
                BasicOperationsMultiplicationLevelResultActions.loadBasicOperationsMultiplicationLevelResultFailure(
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
  
  
  // ADD BasicOperationsMultiplication LEVEL STAGE ONE
  addBasicOperationsMultiplicationLevelStageOneResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BasicOperationsMultiplicationLevelResultActions.addBasicOperationsMultiplicationLevelStageOneResult),
      mergeMap((action: any) => {
        return this._basicOperationsMultiplicationStageOneSvc.SubmitResult(action.payload).pipe(
          map((response: any) => {
            if (response) {
              // console.warn('response: ', response);
              const successResponse = response?.message;
              const x = new Snackbar(successResponse, this._snackBar);
              x.successSnackbar();
              this._basicOperationsMultiplicationStageOneSvc.sendBasicOperationsMultiplicationLevelResultBehaviour(
                response
              );
            }
            return BasicOperationsMultiplicationLevelResultActions.addBasicOperationsMultiplicationLevelStageOneResultSuccess(
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
              BasicOperationsMultiplicationLevelResultActions.addBasicOperationsMultiplicationLevelStageOneResultFailure({
                error: err,
              })
            );
          })
        );
      })
      // tap(() => this._router.navigate(['']))
    );
  });


  // ADD BasicOperationsMultiplication LEVEL STAGE TWO
  addBasicOperationsMultiplicationLevelStageTwoResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BasicOperationsMultiplicationLevelResultActions.addBasicOperationsMultiplicationLevelStageTwoResult),
      mergeMap((action: any) => {
        
        return this._basicOperationsMultiplicationStageTwoSvc.SubmitResult(action.payload).pipe(
          map((response: any) => {
            if (response) {
              // console.warn('response: ', response);
              const successResponse = response?.message;
              const x = new Snackbar(successResponse, this._snackBar);
              x.successSnackbar();
              this._basicOperationsMultiplicationStageTwoSvc.sendBasicOperationsMultiplicationLevelResultBehaviour(
                'Occupant added!'
              );
            }
            return BasicOperationsMultiplicationLevelResultActions.addBasicOperationsMultiplicationLevelStageTwoResultSuccess(
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
              BasicOperationsMultiplicationLevelResultActions.addBasicOperationsMultiplicationLevelStageTwoResultFailure({
                error: err,
              })
            );
          })
        );
      })
      // tap(() => this._router.navigate(['']))
    );
  });


  // ADD BasicOperationsMultiplication LEVEL STAGE THREE
  addBasicOperationsMultiplicationLevelStageThreeResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BasicOperationsMultiplicationLevelResultActions.addBasicOperationsMultiplicationLevelStageThreeResult),
      mergeMap((action: any) => {
        
        return this._basicOperationsMultiplicationStageThreeSvc.SubmitResult(action.payload).pipe(
          map((response: any) => {
            if (response) {
              // console.warn('response: ', response);
              const successResponse = response?.message;
              const x = new Snackbar(successResponse, this._snackBar);
              x.successSnackbar();
              this._basicOperationsMultiplicationStageThreeSvc.sendBasicOperationsMultiplicationLevelResultBehaviour(
                'Occupant added!'
              );
            }
            return BasicOperationsMultiplicationLevelResultActions.addBasicOperationsMultiplicationLevelStageThreeResultSuccess(
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
              BasicOperationsMultiplicationLevelResultActions.addBasicOperationsMultiplicationLevelStageThreeResultFailure({
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
    private _basicOperationsMultiplicationStageOneSvc: BasicOperationsMultiplicationStageOneService,
    private _basicOperationsMultiplicationStageTwoSvc: BasicOperationsMultiplicationStageTwoService,
    private _basicOperationsMultiplicationStageThreeSvc: BasicOperationsMultiplicationStageThreeService,
    private _snackBar: MatSnackBar
  ) {}
}
