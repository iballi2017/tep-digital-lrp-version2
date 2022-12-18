import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ParagraphLevelResult } from './paragraph-level-result.model';
import * as ParagraphLevelResultActions from './paragraph-level-result.actions';

export const paragraphLevelResultsFeatureKey = 'paragraphLevelResults';

export interface ParagraphLevelResultsState extends EntityState<ParagraphLevelResult> {
  // additional entities state properties
}

export const adapter: EntityAdapter<ParagraphLevelResult> = createEntityAdapter<ParagraphLevelResult>();

export const initialState: ParagraphLevelResultsState = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
 
  
  on(ParagraphLevelResultActions.loadParagraphLevelResults, (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(ParagraphLevelResultActions.loadParagraphLevelResultsSuccess, (state, action) =>
    adapter.setAll(action.paragraphLevelResults, state)
  ),  
  on(ParagraphLevelResultActions.loadParagraphLevelResultsSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(ParagraphLevelResultActions.loadParagraphLevelResults, (state, action:any) => {
    return {
      ...state,
      error: action?.error,
      isLoading: false,
    };
  })
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
