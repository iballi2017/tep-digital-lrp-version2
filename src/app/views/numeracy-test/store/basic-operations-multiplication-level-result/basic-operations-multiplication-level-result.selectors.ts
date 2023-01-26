import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  basicOperationsMultiplicationLevelResultsFeatureKey,
  selectAll,
  BasicOperationsMultiplicationLevelResultState,
} from './basic-operations-multiplication-level-result.reducer';

export const selectBasicOperationsMultiplicationLevelResultState =
  createFeatureSelector<BasicOperationsMultiplicationLevelResultState>(basicOperationsMultiplicationLevelResultsFeatureKey);

export const selectBasicOperationsMultiplicationLevelResult = createSelector(
  selectBasicOperationsMultiplicationLevelResultState,
  selectAll
);

export const basicOperationsMultiplicationLevelResult = createSelector(
  selectBasicOperationsMultiplicationLevelResultState,
  (state: BasicOperationsMultiplicationLevelResultState) => state.result
);
export const basicOperationsMultiplicationLevelResultIsLoading = createSelector(
  selectBasicOperationsMultiplicationLevelResultState,
  (state: BasicOperationsMultiplicationLevelResultState) => state?.isLoading
);
export const isSubmitResultBasicOperationsMultiplicationLevelResult = createSelector(
  selectBasicOperationsMultiplicationLevelResultState,
  (state: BasicOperationsMultiplicationLevelResultState) => state?.isSubmitResult
);
