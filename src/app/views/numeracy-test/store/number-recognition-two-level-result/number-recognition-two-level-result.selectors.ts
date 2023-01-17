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

// export const letterLevelResult = createSelector(
//   selectNumberRecognitionTwoLevelResultState,
//   (state: NumberRecognitionTwoLevelResultState) => state.result
// );
export const numberRecognitionTwoLevelResultIsLoading = createSelector(
  selectNumberRecognitionTwoLevelResultState,
  (state: NumberRecognitionTwoLevelResultState) => state?.isLoading
);
// export const isSubmitResultLetterLevelResult = createSelector(
//   selectNumberRecognitionTwoLevelResultState,
//   (state: NumberRecognitionTwoLevelResultState) => state?.isSubmitResult
// );
