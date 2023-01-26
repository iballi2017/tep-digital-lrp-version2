import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { BasicOperationsDivisionLevelResult } from './basic-operations-division-level-result.model';
import { ActivityAnswer } from 'src/app/models/interface/game';

export const loadBasicOperationsDivisionLevelResult = createAction(
  '[BasicOperationsDivisionLevelResult/API] Load BasicOperationsDivisionLevelResults',
  props<{ session_id: string }>()
);

export const loadBasicOperationsDivisionLevelResultSuccess = createAction(
  '[BasicOperationsDivisionLevelResult/API] Load BasicOperationsDivisionLevelResults Success',
  props<{
    basicOperationsDivisionLevelResult: BasicOperationsDivisionLevelResult[];
  }>()
);

export const loadBasicOperationsDivisionLevelResultFailure = createAction(
  '[BasicOperationsDivisionLevelResult/API] Load BasicOperationsDivisionLevelResults Failure',
  props<{ error: any }>()
);


// ADD BasicOperationsDivisionLevelStageOneResult
export const addBasicOperationsDivisionLevelStageOneResult = createAction(
  '[BasicOperationsDivision Stage-one Activity] Add BasicOperationsDivision Stage One Result',
  props<{ payload: ActivityAnswer }>()
);
export const addBasicOperationsDivisionLevelStageOneResultSuccess = createAction(
  '[BasicOperationsDivision Level Result Effect] Add BasicOperationsDivision Stage One Result Success',
  props<{ payload: any }>()
);
export const addBasicOperationsDivisionLevelStageOneResultFailure = createAction(
  '[BasicOperationsDivision Level Result Effect] Add BasicOperationsDivision Stage One Result Failure',
  props<{ error: any }>()
);



// ADD BasicOperationsDivisionLevelStageTwoResult
export const addBasicOperationsDivisionLevelStageTwoResult = createAction(
  '[BasicOperationsDivision Stage-two Activity] Add BasicOperationsDivision Stage Two Result',
  props<{ payload: ActivityAnswer }>()
);
export const addBasicOperationsDivisionLevelStageTwoResultSuccess = createAction(
  '[BasicOperationsDivision Level Result Effect] Add BasicOperationsDivision Stage Two Result Success',
  props<{ payload: any }>()
);
export const addBasicOperationsDivisionLevelStageTwoResultFailure = createAction(
  '[BasicOperationsDivision Level Result Effect] Add BasicOperationsDivision Stage Two Result Failure',
  props<{ error: any }>()
);



// export const loadBasicOperationsDivisionLevelResults = createAction(
//   '[BasicOperationsDivisionLevelResult/API] Load BasicOperationsDivisionLevelResults',
//   props<{ basicOperationsDivisionLevelResults: BasicOperationsDivisionLevelResult[] }>()
// );

// export const addBasicOperationsDivisionLevelResult = createAction(
//   '[BasicOperationsDivisionLevelResult/API] Add BasicOperationsDivisionLevelResult',
//   props<{ basicOperationsDivisionLevelResult: BasicOperationsDivisionLevelResult }>()
// );

// export const upsertBasicOperationsDivisionLevelResult = createAction(
//   '[BasicOperationsDivisionLevelResult/API] Upsert BasicOperationsDivisionLevelResult',
//   props<{ basicOperationsDivisionLevelResult: BasicOperationsDivisionLevelResult }>()
// );

// export const addBasicOperationsDivisionLevelResults = createAction(
//   '[BasicOperationsDivisionLevelResult/API] Add BasicOperationsDivisionLevelResults',
//   props<{ basicOperationsDivisionLevelResults: BasicOperationsDivisionLevelResult[] }>()
// );

// export const upsertBasicOperationsDivisionLevelResults = createAction(
//   '[BasicOperationsDivisionLevelResult/API] Upsert BasicOperationsDivisionLevelResults',
//   props<{ basicOperationsDivisionLevelResults: BasicOperationsDivisionLevelResult[] }>()
// );

// export const updateBasicOperationsDivisionLevelResult = createAction(
//   '[BasicOperationsDivisionLevelResult/API] Update BasicOperationsDivisionLevelResult',
//   props<{ basicOperationsDivisionLevelResult: Update<BasicOperationsDivisionLevelResult> }>()
// );

// export const updateBasicOperationsDivisionLevelResults = createAction(
//   '[BasicOperationsDivisionLevelResult/API] Update BasicOperationsDivisionLevelResults',
//   props<{ basicOperationsDivisionLevelResults: Update<BasicOperationsDivisionLevelResult>[] }>()
// );

// export const deleteBasicOperationsDivisionLevelResult = createAction(
//   '[BasicOperationsDivisionLevelResult/API] Delete BasicOperationsDivisionLevelResult',
//   props<{ id: string }>()
// );

// export const deleteBasicOperationsDivisionLevelResults = createAction(
//   '[BasicOperationsDivisionLevelResult/API] Delete BasicOperationsDivisionLevelResults',
//   props<{ ids: string[] }>()
// );

// export const clearBasicOperationsDivisionLevelResults = createAction(
//   '[BasicOperationsDivisionLevelResult/API] Clear BasicOperationsDivisionLevelResults'
// );
