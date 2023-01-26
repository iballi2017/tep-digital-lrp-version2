import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  basicOperationsDivisionLevelResultsFeatureKey,
  selectAll,
  BasicOperationsDivisionLevelResultState,
} from './basic-operations-division-level-result.reducer';

export const selectBasicOperationsDivisionLevelResultState =
  createFeatureSelector<BasicOperationsDivisionLevelResultState>(basicOperationsDivisionLevelResultsFeatureKey);

export const selectBasicOperationsDivisionLevelResult = createSelector(
  selectBasicOperationsDivisionLevelResultState,
  selectAll
);

// export const letterLevelResult = createSelector(
//   selectBasicOperationsDivisionLevelResultState,
//   (state: BasicOperationsDivisionLevelResultState) => state.result
// );
export const basicOperationsMultiplicationLevelResult = createSelector(
  selectBasicOperationsDivisionLevelResultState,
  (state: BasicOperationsDivisionLevelResultState) => state.result
);
export const basicOperationsDivisionLevelResultIsLoading = createSelector(
  selectBasicOperationsDivisionLevelResultState,
  (state: BasicOperationsDivisionLevelResultState) => state?.isLoading
);
export const isSubmitResultBasicOperationsDivisionLevelResult = createSelector(
  selectBasicOperationsDivisionLevelResultState,
  (state: BasicOperationsDivisionLevelResultState) => state?.isSubmitResult
);
