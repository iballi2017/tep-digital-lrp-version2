import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  letterLevelResultFeatureKey,
  LetterLevelResultState,
  selectAll,
} from './letter-level-result.reducer';

export const selectLetterLevelResultState =
  createFeatureSelector<LetterLevelResultState>(letterLevelResultFeatureKey);

export const selectLetterLevelResult = createSelector(
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
export const isSubmitResultLetterLevelResult = createSelector(
  selectLetterLevelResultState,
  (state: LetterLevelResultState) => state?.isSubmitResult
);
