import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { SpeechTexts } from './speech-texts.model';


/* Load Speech texts */
export const loadSpeechTextsList = createAction(
  '[SpeechTexts Component] Load SpeechTextsList'
);
export const loadSpeechTextsListSuccess = createAction(
  '[SpeechTexts Component] Load SpeechTextsList Success', 
  props<{ speechTextsList: SpeechTexts[] }>()
);
export const loadSpeechTextsListFailure = createAction(
  '[SpeechTexts Component] Load SpeechTextsList Failure', 
  props<{ error: any }>()
);

/* Add Speech texts */
export const addSpeechTexts = createAction(
  '[SpeechTexts Component] Add SpeechTexts',
);

export const addSpeechTextsSuccess = createAction(
  '[SpeechTexts Component] Add SpeechTexts Success',
  props<{ speechTexts: any }>()
);
export const addSpeechTextsFailure = createAction(
  '[SpeechTexts Component] Add SpeechTexts Failure',
  props<{ error: any }>()
);


// export const upsertSpeechTexts = createAction(
//   '[SpeechTexts/API] Upsert SpeechTexts',
//   props<{ speechTexts: SpeechTexts }>()
// );

// export const addSpeechTextsList = createAction(
//   '[SpeechTexts/API] Add SpeechTextsList',
//   props<{ speechTextsList: SpeechTexts[] }>()
// );

// export const upsertSpeechTextsList = createAction(
//   '[SpeechTexts/API] Upsert SpeechTextsList',
//   props<{ speechTextsList: SpeechTexts[] }>()
// );

// export const updateSpeechTexts = createAction(
//   '[SpeechTexts/API] Update SpeechTexts',
//   props<{ speechTexts: Update<SpeechTexts> }>()
// );

// export const updateSpeechTextsList = createAction(
//   '[SpeechTexts/API] Update SpeechTextsList',
//   props<{ speechTextsList: Update<SpeechTexts>[] }>()
// );

// export const deleteSpeechTexts = createAction(
//   '[SpeechTexts/API] Delete SpeechTexts',
//   props<{ id: string }>()
// );

// export const deleteSpeechTextsList = createAction(
//   '[SpeechTexts/API] Delete SpeechTextsList',
//   props<{ ids: string[] }>()
// );

// export const clearSpeechTextsList = createAction(
//   '[SpeechTexts/API] Clear SpeechTextsList'
// );
