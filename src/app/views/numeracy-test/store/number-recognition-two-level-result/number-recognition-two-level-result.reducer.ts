import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { NumberRecognitionTwoLevelResult } from './number-recognition-two-level-result.model';
import * as NumberRecognitionTwoLevelResultActions from './number-recognition-two-level-result.actions';

export const numberRecognitionTwoLevelResultsFeatureKey = 'numberRecognitionTwoLevelResults';

export interface State extends EntityState<NumberRecognitionTwoLevelResult> {
  // additional entities state properties
}

export const adapter: EntityAdapter<NumberRecognitionTwoLevelResult> = createEntityAdapter<NumberRecognitionTwoLevelResult>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(NumberRecognitionTwoLevelResultActions.addNumberRecognitionTwoLevelResult,
    (state, action) => adapter.addOne(action.numberRecognitionTwoLevelResult, state)
  ),
  on(NumberRecognitionTwoLevelResultActions.upsertNumberRecognitionTwoLevelResult,
    (state, action) => adapter.upsertOne(action.numberRecognitionTwoLevelResult, state)
  ),
  on(NumberRecognitionTwoLevelResultActions.addNumberRecognitionTwoLevelResults,
    (state, action) => adapter.addMany(action.numberRecognitionTwoLevelResults, state)
  ),
  on(NumberRecognitionTwoLevelResultActions.upsertNumberRecognitionTwoLevelResults,
    (state, action) => adapter.upsertMany(action.numberRecognitionTwoLevelResults, state)
  ),
  on(NumberRecognitionTwoLevelResultActions.updateNumberRecognitionTwoLevelResult,
    (state, action) => adapter.updateOne(action.numberRecognitionTwoLevelResult, state)
  ),
  on(NumberRecognitionTwoLevelResultActions.updateNumberRecognitionTwoLevelResults,
    (state, action) => adapter.updateMany(action.numberRecognitionTwoLevelResults, state)
  ),
  on(NumberRecognitionTwoLevelResultActions.deleteNumberRecognitionTwoLevelResult,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(NumberRecognitionTwoLevelResultActions.deleteNumberRecognitionTwoLevelResults,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(NumberRecognitionTwoLevelResultActions.loadNumberRecognitionTwoLevelResults,
    (state, action) => adapter.setAll(action.numberRecognitionTwoLevelResults, state)
  ),
  on(NumberRecognitionTwoLevelResultActions.clearNumberRecognitionTwoLevelResults,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
