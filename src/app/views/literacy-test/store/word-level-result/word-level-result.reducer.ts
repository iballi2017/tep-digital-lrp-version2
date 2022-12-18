import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { WordLevelResult } from './word-level-result.model';
import * as WordLevelResultActions from './word-level-result.actions';

export const wordLevelResultsFeatureKey = 'wordLevelResults';

export interface WordLevelResultsState extends EntityState<WordLevelResult> {
  // additional entities state properties
}

export const adapter: EntityAdapter<WordLevelResult> = createEntityAdapter<WordLevelResult>();

export const initialState: WordLevelResultsState = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,  
  on(WordLevelResultActions.loadWordLevelResults, (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(WordLevelResultActions.loadWordLevelResultsSuccess, (state, action) =>
    adapter.setAll(action.wordLevelResults, state)
  ),
  on(WordLevelResultActions.loadWordLevelResultsSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(
    WordLevelResultActions.loadWordLevelResultsFailure,
    (state, action: any) => {
      return {
        ...state,
        error: action?.error,
        isLoading: false,
      };
    }
  )
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
