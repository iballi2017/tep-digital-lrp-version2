import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { StoryLevelResult } from './story-level-result.model';
import { ActivityAnswer } from 'src/app/models/interface/game';

export const loadStoryLevelResult = createAction(
  '[StoryLevelResult Component] Load StoryLevelResult',
  props<{ session_id: string }>()
);
export const loadStoryLevelResultSuccess = createAction(
  '[StoryLevelResult Effect] Load StoryLevelResult Success',
  props<{ storyLevelResult: StoryLevelResult[] }>()
);
export const loadStoryLevelResultFailure = createAction(
  '[StoryLevelResult Effect] Load StoryLevelResult Failure',
  props<{ error: any }>()
);


// ADD StoryLevelStageOneResult
export const addStoryLevelStageOneResult = createAction(
  '[Story Stage-one Activity] Add Level Stage Two Result',
  props<{ payload: ActivityAnswer }>()
);
export const addStoryLevelStageOneResultSuccess = createAction(
  '[Story Level Result Effect] Add Level Stage Two Result Success',
  props<{ payload: any }>()
);
export const addStoryLevelStageOneResultFailure = createAction(
  '[Story Level Result Effect] Add Level Stage Two Result Failure',
  props<{ error: any }>()
);
