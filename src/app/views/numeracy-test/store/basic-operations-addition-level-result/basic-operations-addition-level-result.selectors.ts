import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  basicOperationsAdditionLevelResultsFeatureKey,
  selectAll,
  BasicOperationsAdditionLevelResultState,
} from './basic-operations-addition-level-result.reducer';

export const selectBasicOperationsAdditionLevelResultState =
  createFeatureSelector<BasicOperationsAdditionLevelResultState>(basicOperationsAdditionLevelResultsFeatureKey);

export const selectBasicOperationsAdditionLevelResult = createSelector(
  selectBasicOperationsAdditionLevelResultState,
  selectAll
);

// export const letterLevelResult = createSelector(
//   selectBasicOperationsAdditionLevelResultState,
//   (state: BasicOperationsAdditionLevelResultState) => state.result
// );
export const basicOperationsAdditionLevelResultIsLoading = createSelector(
  selectBasicOperationsAdditionLevelResultState,
  (state: BasicOperationsAdditionLevelResultState) => state?.isLoading
);
// export const isSubmitResultLetterLevelResult = createSelector(
//   selectBasicOperationsAdditionLevelResultState,
//   (state: BasicOperationsAdditionLevelResultState) => state?.isSubmitResult
// );
