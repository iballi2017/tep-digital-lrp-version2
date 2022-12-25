import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { LetterLevelResult } from './letter-level-result.model';
import { ActivityAnswer } from 'src/app/models/interface/game';


// ADD LetterLevelStageOneResult
export const addLetterLevelStageOneResult = createAction(
  '[Letter Stage-one Activity] Add Level Stage One Result',
  props<{ payload: ActivityAnswer }>()
);
export const addLetterLevelStageOneResultSuccess = createAction(
  '[Letter Level Result Effect] Add Level Stage One Result Success',
  props<{ payload: any }>()
);
export const addLetterLevelStageOneResultFailure = createAction(
  '[Letter Level Result Effect] Add Level Stage One Result Failure',
  props<{ error: any }>()
);

// ADD LetterLevelStageTwoResult
export const addLetterLevelStageTwoResult = createAction(
  '[Letter Stage-two Activity] Add Level Stage Two Result',
  props<{ payload: ActivityAnswer }>()
);
export const addLetterLevelStageTwoResultSuccess = createAction(
  '[Letter Level Result Effect] Add Level Stage Two Result Success',
  props<{ payload: any }>()
);
export const addLetterLevelStageTwoResultFailure = createAction(
  '[Letter Level Result Effect] Add Level Stage Two Result Failure',
  props<{ error: any }>()
);


// ADD LetterLevelStageThreeResult
export const addLetterLevelStageThreeResult = createAction(
  '[Letter Stage-three Activity] Add Level Stage Three Result',
  props<{ payload: ActivityAnswer }>()
);
export const addLetterLevelStageThreeResultSuccess = createAction(
  '[Letter Level Result Effect] Add Level Stage Three Result Success',
  props<{ payload: any }>()
);
export const addLetterLevelStageThreeResultFailure = createAction(
  '[Letter Level Result Effect] Add Level Stage Three Result Failure',
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