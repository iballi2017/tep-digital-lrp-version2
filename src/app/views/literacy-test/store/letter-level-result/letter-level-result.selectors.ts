import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  letterLevelResultFeatureKey,
  LetterLevelResultState,
  selectAll,
} from './letter-level-result.reducer';

export const selectLetterLevelResultState =
  createFeatureSelector<LetterLevelResultState>(letterLevelResultFeatureKey);

export const selectLetterLevelResults = createSelector(
  selectLetterLevelResultState,
  selectAll
);

export const letterLevelResult = createSelector(
  selectLetterLevelResultState,
  (state: LetterLevelResultState) => state.result
);
export const letterLevelResultIsLoading = createSelector(
  selectLetterLevelResultState,
  (state: LetterLevelResultState) => state?.isLoading
);
