import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { BasicOperationsSubtractionLevelResult } from './basic-operations-subtraction-level-result.model';

export const loadBasicOperationsSubtractionLevelResult = createAction(
  '[BasicOperationsSubtractionLevelResult/API] Load BasicOperationsSubtractionLevelResults',
  props<{ session_id: string }>()
);

export const loadBasicOperationsSubtractionLevelResultSuccess = createAction(
  '[BasicOperationsSubtractionLevelResult/API] Load BasicOperationsSubtractionLevelResults Success',
  props<{ basicOperationsSubtractionLevelResult: BasicOperationsSubtractionLevelResult[] }>()
);

export const loadBasicOperationsSubtractionLevelResultFailure = createAction(
  '[BasicOperationsSubtractionLevelResult/API] Load BasicOperationsSubtractionLevelResults Failure',
  props<{ error: any }>()
);


// export const loadBasicOperationsSubtractionLevelResults = createAction(
//   '[BasicOperationsSubtractionLevelResult/API] Load BasicOperationsSubtractionLevelResults', 
//   props<{ basicOperationsSubtractionLevelResults: BasicOperationsSubtractionLevelResult[] }>()
// );

// export const addBasicOperationsSubtractionLevelResult = createAction(
//   '[BasicOperationsSubtractionLevelResult/API] Add BasicOperationsSubtractionLevelResult',
//   props<{ basicOperationsSubtractionLevelResult: BasicOperationsSubtractionLevelResult }>()
// );

// export const upsertBasicOperationsSubtractionLevelResult = createAction(
//   '[BasicOperationsSubtractionLevelResult/API] Upsert BasicOperationsSubtractionLevelResult',
//   props<{ basicOperationsSubtractionLevelResult: BasicOperationsSubtractionLevelResult }>()
// );

// export const addBasicOperationsSubtractionLevelResults = createAction(
//   '[BasicOperationsSubtractionLevelResult/API] Add BasicOperationsSubtractionLevelResults',
//   props<{ basicOperationsSubtractionLevelResults: BasicOperationsSubtractionLevelResult[] }>()
// );

// export const upsertBasicOperationsSubtractionLevelResults = createAction(
//   '[BasicOperationsSubtractionLevelResult/API] Upsert BasicOperationsSubtractionLevelResults',
//   props<{ basicOperationsSubtractionLevelResults: BasicOperationsSubtractionLevelResult[] }>()
// );

// export const updateBasicOperationsSubtractionLevelResult = createAction(
//   '[BasicOperationsSubtractionLevelResult/API] Update BasicOperationsSubtractionLevelResult',
//   props<{ basicOperationsSubtractionLevelResult: Update<BasicOperationsSubtractionLevelResult> }>()
// );

// export const updateBasicOperationsSubtractionLevelResults = createAction(
//   '[BasicOperationsSubtractionLevelResult/API] Update BasicOperationsSubtractionLevelResults',
//   props<{ basicOperationsSubtractionLevelResults: Update<BasicOperationsSubtractionLevelResult>[] }>()
// );

// export const deleteBasicOperationsSubtractionLevelResult = createAction(
//   '[BasicOperationsSubtractionLevelResult/API] Delete BasicOperationsSubtractionLevelResult',
//   props<{ id: string }>()
// );

// export const deleteBasicOperationsSubtractionLevelResults = createAction(
//   '[BasicOperationsSubtractionLevelResult/API] Delete BasicOperationsSubtractionLevelResults',
//   props<{ ids: string[] }>()
// );

// export const clearBasicOperationsSubtractionLevelResults = createAction(
//   '[BasicOperationsSubtractionLevelResult/API] Clear BasicOperationsSubtractionLevelResults'
// );
