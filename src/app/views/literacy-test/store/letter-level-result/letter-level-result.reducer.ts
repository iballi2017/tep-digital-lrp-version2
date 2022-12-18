import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { LetterLevelResult } from './letter-level-result.model';
import * as LetterLevelResultActions from './letter-level-result.actions';

export const letterLevelResultsFeatureKey = 'letterLevelResults';

export interface LetterLevelResultState extends EntityState<LetterLevelResult> {
  // additional entities state properties
  error: any,
  isLoading: boolean
}

export const adapter: EntityAdapter<LetterLevelResult> =
  createEntityAdapter<LetterLevelResult>();

export const initialState: LetterLevelResultState = adapter.getInitialState({
  // additional entity state properties
  error: undefined,
  isLoading: false,
});

export const reducer = createReducer(
  initialState,

  
  on(LetterLevelResultActions.loadLetterLevelResults, (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(LetterLevelResultActions.loadLetterLevelResultsSuccess, (state, action) =>
    adapter.setAll(action.letterLevelResults, state)
  ),  
  on(LetterLevelResultActions.loadLetterLevelResultsSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(LetterLevelResultActions.loadLetterLevelResults, (state, action:any) => {
    return {
      ...state,
      error: action?.error,
      isLoading: false,
    };
  })
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
