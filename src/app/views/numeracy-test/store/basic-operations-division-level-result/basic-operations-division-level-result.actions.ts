import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { BasicOperationsDivisionLevelResult } from './basic-operations-division-level-result.model';

export const loadBasicOperationsDivisionLevelResults = createAction(
  '[BasicOperationsDivisionLevelResult/API] Load BasicOperationsDivisionLevelResults', 
  props<{ basicOperationsDivisionLevelResults: BasicOperationsDivisionLevelResult[] }>()
);

export const addBasicOperationsDivisionLevelResult = createAction(
  '[BasicOperationsDivisionLevelResult/API] Add BasicOperationsDivisionLevelResult',
  props<{ basicOperationsDivisionLevelResult: BasicOperationsDivisionLevelResult }>()
);

export const upsertBasicOperationsDivisionLevelResult = createAction(
  '[BasicOperationsDivisionLevelResult/API] Upsert BasicOperationsDivisionLevelResult',
  props<{ basicOperationsDivisionLevelResult: BasicOperationsDivisionLevelResult }>()
);

export const addBasicOperationsDivisionLevelResults = createAction(
  '[BasicOperationsDivisionLevelResult/API] Add BasicOperationsDivisionLevelResults',
  props<{ basicOperationsDivisionLevelResults: BasicOperationsDivisionLevelResult[] }>()
);

export const upsertBasicOperationsDivisionLevelResults = createAction(
  '[BasicOperationsDivisionLevelResult/API] Upsert BasicOperationsDivisionLevelResults',
  props<{ basicOperationsDivisionLevelResults: BasicOperationsDivisionLevelResult[] }>()
);

export const updateBasicOperationsDivisionLevelResult = createAction(
  '[BasicOperationsDivisionLevelResult/API] Update BasicOperationsDivisionLevelResult',
  props<{ basicOperationsDivisionLevelResult: Update<BasicOperationsDivisionLevelResult> }>()
);

export const updateBasicOperationsDivisionLevelResults = createAction(
  '[BasicOperationsDivisionLevelResult/API] Update BasicOperationsDivisionLevelResults',
  props<{ basicOperationsDivisionLevelResults: Update<BasicOperationsDivisionLevelResult>[] }>()
);

export const deleteBasicOperationsDivisionLevelResult = createAction(
  '[BasicOperationsDivisionLevelResult/API] Delete BasicOperationsDivisionLevelResult',
  props<{ id: string }>()
);

export const deleteBasicOperationsDivisionLevelResults = createAction(
  '[BasicOperationsDivisionLevelResult/API] Delete BasicOperationsDivisionLevelResults',
  props<{ ids: string[] }>()
);

export const clearBasicOperationsDivisionLevelResults = createAction(
  '[BasicOperationsDivisionLevelResult/API] Clear BasicOperationsDivisionLevelResults'
);
