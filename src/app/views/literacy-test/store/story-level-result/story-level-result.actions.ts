import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { StoryLevelResult } from './story-level-result.model';

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