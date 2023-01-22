import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  numberRecognitionThreeLevelResultsFeatureKey,
  selectAll,
  NumberRecognitionThreeLevelResultState,
} from './number-recognition-three-level-result.reducer';

export const selectNumberRecognitionThreeLevelResultState =
  createFeatureSelector<NumberRecognitionThreeLevelResultState>(
    numberRecognitionThreeLevelResultsFeatureKey
  );

export const selectNumberRecognitionThreeLevelResult = createSelector(
  selectNumberRecognitionThreeLevelResultState,
  selectAll
);

export const numberRecognitionThreeLevelResult = createSelector(
  selectNumberRecognitionThreeLevelResultState,
  (state: NumberRecognitionThreeLevelResultState) => state.result
);
export const numberRecognitionThreeLevelResultIsLoading = createSelector(
  selectNumberRecognitionThreeLevelResultState,
  (state: NumberRecognitionThreeLevelResultState) => state?.isLoading
);

export const isSubmitResultNumberRecognitionThreeLevelResult = createSelector(
  selectNumberRecognitionThreeLevelResultState,
  (state: NumberRecognitionThreeLevelResultState) => state?.isSubmitResult
);
