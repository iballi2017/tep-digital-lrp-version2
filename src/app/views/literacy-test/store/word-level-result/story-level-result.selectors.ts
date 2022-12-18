import { createFeatureSelector, createSelector } from '@ngrx/store';
import { wordLevelResultsFeatureKey, WordLevelResultsState, selectAll } from './word-level-result.reducer';

export const selectWordLevelResultsState = createFeatureSelector<WordLevelResultsState>(
  wordLevelResultsFeatureKey
);

export const selectwordLevelResults = createSelector(
  selectWordLevelResultsState,
  selectAll
);