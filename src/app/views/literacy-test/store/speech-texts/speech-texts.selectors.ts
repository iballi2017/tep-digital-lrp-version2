import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectAll, speechTextsListFeatureKey, SpeechTextsState } from './speech-texts.reducer';

export const selectSpeechTextsState = createFeatureSelector<SpeechTextsState>(
  speechTextsListFeatureKey
);

// export const selectSpeechTexts = createSelector(
//   selectSpeechTextsState,
//   selectAll
// );
export const speechTexts = createSelector(
  selectSpeechTextsState,
    (state: SpeechTextsState) => state.speechTexts
);
