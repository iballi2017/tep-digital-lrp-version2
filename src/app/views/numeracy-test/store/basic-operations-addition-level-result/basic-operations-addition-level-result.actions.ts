import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { BasicOperationsAdditionLevelResult } from './basic-operations-addition-level-result.model';
import { ActivityAnswer } from 'src/app/models/interface/game';


export const loadBasicOperationsAdditionLevelResult = createAction(
  '[BasicOperationsAdditionLevelResult/API] Load BasicOperationsAdditionLevelResults',
  props<{ session_id: string }>()
);

export const loadBasicOperationsAdditionLevelResultSuccess = createAction(
  '[BasicOperationsAdditionLevelResult/API] Load BasicOperationsAdditionLevelResults Success',
  props<{ basicOperationsAdditionLevelResult: BasicOperationsAdditionLevelResult[] }>()
);

export const loadBasicOperationsAdditionLevelResultFailure = createAction(
  '[BasicOperationsAdditionLevelResult/API] Load BasicOperationsAdditionLevelResults Failure',
  props<{ error: any }>()
);


// ADD BasicOperationsAdditionLevelStageOneResult
export const addBasicOperationsAdditionLevelStageOneResult = createAction(
  '[BasicOperationsAddition Stage-one Activity] Add BasicOperationsAddition Stage One Result',
  props<{ payload: ActivityAnswer }>()
);
export const addBasicOperationsAdditionLevelStageOneResultSuccess = createAction(
  '[BasicOperationsAddition Level Result Effect] Add BasicOperationsAddition Stage One Result Success',
  props<{ payload: any }>()
);
export const addBasicOperationsAdditionLevelStageOneResultFailure = createAction(
  '[BasicOperationsAddition Level Result Effect] Add BasicOperationsAddition Stage One Result Failure',
  props<{ error: any }>()
);



// ADD BasicOperationsAdditionLevelStageTwoResult
export const addBasicOperationsAdditionLevelStageTwoResult = createAction(
  '[BasicOperationsAddition Stage-two Activity] Add BasicOperationsAddition Stage Two Result',
  props<{ payload: ActivityAnswer }>()
);
export const addBasicOperationsAdditionLevelStageTwoResultSuccess = createAction(
  '[BasicOperationsAddition Level Result Effect] Add BasicOperationsAddition Stage Two Result Success',
  props<{ payload: any }>()
);
export const addBasicOperationsAdditionLevelStageTwoResultFailure = createAction(
  '[BasicOperationsAddition Level Result Effect] Add BasicOperationsAddition Stage Two Result Failure',
  props<{ error: any }>()
);









// export const loadBasicOperationsAdditionLevelResults = createAction(
//   '[BasicOperationsAdditionLevelResult/API] Load BasicOperationsAdditionLevelResults', 
//   props<{ basicOperationsAdditionLevelResults: BasicOperationsAdditionLevelResult[] }>()
// );

// export const addBasicOperationsAdditionLevelResult = createAction(
//   '[BasicOperationsAdditionLevelResult/API] Add BasicOperationsAdditionLevelResult',
//   props<{ basicOperationsAdditionLevelResult: BasicOperationsAdditionLevelResult }>()
// );

// export const upsertBasicOperationsAdditionLevelResult = createAction(
//   '[BasicOperationsAdditionLevelResult/API] Upsert BasicOperationsAdditionLevelResult',
//   props<{ basicOperationsAdditionLevelResult: BasicOperationsAdditionLevelResult }>()
// );

// export const addBasicOperationsAdditionLevelResults = createAction(
//   '[BasicOperationsAdditionLevelResult/API] Add BasicOperationsAdditionLevelResults',
//   props<{ basicOperationsAdditionLevelResults: BasicOperationsAdditionLevelResult[] }>()
// );

// export const upsertBasicOperationsAdditionLevelResults = createAction(
//   '[BasicOperationsAdditionLevelResult/API] Upsert BasicOperationsAdditionLevelResults',
//   props<{ basicOperationsAdditionLevelResults: BasicOperationsAdditionLevelResult[] }>()
// );

// export const updateBasicOperationsAdditionLevelResult = createAction(
//   '[BasicOperationsAdditionLevelResult/API] Update BasicOperationsAdditionLevelResult',
//   props<{ basicOperationsAdditionLevelResult: Update<BasicOperationsAdditionLevelResult> }>()
// );

// export const updateBasicOperationsAdditionLevelResults = createAction(
//   '[BasicOperationsAdditionLevelResult/API] Update BasicOperationsAdditionLevelResults',
//   props<{ basicOperationsAdditionLevelResults: Update<BasicOperationsAdditionLevelResult>[] }>()
// );

// export const deleteBasicOperationsAdditionLevelResult = createAction(
//   '[BasicOperationsAdditionLevelResult/API] Delete BasicOperationsAdditionLevelResult',
//   props<{ id: string }>()
// );

// export const deleteBasicOperationsAdditionLevelResults = createAction(
//   '[BasicOperationsAdditionLevelResult/API] Delete BasicOperationsAdditionLevelResults',
//   props<{ ids: string[] }>()
// );

// export const clearBasicOperationsAdditionLevelResults = createAction(
//   '[BasicOperationsAdditionLevelResult/API] Clear BasicOperationsAdditionLevelResults'
// );
