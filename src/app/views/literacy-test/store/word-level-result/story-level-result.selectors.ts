import { createFeatureSelector, createSelector } from '@ngrx/store';
import { wordLevelResultFeatureKey, WordLevelResultState, selectAll } from './word-level-result.reducer';

export const selectWordLevelResultState = 
createFeatureSelector<WordLevelResultState>(wordLevelResultFeatureKey);

export const selectWordLevelResult = createSelector(
  selectWordLevelResultState,
  selectAll
);


export const wordLevelResult = createSelector(
  selectWordLevelResultState,
  (state: WordLevelResultState) => state.result
);
export const letterLevelResultIsLoading = createSelector(
  selectWordLevelResultState,
  (state: WordLevelResultState) => state?.isLoading
);
