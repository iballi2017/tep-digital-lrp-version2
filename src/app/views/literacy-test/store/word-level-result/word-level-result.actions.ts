import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { WordLevelResult } from './word-level-result.model';
import { ActivityAnswer } from 'src/app/models/interface/game';



/* LOAD WORD LEVEL RESULTS WITH RATINGS*/
export const loadWordLevelResult = createAction(
  '[WordLevelResult Component] Load WordLevelResults',
  props<{ session_id: string }>()
);
export const loadWordLevelResultSuccess = createAction(
  '[WordLevelResult Effect] Load WordLevelResults Success',
  props<{ wordLevelResults: WordLevelResult[] }>()
);
export const loadWordLevelResultFailure = createAction(
  '[WordLevelResult Effect] Load WordLevelResults Failure',
  props<{ error: any }>()
);


// ADD WordLevelStageOneResult
export const addWordLevelStageOneResult = createAction(
  '[Word Stage-one Activity] Add Level Stage One Result',
  props<{ payload: ActivityAnswer }>()
);
export const addWordLevelStageOneResultSuccess = createAction(
  '[Word Level Result Effect] Add Level Stage One Result Success',
  props<{ payload: any }>()
);
export const addWordLevelStageOneResultFailure = createAction(
  '[Word Level Result Effect] Add Level Stage One Result Failure',
  props<{ error: any }>()
);

// ADD WordLevelStageTwoResult
export const addWordLevelStageTwoResult = createAction(
  '[Word Stage-two Activity] Add Level Stage Two Result',
  props<{ payload: ActivityAnswer }>()
);
export const addWordLevelStageTwoResultSuccess = createAction(
  '[Word Level Result Effect] Add Level Stage Two Result Success',
  props<{ payload: any }>()
);
export const addWordLevelStageTwoResultFailure = createAction(
  '[Word Level Result Effect] Add Level Stage Two Result Failure',
  props<{ error: any }>()
);

// ADD WordLevelStageThreeResult
export const addWordLevelStageThreeResult = createAction(
  '[Word Stage-three Activity] Add Level Stage Three Result',
  props<{ payload: ActivityAnswer }>()
);
export const addWordLevelStageThreeResultSuccess = createAction(
  '[Word Level Result Effect] Add Level Stage Three Result Success',
  props<{ payload: any }>()
);
export const addWordLevelStageThreeResultFailure = createAction(
  '[Word Level Result Effect] Add Level Stage Three Result Failure',
  props<{ error: any }>()
);
