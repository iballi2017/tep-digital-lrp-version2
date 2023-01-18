import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { PlaceValueLevelResult } from './place-value-level-result.model';

export const loadPlaceValueLevelResult = createAction(
  '[PlaceValueLevelResult/API] Load PlaceValueLevelResults',
  props<{ session_id: string }>()
);

export const loadPlaceValueLevelResultSuccess = createAction(
  '[PlaceValueLevelResult/API] Load PlaceValueLevelResults Success',
  props<{
    placeValueLevelResult: PlaceValueLevelResult[];
  }>()
);

export const loadPlaceValueLevelResultFailure = createAction(
  '[PlaceValueLevelResult/API] Load PlaceValueLevelResults Failure',
  props<{ error: any }>()
);


// export const loadPlaceValueLevelResults = createAction(
//   '[PlaceValueLevelResult/API] Load PlaceValueLevelResults', 
//   props<{ placeValueLevelResults: PlaceValueLevelResult[] }>()
// );

// export const addPlaceValueLevelResult = createAction(
//   '[PlaceValueLevelResult/API] Add PlaceValueLevelResult',
//   props<{ placeValueLevelResult: PlaceValueLevelResult }>()
// );

// export const upsertPlaceValueLevelResult = createAction(
//   '[PlaceValueLevelResult/API] Upsert PlaceValueLevelResult',
//   props<{ placeValueLevelResult: PlaceValueLevelResult }>()
// );

// export const addPlaceValueLevelResults = createAction(
//   '[PlaceValueLevelResult/API] Add PlaceValueLevelResults',
//   props<{ placeValueLevelResults: PlaceValueLevelResult[] }>()
// );

// export const upsertPlaceValueLevelResults = createAction(
//   '[PlaceValueLevelResult/API] Upsert PlaceValueLevelResults',
//   props<{ placeValueLevelResults: PlaceValueLevelResult[] }>()
// );

// export const updatePlaceValueLevelResult = createAction(
//   '[PlaceValueLevelResult/API] Update PlaceValueLevelResult',
//   props<{ placeValueLevelResult: Update<PlaceValueLevelResult> }>()
// );

// export const updatePlaceValueLevelResults = createAction(
//   '[PlaceValueLevelResult/API] Update PlaceValueLevelResults',
//   props<{ placeValueLevelResults: Update<PlaceValueLevelResult>[] }>()
// );

// export const deletePlaceValueLevelResult = createAction(
//   '[PlaceValueLevelResult/API] Delete PlaceValueLevelResult',
//   props<{ id: string }>()
// );

// export const deletePlaceValueLevelResults = createAction(
//   '[PlaceValueLevelResult/API] Delete PlaceValueLevelResults',
//   props<{ ids: string[] }>()
// );

// export const clearPlaceValueLevelResults = createAction(
//   '[PlaceValueLevelResult/API] Clear PlaceValueLevelResults'
// );
