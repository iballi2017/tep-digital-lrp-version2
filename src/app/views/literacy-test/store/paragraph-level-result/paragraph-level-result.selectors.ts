import { createFeatureSelector, createSelector } from '@ngrx/store';
import { paragraphLevelResultsFeatureKey, ParagraphLevelResultsState, selectAll } from './paragraph-level-result.reducer';

export const selectParagraphLevelResultState = createFeatureSelector<ParagraphLevelResultsState>(
  paragraphLevelResultsFeatureKey
);

export const selectParagraphLevelResults = createSelector(
  selectParagraphLevelResultState,
  selectAll
);