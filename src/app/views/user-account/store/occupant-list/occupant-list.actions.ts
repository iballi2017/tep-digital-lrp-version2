import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Occupant } from './occupant-list.model';
import { IDeleteOccupant } from 'src/app/models/interface/occupant';

// ADD OCCUPANT
export const addOccupant = createAction(
  '[Occupant Add Component] Add Occupant',
  props<{ occupant: any }>()
);
export const addOccupantSuccess = createAction(
  '[Occupant Add Effect] Add Occupant Success',
  props<{ occupant: any }>()
);
export const addOccupantFailure = createAction(
  '[Occupant Add Effect] Add Occupant Failure',
  props<{ error: any }>()
);  

// LOAD OCCUPANT LIST ENDS
export const loadOccupantList = createAction(
  '[OccupantList/API] Load OccupantList'
);
export const loadOccupantListSuccess = createAction(
  '[OccupantList Effect] Load OccupantList Success',
  // props<{ occupantList: OccupantList[] }>()
  props<{ occupantList: any[] }>()
);
export const loadOccupantListFailure = createAction(
  '[OccupantList Effect] Load OccupantList Failure',
  props<{ error: any }>()
);
// LOAD OCCUPANT LIST ENDS

// LOAD SINGLE OCCUPANT BEGINS
export const loadSingleOccupant = createAction(
  '[Single Occupant Component] Load Occupants',
  props<{ id: string }>()
);

export const loadSingleOccupantSuccess = createAction(
  '[Single Product Load Effect] Load Single Product Success',
  props<{ selectedOccupant: Occupant }>()
);

export const loadSingleOccupantFailure = createAction(
  '[Single Occupant Load Effect] Load Single Occupant Failure',
  props<{ error: any }>()
);

// LOAD SINGLE OCCUPANT ENDS

// DELETE SINGLE OCCUPANT
export const deleteOccupant = createAction(
  '[OccupantList Component] Delete Occupant ',
  props<{ occ_id: IDeleteOccupant }>()
);
export const deleteOccupantSuccess = createAction(
  '[OccupantList Component] Delete Occupant Success',
  props<{ id: string }>()
);
export const deleteOccupantFailure = createAction(
  '[OccupantList Component] Delete Occupant Failure',
  props<{ error: any }>()
);

// export const addOccupantList = createAction(
//   '[OccupantList/API] Add OccupantList',
//   props<{ occupantList: OccupantList }>()
// );

// export const upsertOccupantList = createAction(
//   '[OccupantList/API] Upsert OccupantList',
//   props<{ occupantList: OccupantList }>()
// );

// export const addOccupantLists = createAction(
//   '[OccupantList/API] Add OccupantLists',
//   props<{ occupantLists: OccupantList[] }>()
// );

// export const upsertOccupantLists = createAction(
//   '[OccupantList/API] Upsert OccupantLists',
//   props<{ occupantLists: OccupantList[] }>()
// );

// export const updateOccupantList = createAction(
//   '[OccupantList/API] Update OccupantList',
//   props<{ occupantList: Update<OccupantList> }>()
// );

// export const updateOccupantLists = createAction(
//   '[OccupantList/API] Update OccupantLists',
//   props<{ occupantLists: Update<OccupantList>[] }>()
// );

// export const deleteOccupantList = createAction(
//   '[OccupantList/API] Delete OccupantList',
//   props<{ id: string }>()
// );

// export const deleteOccupantLists = createAction(
//   '[OccupantList/API] Delete OccupantLists',
//   props<{ ids: string[] }>()
// );

// export const clearOccupantLists = createAction(
//   '[OccupantList/API] Clear OccupantLists'
// );
