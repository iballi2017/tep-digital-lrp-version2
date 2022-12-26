import { createFeatureSelector, createSelector } from '@ngrx/store';
import { paragraphLevelResultFeatureKey, ParagraphLevelResultState, selectAll } from './paragraph-level-result.reducer';

export const selectParagraphLevelResultState = createFeatureSelector<ParagraphLevelResultState>(
  paragraphLevelResultFeatureKey
);

export const selectParagraphLevelResult = createSelector(
  selectParagraphLevelResultState,
  selectAll
);