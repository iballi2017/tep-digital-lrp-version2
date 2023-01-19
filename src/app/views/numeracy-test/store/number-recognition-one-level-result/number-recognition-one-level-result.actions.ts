import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { NumberRecognitionOneLevelResult } from './number-recognition-one-level-result.model';
import { ActivityAnswer } from 'src/app/models/interface/game';

export const loadNumberRecognitionOneLevelResult = createAction(
  '[NumberRecognitionOneLevelResult/API] Load NumberRecognitionOneLevelResults',
  props<{ session_id: string }>()
);

export const loadNumberRecognitionOneLevelResultSuccess = createAction(
  '[NumberRecognitionOneLevelResult/API] Load NumberRecognitionOneLevelResults Success',
  props<{ numberRecognitionOneLevelResult: NumberRecognitionOneLevelResult[] }>()
);

export const loadNumberRecognitionOneLevelResultFailure = createAction(
  '[NumberRecognitionOneLevelResult/API] Load NumberRecognitionOneLevelResults Failure',
  props<{ error: any }>()
);



// ADD NumberRecognitionOneLevelStageOneResult
export const addNumberRecognitionOneLevelStageOneResult = createAction(
  '[NumberRecognitionOne Stage-one Activity] Add NumberRecognitionOne Stage One Result',
  props<{ payload: ActivityAnswer }>()
);
export const addNumberRecognitionOneLevelStageOneResultSuccess = createAction(
  '[NumberRecognitionOne Level Result Effect] Add NumberRecognitionOne Stage One Result Success',
  props<{ payload: any }>()
);
export const addNumberRecognitionOneLevelStageOneResultFailure = createAction(
  '[NumberRecognitionOne Level Result Effect] Add NumberRecognitionOne Stage One Result Failure',
  props<{ error: any }>()
);





// export const loadNumberRecognitionOneLevelResults = createAction(
//   '[NumberRecognitionOneLevelResult/API] Load NumberRecognitionOneLevelResults',
//   props<{ numberRecognitionOneLevelResults: NumberRecognitionOneLevelResult[] }>()
// );

// export const addNumberRecognitionOneLevelResult = createAction(
//   '[NumberRecognitionOneLevelResult/API] Add NumberRecognitionOneLevelResult',
//   props<{ numberRecognitionOneLevelResult: NumberRecognitionOneLevelResult }>()
// );

// export const upsertNumberRecognitionOneLevelResult = createAction(
//   '[NumberRecognitionOneLevelResult/API] Upsert NumberRecognitionOneLevelResult',
//   props<{ numberRecognitionOneLevelResult: NumberRecognitionOneLevelResult }>()
// );

// export const addNumberRecognitionOneLevelResults = createAction(
//   '[NumberRecognitionOneLevelResult/API] Add NumberRecognitionOneLevelResults',
//   props<{ numberRecognitionOneLevelResults: NumberRecognitionOneLevelResult[] }>()
// );

// export const upsertNumberRecognitionOneLevelResults = createAction(
//   '[NumberRecognitionOneLevelResult/API] Upsert NumberRecognitionOneLevelResults',
//   props<{ numberRecognitionOneLevelResults: NumberRecognitionOneLevelResult[] }>()
// );

// export const updateNumberRecognitionOneLevelResult = createAction(
//   '[NumberRecognitionOneLevelResult/API] Update NumberRecognitionOneLevelResult',
//   props<{ numberRecognitionOneLevelResult: Update<NumberRecognitionOneLevelResult> }>()
// );

// export const updateNumberRecognitionOneLevelResults = createAction(
//   '[NumberRecognitionOneLevelResult/API] Update NumberRecognitionOneLevelResults',
//   props<{ numberRecognitionOneLevelResults: Update<NumberRecognitionOneLevelResult>[] }>()
// );

// export const deleteNumberRecognitionOneLevelResult = createAction(
//   '[NumberRecognitionOneLevelResult/API] Delete NumberRecognitionOneLevelResult',
//   props<{ id: string }>()
// );

// export const deleteNumberRecognitionOneLevelResults = createAction(
//   '[NumberRecognitionOneLevelResult/API] Delete NumberRecognitionOneLevelResults',
//   props<{ ids: string[] }>()
// );

// export const clearNumberRecognitionOneLevelResults = createAction(
//   '[NumberRecognitionOneLevelResult/API] Clear NumberRecognitionOneLevelResults'
// );
