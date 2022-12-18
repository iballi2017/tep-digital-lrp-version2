import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { StoryLevelResult } from './story-level-result.model';

export const loadStoryLevelResults = createAction(
  '[StoryLevelResult Component] Load StoryLevelResults',
  props<{ session_id: string }>()
);
export const loadStoryLevelResultsSuccess = createAction(
  '[StoryLevelResult Effect] Load StoryLevelResults Success',
  props<{ storyLevelResults: StoryLevelResult[] }>()
);
export const loadStoryLevelResultsFailure = createAction(
  '[StoryLevelResult Effect] Load StoryLevelResults Failure',
  props<{ error: any }>()
);