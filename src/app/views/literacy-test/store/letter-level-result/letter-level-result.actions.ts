import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { LetterLevelResult } from './letter-level-result.model';

export const loadLetterLevelResults = createAction(
  '[LetterLevelResult Component] Load LetterLevelResults',
  props<{ session_id: string }>()
);

export const loadLetterLevelResultsSuccess = createAction(
  '[LetterLevelResult Effect] Load LetterLevelResults Success',
  props<{ letterLevelResults: LetterLevelResult[] }>()
);

export const loadLetterLevelResultsFailure = createAction(
  '[LetterLevelResult Effect] Load LetterLevelResults Failure',
  props<{ error: any }>()
);