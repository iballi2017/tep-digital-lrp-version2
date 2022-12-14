import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, mergeMap, of, tap } from 'rxjs';
import { Snackbar } from 'src/app/models/class/snackbar';
import { IdentityService } from 'src/app/services/identity.service';
import * as fromProfileInformationActions from './profile-information.actions';



@Injectable()
export class ProfileInformationEffects {

  loadProfileInformation$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromProfileInformationActions.loadProfileInformations),
      mergeMap((action: any) =>
        this._identitySvc.getUserById().pipe(
          map((ProfileInformation: any) => {
            return fromProfileInformationActions.loadProfileInformationsSuccess({
              profileInformation: ProfileInformation?.data[0],
            });
          }
          ),
          catchError((error: any) =>
            of(fromProfileInformationActions.loadProfileInformationsFailure({ error }))
          )
        )
      ),
    );
  });


  updateProfileInformation$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromProfileInformationActions.updateProfileInformation),
      concatMap((action: any) =>
        this._identitySvc.UpdateUserDetails(action.profileInformation)
      ),
      tap((response: any) => {
        this._router.navigate(['/account']);
        const x = new Snackbar("Personal information updated!", this._snackBar);
        x.successSnackbar();
      }
      )
    );
  },
    { dispatch: false });


  constructor(private actions$: Actions, private _identitySvc: IdentityService, private _router: Router,
    private _snackBar: MatSnackBar) { }
}
