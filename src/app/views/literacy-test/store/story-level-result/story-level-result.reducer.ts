import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { StoryLevelResult } from './story-level-result.model';
import * as StoryLevelResultActions from './story-level-result.actions';

export const storyLevelResultsFeatureKey = 'storyLevelResults';

export interface StoryLevelResultsState extends EntityState<StoryLevelResult> {
  // additional entities state properties
}

export const adapter: EntityAdapter<StoryLevelResult> =
  createEntityAdapter<StoryLevelResult>();

export const initialState: StoryLevelResultsState = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(StoryLevelResultActions.loadStoryLevelResults, (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(StoryLevelResultActions.loadStoryLevelResultsSuccess, (state, action) =>
    adapter.setAll(action.storyLevelResults, state)
  ),
  on(StoryLevelResultActions.loadStoryLevelResultsSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(
    StoryLevelResultActions.loadStoryLevelResultsFailure,
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
