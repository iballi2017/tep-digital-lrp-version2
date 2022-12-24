import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { Snackbar } from 'src/app/models/class/snackbar';
import { OccupantMessengerService } from 'src/app/services/occupant-messenger.service';
import { OccupantService } from 'src/app/services/occupant.service';
import * as fromOccupantListActions from './occupant-list.actions';

@Injectable()
export class OccupantListEffects {
  createOccupantList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromOccupantListActions.addOccupant),
      mergeMap((action: any) => {
        console.group("action: ", action)
        return this._occupantSvc.AddOccupant(action.occupant).pipe(
          map((response: any) => {
            if (response) {
              const successResponse = response?.message;
              const x = new Snackbar(successResponse, this._snackBar);
              x.successSnackbar();
              this._occupantMessengerSvc.sendAddOccupantBehaviour(
                'Occupant added!'
              );
            }
            return fromOccupantListActions.addOccupantSuccess({
              occupant: {
                ...action.occupant,
                id: new Date().getTime().toString(),
              },
            });
          }),
          catchError((err: any) => {
            console.warn('Error: ', err);
            let successResponse = err?.error?.message;
            if (err?.error?.message) {
              successResponse = err?.error?.message;
            } else {
              successResponse = 'Failed to create occupant, please try again';
            }
            const x = new Snackbar(successResponse, this._snackBar);
            x.errorSnackbar();
            return of(
              fromOccupantListActions.addOccupantFailure({ error: err })
            );
          })
        )
      }
      )
      // tap(() => this._router.navigate(['']))
    );
  });

  loadOccupantList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromOccupantListActions.loadOccupantList),
      mergeMap((action: any) => {
        console.log("action: ", action)
        return this._occupantSvc.LoadOccupants().pipe(
          map((occupantListArray: any) =>
          // fromOccupantListActions.loadOccupantListSuccess({ occupantList })
          {
            let occupantList = occupantListArray?.data.map((item: any) => {
              return {
                ...item,
                id: item.occ_id,
              };
            });
            return fromOccupantListActions.loadOccupantListSuccess({
              occupantList,
            });
          }
          ),
          catchError((error: any) =>
            of(fromOccupantListActions.loadOccupantListFailure({ error }))
          )
        )
      }
      )
      // tap(() => this._router.navigate(['/practicals/ngrx/products']))
    );
  });

  loadSingleOccupant$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromOccupantListActions.loadSingleOccupant),
      mergeMap((action: any) =>
        this._occupantSvc.GetSingleOccupant(action.id).pipe(
          map((occupant: any) =>
            fromOccupantListActions.loadSingleOccupantSuccess({
              selectedOccupant: occupant?.data[0],
            })
          ),
          catchError((error: any) =>
            of(fromOccupantListActions.loadSingleOccupantFailure({ error }))
          )
        )
      )
      // tap(() => this._router.navigate(['/practicals/ngrx/products']))
    );
  });

  deleteSingleOccupant$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromOccupantListActions.deleteOccupant),
      mergeMap((action: any) =>
        this._occupantSvc.RemoveOccupant(action.occ_id).pipe(
          map((occupant: any) => {
            if (occupant) {
              this._router.navigate(['/account']);
            }
            return fromOccupantListActions.deleteOccupantSuccess({
              id: action.occ_id,
            });
          }),
          catchError((error: any) => {
            return of(fromOccupantListActions.deleteOccupantFailure({ error }));
          })
        )
      )
      // tap(() => this._router.navigate(['/practicals/ngrx/products']))
    );
  });

  constructor(
    private actions$: Actions,
    private _occupantSvc: OccupantService,
    private _router: Router,
    private _occupantMessengerSvc: OccupantMessengerService,
    private _snackBar: MatSnackBar
  ) { }
}
