import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { NumberRecognitionOneLevelResult } from './number-recognition-one-level-result.model';
import * as NumberRecognitionOneLevelResultActions from './number-recognition-one-level-result.actions';

export const numberRecognitionOneLevelResultsFeatureKey = 'numberRecognitionOneLevelResults';

export interface State extends EntityState<NumberRecognitionOneLevelResult> {
  // additional entities state properties
}

export const adapter: EntityAdapter<NumberRecognitionOneLevelResult> = createEntityAdapter<NumberRecognitionOneLevelResult>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(NumberRecognitionOneLevelResultActions.addNumberRecognitionOneLevelResult,
    (state, action) => adapter.addOne(action.numberRecognitionOneLevelResult, state)
  ),
  on(NumberRecognitionOneLevelResultActions.upsertNumberRecognitionOneLevelResult,
    (state, action) => adapter.upsertOne(action.numberRecognitionOneLevelResult, state)
  ),
  on(NumberRecognitionOneLevelResultActions.addNumberRecognitionOneLevelResults,
    (state, action) => adapter.addMany(action.numberRecognitionOneLevelResults, state)
  ),
  on(NumberRecognitionOneLevelResultActions.upsertNumberRecognitionOneLevelResults,
    (state, action) => adapter.upsertMany(action.numberRecognitionOneLevelResults, state)
  ),
  on(NumberRecognitionOneLevelResultActions.updateNumberRecognitionOneLevelResult,
    (state, action) => adapter.updateOne(action.numberRecognitionOneLevelResult, state)
  ),
  on(NumberRecognitionOneLevelResultActions.updateNumberRecognitionOneLevelResults,
    (state, action) => adapter.updateMany(action.numberRecognitionOneLevelResults, state)
  ),
  on(NumberRecognitionOneLevelResultActions.deleteNumberRecognitionOneLevelResult,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(NumberRecognitionOneLevelResultActions.deleteNumberRecognitionOneLevelResults,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(NumberRecognitionOneLevelResultActions.loadNumberRecognitionOneLevelResults,
    (state, action) => adapter.setAll(action.numberRecognitionOneLevelResults, state)
  ),
  on(NumberRecognitionOneLevelResultActions.clearNumberRecognitionOneLevelResults,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
