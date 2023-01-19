import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  numberRecognitionOneLevelResultsFeatureKey,
  selectAll,
  NumberRecognitionOneLevelResultState,
} from './number-recognition-one-level-result.reducer';

export const selectNumberRecognitionOneLevelResultState =
  createFeatureSelector<NumberRecognitionOneLevelResultState>(numberRecognitionOneLevelResultsFeatureKey);

export const selectNumberRecognitionOneLevelResult = createSelector(
  selectNumberRecognitionOneLevelResultState,
  selectAll
);

export const numberRecognitionOneLevelResult = createSelector(
  selectNumberRecognitionOneLevelResultState,
  (state: NumberRecognitionOneLevelResultState) => state.result
);
export const numberRecognitionOneLevelResultIsLoading = createSelector(
  selectNumberRecognitionOneLevelResultState,
  (state: NumberRecognitionOneLevelResultState) => state?.isLoading
);
export const isSubmitResultNumberRecognitionOneLevelResult = createSelector(
  selectNumberRecognitionOneLevelResultState,
  (state: NumberRecognitionOneLevelResultState) => state?.isSubmitResult
);
