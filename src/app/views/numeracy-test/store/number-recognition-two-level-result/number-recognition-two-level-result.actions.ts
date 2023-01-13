import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { NumberRecognitionTwoLevelResult } from './number-recognition-two-level-result.model';

export const loadNumberRecognitionTwoLevelResults = createAction(
  '[NumberRecognitionTwoLevelResult/API] Load NumberRecognitionTwoLevelResults', 
  props<{ numberRecognitionTwoLevelResults: NumberRecognitionTwoLevelResult[] }>()
);

export const addNumberRecognitionTwoLevelResult = createAction(
  '[NumberRecognitionTwoLevelResult/API] Add NumberRecognitionTwoLevelResult',
  props<{ numberRecognitionTwoLevelResult: NumberRecognitionTwoLevelResult }>()
);

export const upsertNumberRecognitionTwoLevelResult = createAction(
  '[NumberRecognitionTwoLevelResult/API] Upsert NumberRecognitionTwoLevelResult',
  props<{ numberRecognitionTwoLevelResult: NumberRecognitionTwoLevelResult }>()
);

export const addNumberRecognitionTwoLevelResults = createAction(
  '[NumberRecognitionTwoLevelResult/API] Add NumberRecognitionTwoLevelResults',
  props<{ numberRecognitionTwoLevelResults: NumberRecognitionTwoLevelResult[] }>()
);

export const upsertNumberRecognitionTwoLevelResults = createAction(
  '[NumberRecognitionTwoLevelResult/API] Upsert NumberRecognitionTwoLevelResults',
  props<{ numberRecognitionTwoLevelResults: NumberRecognitionTwoLevelResult[] }>()
);

export const updateNumberRecognitionTwoLevelResult = createAction(
  '[NumberRecognitionTwoLevelResult/API] Update NumberRecognitionTwoLevelResult',
  props<{ numberRecognitionTwoLevelResult: Update<NumberRecognitionTwoLevelResult> }>()
);

export const updateNumberRecognitionTwoLevelResults = createAction(
  '[NumberRecognitionTwoLevelResult/API] Update NumberRecognitionTwoLevelResults',
  props<{ numberRecognitionTwoLevelResults: Update<NumberRecognitionTwoLevelResult>[] }>()
);

export const deleteNumberRecognitionTwoLevelResult = createAction(
  '[NumberRecognitionTwoLevelResult/API] Delete NumberRecognitionTwoLevelResult',
  props<{ id: string }>()
);

export const deleteNumberRecognitionTwoLevelResults = createAction(
  '[NumberRecognitionTwoLevelResult/API] Delete NumberRecognitionTwoLevelResults',
  props<{ ids: string[] }>()
);

export const clearNumberRecognitionTwoLevelResults = createAction(
  '[NumberRecognitionTwoLevelResult/API] Clear NumberRecognitionTwoLevelResults'
);
