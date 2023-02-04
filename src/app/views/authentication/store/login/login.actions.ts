import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Login } from './login.model';

export const loadLogins = createAction(
  '[Login/API] Load Logins', 
  props<{ logins: Login[] }>()
);

export const addLogin = createAction(
  '[Login/API] Add Login',
  props<{ login: Login }>()
);

export const upsertLogin = createAction(
  '[Login/API] Upsert Login',
  props<{ login: Login }>()
);

export const addLogins = createAction(
  '[Login/API] Add Logins',
  props<{ logins: Login[] }>()
);

export const upsertLogins = createAction(
  '[Login/API] Upsert Logins',
  props<{ logins: Login[] }>()
);

export const updateLogin = createAction(
  '[Login/API] Update Login',
  props<{ login: Update<Login> }>()
);

export const updateLogins = createAction(
  '[Login/API] Update Logins',
  props<{ logins: Update<Login>[] }>()
);

export const deleteLogin = createAction(
  '[Login/API] Delete Login',
  props<{ id: string }>()
);

export const deleteLogins = createAction(
  '[Login/API] Delete Logins',
  props<{ ids: string[] }>()
);

export const clearLogins = createAction(
  '[Login/API] Clear Logins'
);
