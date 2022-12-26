import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ParagraphLevelResult } from './paragraph-level-result.model';
import * as ParagraphLevelResultActions from './paragraph-level-result.actions';

export const paragraphLevelResultFeatureKey = 'paragraphLevelResult';

export interface ParagraphLevelResultState extends EntityState<ParagraphLevelResult> {
  // additional entities state properties
}

export const adapter: EntityAdapter<ParagraphLevelResult> = createEntityAdapter<ParagraphLevelResult>();

export const initialState: ParagraphLevelResultState = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
 
  
  on(ParagraphLevelResultActions.loadParagraphLevelResult, (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(ParagraphLevelResultActions.loadParagraphLevelResultSuccess, (state, action) =>
    adapter.setAll(action.paragraphLevelResult, state)
  ),  
  on(ParagraphLevelResultActions.loadParagraphLevelResultSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(ParagraphLevelResultActions.loadParagraphLevelResult, (state, action:any) => {
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
