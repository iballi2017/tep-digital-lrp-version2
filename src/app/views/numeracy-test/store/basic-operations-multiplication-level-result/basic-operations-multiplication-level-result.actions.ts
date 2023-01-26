import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { BasicOperationsMultiplicationLevelResult } from './basic-operations-multiplication-level-result.model';
import { ActivityAnswer } from 'src/app/models/interface/game';

export const loadBasicOperationsMultiplicationLevelResult = createAction(
  '[BasicOperationsMultiplicationLevelResult/API] Load BasicOperationsMultiplicationLevelResults',
  props<{ session_id: string }>()
);

export const loadBasicOperationsMultiplicationLevelResultSuccess = createAction(
  '[BasicOperationsMultiplicationLevelResult/API] Load BasicOperationsMultiplicationLevelResults Success',
  props<{
    basicOperationsMultiplicationLevelResult: BasicOperationsMultiplicationLevelResult[];
  }>()
);

export const loadBasicOperationsMultiplicationLevelResultFailure = createAction(
  '[BasicOperationsMultiplicationLevelResult/API] Load BasicOperationsMultiplicationLevelResults Failure',
  props<{ error: any }>()
);



// ADD BasicOperationsMultiplicationLevelStageOneResult
export const addBasicOperationsMultiplicationLevelStageOneResult = createAction(
  '[BasicOperationsMultiplication Stage-one Activity] Add BasicOperationsMultiplication Stage One Result',
  props<{ payload: ActivityAnswer }>()
);
export const addBasicOperationsMultiplicationLevelStageOneResultSuccess = createAction(
  '[BasicOperationsMultiplication Level Result Effect] Add BasicOperationsMultiplication Stage One Result Success',
  props<{ payload: any }>()
);
export const addBasicOperationsMultiplicationLevelStageOneResultFailure = createAction(
  '[BasicOperationsMultiplication Level Result Effect] Add BasicOperationsMultiplication Stage One Result Failure',
  props<{ error: any }>()
);



// ADD BasicOperationsMultiplicationLevelStageTwoResult
export const addBasicOperationsMultiplicationLevelStageTwoResult = createAction(
  '[BasicOperationsMultiplication Stage-two Activity] Add BasicOperationsMultiplication Stage Two Result',
  props<{ payload: ActivityAnswer }>()
);
export const addBasicOperationsMultiplicationLevelStageTwoResultSuccess = createAction(
  '[BasicOperationsMultiplication Level Result Effect] Add BasicOperationsMultiplication Stage Two Result Success',
  props<{ payload: any }>()
);
export const addBasicOperationsMultiplicationLevelStageTwoResultFailure = createAction(
  '[BasicOperationsMultiplication Level Result Effect] Add BasicOperationsMultiplication Stage Two Result Failure',
  props<{ error: any }>()
);

// ADD BasicOperationsMultiplicationLevelStageThreeResult
export const addBasicOperationsMultiplicationLevelStageThreeResult = createAction(
  '[BasicOperationsMultiplication Stage-three Activity] Add BasicOperationsMultiplication Stage Three Result',
  props<{ payload: ActivityAnswer }>()
);
export const addBasicOperationsMultiplicationLevelStageThreeResultSuccess = createAction(
  '[BasicOperationsMultiplication Level Result Effect] Add BasicOperationsMultiplication Stage Three Result Success',
  props<{ payload: any }>()
);
export const addBasicOperationsMultiplicationLevelStageThreeResultFailure = createAction(
  '[BasicOperationsMultiplication Level Result Effect] Add BasicOperationsMultiplication Stage Three Result Failure',
  props<{ error: any }>()
);

// export const loadBasicOperationsMultiplicationLevelResults = createAction(
//   '[BasicOperationsMultiplicationLevelResult/API] Load BasicOperationsMultiplicationLevelResults',
//   props<{ basicOperationsMultiplicationLevelResults: BasicOperationsMultiplicationLevelResult[] }>()
// );

// export const addBasicOperationsMultiplicationLevelResult = createAction(
//   '[BasicOperationsMultiplicationLevelResult/API] Add BasicOperationsMultiplicationLevelResult',
//   props<{ basicOperationsMultiplicationLevelResult: BasicOperationsMultiplicationLevelResult }>()
// );

// export const upsertBasicOperationsMultiplicationLevelResult = createAction(
//   '[BasicOperationsMultiplicationLevelResult/API] Upsert BasicOperationsMultiplicationLevelResult',
//   props<{ basicOperationsMultiplicationLevelResult: BasicOperationsMultiplicationLevelResult }>()
// );

// export const addBasicOperationsMultiplicationLevelResults = createAction(
//   '[BasicOperationsMultiplicationLevelResult/API] Add BasicOperationsMultiplicationLevelResults',
//   props<{ basicOperationsMultiplicationLevelResults: BasicOperationsMultiplicationLevelResult[] }>()
// );

// export const upsertBasicOperationsMultiplicationLevelResults = createAction(
//   '[BasicOperationsMultiplicationLevelResult/API] Upsert BasicOperationsMultiplicationLevelResults',
//   props<{ basicOperationsMultiplicationLevelResults: BasicOperationsMultiplicationLevelResult[] }>()
// );

// export const updateBasicOperationsMultiplicationLevelResult = createAction(
//   '[BasicOperationsMultiplicationLevelResult/API] Update BasicOperationsMultiplicationLevelResult',
//   props<{ basicOperationsMultiplicationLevelResult: Update<BasicOperationsMultiplicationLevelResult> }>()
// );

// export const updateBasicOperationsMultiplicationLevelResults = createAction(
//   '[BasicOperationsMultiplicationLevelResult/API] Update BasicOperationsMultiplicationLevelResults',
//   props<{ basicOperationsMultiplicationLevelResults: Update<BasicOperationsMultiplicationLevelResult>[] }>()
// );

// export const deleteBasicOperationsMultiplicationLevelResult = createAction(
//   '[BasicOperationsMultiplicationLevelResult/API] Delete BasicOperationsMultiplicationLevelResult',
//   props<{ id: string }>()
// );

// export const deleteBasicOperationsMultiplicationLevelResults = createAction(
//   '[BasicOperationsMultiplicationLevelResult/API] Delete BasicOperationsMultiplicationLevelResults',
//   props<{ ids: string[] }>()
// );

// export const clearBasicOperationsMultiplicationLevelResults = createAction(
//   '[BasicOperationsMultiplicationLevelResult/API] Clear BasicOperationsMultiplicationLevelResults'
// );
