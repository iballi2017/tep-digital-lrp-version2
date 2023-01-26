import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Snackbar } from 'src/app/models/class/snackbar';
import { BasicOperationsDivisionStageOneService } from 'src/app/services/basic-operations/division/basic-operations-division-stage-one.service';
import { BasicOperationsDivisionStageTwoService } from 'src/app/services/basic-operations/division/basic-operations-division-stage-two.service';
import { GameLevelResultAndRatingService } from 'src/app/services/game-level-result-and-rating.service';
import * as BasicOperationsDivisionLevelResultActions from './basic-operations-division-level-result.actions';



@Injectable()
export class BasicOperationsDivisionLevelResultEffects {
  loadBasicOperationsDivisionLevelResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(
        BasicOperationsDivisionLevelResultActions.loadBasicOperationsDivisionLevelResult
      ),
      mergeMap((action: any) => {
        return this._gameLevelResultAndRatingSvc
          .LoadbasicOperationsAddGameResultAndRating(action?.session_id)
          .pipe(
            map((response: any) => {
              let x: any;
              if (response) {
                x =
                  BasicOperationsDivisionLevelResultActions.loadBasicOperationsDivisionLevelResultSuccess(
                    {
                      basicOperationsDivisionLevelResult: response,
                    }
                  );
              } else {
                alert('No game started!!!');
                this._router.navigate(['/program-starter']);
              }
              return x;

              // return BasicOperationsDivisionLevelResultActions.loadNumberRecognitionOneLevelResultSuccess({
              //   NumberRecognitionOneLevelResult: response,
              // });
            }),
            catchError((error: any) =>
              of(
                BasicOperationsDivisionLevelResultActions.loadBasicOperationsDivisionLevelResultFailure(
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

  
  // ADD BasicOperationsDivision LEVEL STAGE ONE
  addBasicOperationsDivisionLevelStageOneResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BasicOperationsDivisionLevelResultActions.addBasicOperationsDivisionLevelStageOneResult),
      mergeMap((action: any) => {
        console.group('action: ', action);
        return this._basicOperationsDivisionStageOneSvc.SubmitResult(action.payload).pipe(
          map((response: any) => {
            if (response) {
              // console.warn('response: ', response);
              const successResponse = response?.message;
              const x = new Snackbar(successResponse, this._snackBar);
              x.successSnackbar();
              this._basicOperationsDivisionStageOneSvc.sendBasicOperationsDivisionLevelResultBehaviour(
                'Occupant added!'
              );
            }
            return BasicOperationsDivisionLevelResultActions.addBasicOperationsDivisionLevelStageOneResultSuccess(
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
              BasicOperationsDivisionLevelResultActions.addBasicOperationsDivisionLevelStageOneResultFailure({
                error: err,
              })
            );
          })
        );
      })
      // tap(() => this._router.navigate(['']))
    );
  });


  // ADD BasicOperationsDivision LEVEL STAGE TWO
  addBasicOperationsDivisionLevelStageTwoResult$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BasicOperationsDivisionLevelResultActions.addBasicOperationsDivisionLevelStageTwoResult),
      mergeMap((action: any) => {
        console.group('action: ', action);
        return this._basicOperationsDivisionStageTwoSvc.SubmitResult(action.payload).pipe(
          map((response: any) => {
            if (response) {
              // console.warn('response: ', response);
              const successResponse = response?.message;
              const x = new Snackbar(successResponse, this._snackBar);
              x.successSnackbar();
              this._basicOperationsDivisionStageTwoSvc.sendBasicOperationsDivisionLevelResultBehaviour(
                'Occupant added!'
              );
            }
            return BasicOperationsDivisionLevelResultActions.addBasicOperationsDivisionLevelStageTwoResultSuccess(
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
              BasicOperationsDivisionLevelResultActions.addBasicOperationsDivisionLevelStageTwoResultFailure({
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
    private _basicOperationsDivisionStageOneSvc: BasicOperationsDivisionStageOneService,
    private _basicOperationsDivisionStageTwoSvc: BasicOperationsDivisionStageTwoService,
    private _snackBar: MatSnackBar
  ) {}

}
