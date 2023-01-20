import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { NumberRecognitionThreeLevelResult } from './number-recognition-three-level-result.model';
import { ActivityAnswer } from 'src/app/models/interface/game';


export const loadNumberRecognitionThreeLevelResult = createAction(
  '[NumberRecognitionThreeLevelResult/API] Load NumberRecognitionThreeLevelResults',
  props<{ session_id: string }>()
);

export const loadNumberRecognitionThreeLevelResultSuccess = createAction(
  '[NumberRecognitionThreeLevelResult/API] Load NumberRecognitionThreeLevelResults Success',
  props<{ numberRecognitionThreeLevelResult: NumberRecognitionThreeLevelResult[] }>()
);

export const loadNumberRecognitionThreeLevelResultFailure = createAction(
  '[NumberRecognitionThreeLevelResult/API] Load NumberRecognitionThreeLevelResults Failure',
  props<{ error: any }>()
);


// ADD NumberRecognitionThreeLevelStageOneResult
export const addNumberRecognitionThreeLevelStageOneResult = createAction(
  '[NumberRecognitionThree Stage-one Activity] Add NumberRecognitionThree Stage One Result',
  props<{ payload: ActivityAnswer }>()
);
export const addNumberRecognitionThreeLevelStageOneResultSuccess = createAction(
  '[NumberRecognitionThree Level Result Effect] Add NumberRecognitionThree Stage One Result Success',
  props<{ payload: any }>()
);
export const addNumberRecognitionThreeLevelStageOneResultFailure = createAction(
  '[NumberRecognitionThree Level Result Effect] Add NumberRecognitionThree Stage One Result Failure',
  props<{ error: any }>()
);





// export const loadNumberRecognitionThreeLevelResults = createAction(
//   '[NumberRecognitionThreeLevelResult/API] Load NumberRecognitionThreeLevelResults', 
//   props<{ numberRecognitionThreeLevelResults: NumberRecognitionThreeLevelResult[] }>()
// );

// export const addNumberRecognitionThreeLevelResult = createAction(
//   '[NumberRecognitionThreeLevelResult/API] Add NumberRecognitionThreeLevelResult',
//   props<{ numberRecognitionThreeLevelResult: NumberRecognitionThreeLevelResult }>()
// );

// export const upsertNumberRecognitionThreeLevelResult = createAction(
//   '[NumberRecognitionThreeLevelResult/API] Upsert NumberRecognitionThreeLevelResult',
//   props<{ numberRecognitionThreeLevelResult: NumberRecognitionThreeLevelResult }>()
// );

// export const addNumberRecognitionThreeLevelResults = createAction(
//   '[NumberRecognitionThreeLevelResult/API] Add NumberRecognitionThreeLevelResults',
//   props<{ numberRecognitionThreeLevelResults: NumberRecognitionThreeLevelResult[] }>()
// );

// export const upsertNumberRecognitionThreeLevelResults = createAction(
//   '[NumberRecognitionThreeLevelResult/API] Upsert NumberRecognitionThreeLevelResults',
//   props<{ numberRecognitionThreeLevelResults: NumberRecognitionThreeLevelResult[] }>()
// );

// export const updateNumberRecognitionThreeLevelResult = createAction(
//   '[NumberRecognitionThreeLevelResult/API] Update NumberRecognitionThreeLevelResult',
//   props<{ numberRecognitionThreeLevelResult: Update<NumberRecognitionThreeLevelResult> }>()
// );

// export const updateNumberRecognitionThreeLevelResults = createAction(
//   '[NumberRecognitionThreeLevelResult/API] Update NumberRecognitionThreeLevelResults',
//   props<{ numberRecognitionThreeLevelResults: Update<NumberRecognitionThreeLevelResult>[] }>()
// );

// export const deleteNumberRecognitionThreeLevelResult = createAction(
//   '[NumberRecognitionThreeLevelResult/API] Delete NumberRecognitionThreeLevelResult',
//   props<{ id: string }>()
// );

// export const deleteNumberRecognitionThreeLevelResults = createAction(
//   '[NumberRecognitionThreeLevelResult/API] Delete NumberRecognitionThreeLevelResults',
//   props<{ ids: string[] }>()
// );

// export const clearNumberRecognitionThreeLevelResults = createAction(
//   '[NumberRecognitionThreeLevelResult/API] Clear NumberRecognitionThreeLevelResults'
// );
