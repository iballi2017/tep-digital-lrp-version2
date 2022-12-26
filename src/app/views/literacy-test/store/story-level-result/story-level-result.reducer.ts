import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { StoryLevelResult } from './story-level-result.model';
import * as StoryLevelResultActions from './story-level-result.actions';

export const storyLevelResultFeatureKey = 'storyLevelResult';

export interface StoryLevelResultState extends EntityState<StoryLevelResult> {
  // additional entities state properties
}

export const adapter: EntityAdapter<StoryLevelResult> =
  createEntityAdapter<StoryLevelResult>();

export const initialState: StoryLevelResultState = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(StoryLevelResultActions.loadStoryLevelResult, (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(StoryLevelResultActions.loadStoryLevelResultSuccess, (state, action) =>
    adapter.setAll(action.storyLevelResult, state)
  ),
  on(StoryLevelResultActions.loadStoryLevelResultSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(
    StoryLevelResultActions.loadStoryLevelResultFailure,
    (state, action: any) => {
      return {
        ...state,
        error: action?.error,
        isLoading: false,
      };
    }
  )
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();