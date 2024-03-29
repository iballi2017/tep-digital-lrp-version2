import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  placeValueLevelResultsFeatureKey,
  selectAll,
  PlaceValueLevelResultState,
} from './place-value-level-result.reducer';

export const selectPlaceValueLevelResultState =
  createFeatureSelector<PlaceValueLevelResultState>(placeValueLevelResultsFeatureKey);

export const selectPlaceValueLevelResult = createSelector(
  selectPlaceValueLevelResultState,
  selectAll
);


export const numberRecognitionOneLevelResult = createSelector(
  selectPlaceValueLevelResultState,
  (state: PlaceValueLevelResultState) => state.result
);
export const placeValueLevelResultIsLoading = createSelector(
  selectPlaceValueLevelResultState,
  (state: PlaceValueLevelResultState) => state?.isLoading
);
export const isSubmitResultPlaceValueLevelResult = createSelector(
  selectPlaceValueLevelResultState,
  (state: PlaceValueLevelResultState) => state?.isSubmitResult
);