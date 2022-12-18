import { createFeatureSelector, createSelector } from '@ngrx/store';
import { letterLevelResultsFeatureKey, LetterLevelResultState, selectAll } from './letter-level-result.reducer';

export const selectLetterLevelResultState = createFeatureSelector<LetterLevelResultState>(
  letterLevelResultsFeatureKey
);

export const selectLetterLevelResults = createSelector(
  selectLetterLevelResultState,
  selectAll
);