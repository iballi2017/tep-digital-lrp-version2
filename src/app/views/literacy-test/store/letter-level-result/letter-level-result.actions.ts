import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { LetterLevelResult } from './letter-level-result.model';
import { ActivityAnswer } from 'src/app/models/interface/game';


// ADD LetterLevelResult
export const addLetterLevelResult = createAction(
  '[Letter Stage-one Activity] Add Level Result',
  props<{ payload: ActivityAnswer }>()
);
export const addLetterLevelResultSuccess = createAction(
  '[Letter Level Result Effect] Add Level Result Success',
  props<{ payload: any }>()
);
export const addLetterLevelResultFailure = createAction(
  '[Letter Level Result Effect] Add Level Result Failure',
  props<{ error: any }>()
);



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