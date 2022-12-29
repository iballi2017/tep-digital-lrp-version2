import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectAll, speechTextsListFeatureKey, SpeechTextsState } from './speech-texts.reducer';

export const selectSpeechTextsState = createFeatureSelector<SpeechTextsState>(
  speechTextsListFeatureKey
);

export const selectParagraphLevelResult = createSelector(
  selectSpeechTextsState,
  selectAll
);