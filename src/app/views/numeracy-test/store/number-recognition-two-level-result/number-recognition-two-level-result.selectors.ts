import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  numberRecognitionTwoLevelResultsFeatureKey,
  selectAll,
  NumberRecognitionTwoLevelResultState,
} from './number-recognition-two-level-result.reducer';

export const selectNumberRecognitionTwoLevelResultState =
  createFeatureSelector<NumberRecognitionTwoLevelResultState>(numberRecognitionTwoLevelResultsFeatureKey);

export const selectNumberRecognitionTwoLevelResult = createSelector(
  selectNumberRecognitionTwoLevelResultState,
  selectAll
);


export const numberRecognitionOneLevelResult = createSelector(
  selectNumberRecognitionTwoLevelResultState,
  (state: NumberRecognitionTwoLevelResultState) => state.result
);
export const numberRecognitionTwoLevelResultIsLoading = createSelector(
  selectNumberRecognitionTwoLevelResultState,
  (state: NumberRecognitionTwoLevelResultState) => state?.isLoading
);
export const isSubmitResultNumberRecognitionTwoLevelResult = createSelector(
  selectNumberRecognitionTwoLevelResultState,
  (state: NumberRecognitionTwoLevelResultState) => state?.isSubmitResult
);