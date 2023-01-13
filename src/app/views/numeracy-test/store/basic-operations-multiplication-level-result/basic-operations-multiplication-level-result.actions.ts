import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { BasicOperationsMultiplicationLevelResult } from './basic-operations-multiplication-level-result.model';

export const loadBasicOperationsMultiplicationLevelResults = createAction(
  '[BasicOperationsMultiplicationLevelResult/API] Load BasicOperationsMultiplicationLevelResults', 
  props<{ basicOperationsMultiplicationLevelResults: BasicOperationsMultiplicationLevelResult[] }>()
);

export const addBasicOperationsMultiplicationLevelResult = createAction(
  '[BasicOperationsMultiplicationLevelResult/API] Add BasicOperationsMultiplicationLevelResult',
  props<{ basicOperationsMultiplicationLevelResult: BasicOperationsMultiplicationLevelResult }>()
);

export const upsertBasicOperationsMultiplicationLevelResult = createAction(
  '[BasicOperationsMultiplicationLevelResult/API] Upsert BasicOperationsMultiplicationLevelResult',
  props<{ basicOperationsMultiplicationLevelResult: BasicOperationsMultiplicationLevelResult }>()
);

export const addBasicOperationsMultiplicationLevelResults = createAction(
  '[BasicOperationsMultiplicationLevelResult/API] Add BasicOperationsMultiplicationLevelResults',
  props<{ basicOperationsMultiplicationLevelResults: BasicOperationsMultiplicationLevelResult[] }>()
);

export const upsertBasicOperationsMultiplicationLevelResults = createAction(
  '[BasicOperationsMultiplicationLevelResult/API] Upsert BasicOperationsMultiplicationLevelResults',
  props<{ basicOperationsMultiplicationLevelResults: BasicOperationsMultiplicationLevelResult[] }>()
);

export const updateBasicOperationsMultiplicationLevelResult = createAction(
  '[BasicOperationsMultiplicationLevelResult/API] Update BasicOperationsMultiplicationLevelResult',
  props<{ basicOperationsMultiplicationLevelResult: Update<BasicOperationsMultiplicationLevelResult> }>()
);

export const updateBasicOperationsMultiplicationLevelResults = createAction(
  '[BasicOperationsMultiplicationLevelResult/API] Update BasicOperationsMultiplicationLevelResults',
  props<{ basicOperationsMultiplicationLevelResults: Update<BasicOperationsMultiplicationLevelResult>[] }>()
);

export const deleteBasicOperationsMultiplicationLevelResult = createAction(
  '[BasicOperationsMultiplicationLevelResult/API] Delete BasicOperationsMultiplicationLevelResult',
  props<{ id: string }>()
);

export const deleteBasicOperationsMultiplicationLevelResults = createAction(
  '[BasicOperationsMultiplicationLevelResult/API] Delete BasicOperationsMultiplicationLevelResults',
  props<{ ids: string[] }>()
);

export const clearBasicOperationsMultiplicationLevelResults = createAction(
  '[BasicOperationsMultiplicationLevelResult/API] Clear BasicOperationsMultiplicationLevelResults'
);
