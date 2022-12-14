import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { OccupantService } from 'src/app/services/occupant.service';
import * as fromOccupantListActions from './occupant-list.actions';



@Injectable()
export class OccupantListEffects {

  loadOccupantList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromOccupantListActions.loadOccupantList),
      mergeMap((action: any) =>
        this._occupantSvc.LoadOccupants().pipe(
          map((occupantList: any) =>
          // fromOccupantListActions.loadOccupantListSuccess({ occupantList })
          {
            console.group(occupantList)
            return fromOccupantListActions.loadOccupantListSuccess({
              occupantList: occupantList?.data,
            });
          }
          ),
          catchError((error: any) =>
            of(fromOccupantListActions.loadOccupantListFailure({ error }))
          )
        )
      ),
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
      ),
      // tap(() => this._router.navigate(['/practicals/ngrx/products']))
    );
  });

  constructor(private actions$: Actions, private _occupantSvc: OccupantService, private _router: Router) { }
}
