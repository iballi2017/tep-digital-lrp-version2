import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { SpeechTexts } from './speech-texts.model';
import * as SpeechTextsActions from './speech-texts.actions';

export const speechTextsListFeatureKey = 'speechTextsList';

export interface SpeechTextsState extends EntityState<SpeechTexts> {
  // additional entities state properties
  speechTexts: any,
  isLoading: any,
  error: any,
}

export const adapter: EntityAdapter<SpeechTexts> = createEntityAdapter<SpeechTexts>();

export const initialState: SpeechTextsState = adapter.getInitialState({
  // additional entity state properties
  speechTexts: undefined,
  isLoading: undefined,
  error: undefined,
});

export const reducer = createReducer(
  initialState,

  /* Load Speech */
  on(SpeechTextsActions.loadSpeechTextsList, (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(SpeechTextsActions.loadSpeechTextsListSuccess,
    (state, action) => adapter.setAll(action.speechTextsList, state)
  ),
  on(SpeechTextsActions.loadSpeechTextsListSuccess,
    (state, action) => {
      return {
        ...state,
        isLoading: false
      }
    }
  ),
  on(SpeechTextsActions.loadSpeechTextsListFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    }
  ),


  /* Add Speech */
  on(SpeechTextsActions.addSpeechTexts,
    (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    }
  ),
  on(
    SpeechTextsActions.addSpeechTextsSuccess,
    (state, action) => {
      return {
        ...state,
        speechTexts: action.speechTexts,
        isLoading: false,
      };
    }
  ),
  on(
    SpeechTextsActions.addSpeechTextsFailure,
    (state, action) => {
      return {
        ...state,
        error: action?.error,
        isLoading: false,
      };
    }
  ),



  // on(SpeechTextsActions.addSpeechTexts,
  //   (state, action) => adapter.addOne(action.speechTexts, state)
  // ),
  // on(SpeechTextsActions.upsertSpeechTexts,
  //   (state, action) => adapter.upsertOne(action.speechTexts, state)
  // ),
  // on(SpeechTextsActions.addSpeechTextsList,
  //   (state, action) => adapter.addMany(action.speechTextsList, state)
  // ),
  // on(SpeechTextsActions.upsertSpeechTextsList,
  //   (state, action) => adapter.upsertMany(action.speechTextsList, state)
  // ),
  // on(SpeechTextsActions.updateSpeechTexts,
  //   (state, action) => adapter.updateOne(action.speechTexts, state)
  // ),
  // on(SpeechTextsActions.updateSpeechTextsList,
  //   (state, action) => adapter.updateMany(action.speechTextsList, state)
  // ),
  // on(SpeechTextsActions.deleteSpeechTexts,
  //   (state, action) => adapter.removeOne(action.id, state)
  // ),
  // on(SpeechTextsActions.deleteSpeechTextsList,
  //   (state, action) => adapter.removeMany(action.ids, state)
  // ),
  // on(SpeechTextsActions.loadSpeechTextsList,
  //   (state, action) => adapter.setAll(action.speechTextsList, state)
  // ),
  // on(SpeechTextsActions.clearSpeechTextsList,
  //   state => adapter.removeAll(state)
  // ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
