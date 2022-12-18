import { createFeatureSelector, createSelector } from '@ngrx/store';
import { storyLevelResultsFeatureKey, StoryLevelResultsState, selectAll } from './story-level-result.reducer';

export const selectStoryLevelResultsState = createFeatureSelector<StoryLevelResultsState>(
  storyLevelResultsFeatureKey
);

export const selectStoryLevelResults = createSelector(
  selectStoryLevelResultsState,
  selectAll
);