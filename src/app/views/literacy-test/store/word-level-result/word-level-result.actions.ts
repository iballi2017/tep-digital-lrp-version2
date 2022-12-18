import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { WordLevelResult } from './word-level-result.model';

export const loadWordLevelResults = createAction(
  '[WordLevelResult Component] Load WordLevelResults',
  props<{ session_id: string }>()
);
export const loadWordLevelResultsSuccess = createAction(
  '[WordLevelResult Effect] Load WordLevelResults Success',
  props<{ wordLevelResults: WordLevelResult[] }>()
);
export const loadWordLevelResultsFailure = createAction(
  '[WordLevelResult Effect] Load WordLevelResults Failure',
  props<{ error: any }>()
);