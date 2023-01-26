import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  basicOperationsSubtractionLevelResultsFeatureKey,
  selectAll,
  BasicOperationsSubtractionLevelResultState,
} from './basic-operations-subtraction-level-result.reducer';

export const selectBasicOperationsSubtractionLevelResultState =
  createFeatureSelector<BasicOperationsSubtractionLevelResultState>(basicOperationsSubtractionLevelResultsFeatureKey);

export const selectBasicOperationsSubtractionLevelResult = createSelector(
  selectBasicOperationsSubtractionLevelResultState,
  selectAll
);

export const basicOperationsSubtractionLevelResult = createSelector(
  selectBasicOperationsSubtractionLevelResultState,
  (state: BasicOperationsSubtractionLevelResultState) => state.result
);
export const basicOperationsSubtractionLevelResultIsLoading = createSelector(
  selectBasicOperationsSubtractionLevelResultState,
  (state: BasicOperationsSubtractionLevelResultState) => state?.isLoading
);
export const isSubmitResultBasicOperationsSubtractionLevelResult = createSelector(
  selectBasicOperationsSubtractionLevelResultState,
  (state: BasicOperationsSubtractionLevelResultState) => state?.isSubmitResult
);
