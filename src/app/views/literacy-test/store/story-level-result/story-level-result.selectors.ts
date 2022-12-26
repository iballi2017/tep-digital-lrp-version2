import { createFeatureSelector, createSelector } from '@ngrx/store';
import { storyLevelResultFeatureKey, StoryLevelResultState, selectAll } from './story-level-result.reducer';

export const selectStoryLevelResultState = createFeatureSelector<StoryLevelResultState>(
  storyLevelResultFeatureKey
);

export const selectStoryLevelResult = createSelector(
  selectStoryLevelResultState,
  selectAll
);