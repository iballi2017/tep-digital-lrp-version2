import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { NumberRecognitionThreeLevelResult } from './number-recognition-three-level-result.model';
import * as NumberRecognitionThreeLevelResultActions from './number-recognition-three-level-result.actions';

export const numberRecognitionThreeLevelResultsFeatureKey = 'numberRecognitionThreeLevelResults';

export interface State extends EntityState<NumberRecognitionThreeLevelResult> {
  // additional entities state properties
}

export const adapter: EntityAdapter<NumberRecognitionThreeLevelResult> = createEntityAdapter<NumberRecognitionThreeLevelResult>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(NumberRecognitionThreeLevelResultActions.addNumberRecognitionThreeLevelResult,
    (state, action) => adapter.addOne(action.numberRecognitionThreeLevelResult, state)
  ),
  on(NumberRecognitionThreeLevelResultActions.upsertNumberRecognitionThreeLevelResult,
    (state, action) => adapter.upsertOne(action.numberRecognitionThreeLevelResult, state)
  ),
  on(NumberRecognitionThreeLevelResultActions.addNumberRecognitionThreeLevelResults,
    (state, action) => adapter.addMany(action.numberRecognitionThreeLevelResults, state)
  ),
  on(NumberRecognitionThreeLevelResultActions.upsertNumberRecognitionThreeLevelResults,
    (state, action) => adapter.upsertMany(action.numberRecognitionThreeLevelResults, state)
  ),
  on(NumberRecognitionThreeLevelResultActions.updateNumberRecognitionThreeLevelResult,
    (state, action) => adapter.updateOne(action.numberRecognitionThreeLevelResult, state)
  ),
  on(NumberRecognitionThreeLevelResultActions.updateNumberRecognitionThreeLevelResults,
    (state, action) => adapter.updateMany(action.numberRecognitionThreeLevelResults, state)
  ),
  on(NumberRecognitionThreeLevelResultActions.deleteNumberRecognitionThreeLevelResult,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(NumberRecognitionThreeLevelResultActions.deleteNumberRecognitionThreeLevelResults,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(NumberRecognitionThreeLevelResultActions.loadNumberRecognitionThreeLevelResults,
    (state, action) => adapter.setAll(action.numberRecognitionThreeLevelResults, state)
  ),
  on(NumberRecognitionThreeLevelResultActions.clearNumberRecognitionThreeLevelResults,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
