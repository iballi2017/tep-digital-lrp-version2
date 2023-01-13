import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { BasicOperationsMultiplicationLevelResult } from './basic-operations-multiplication-level-result.model';
import * as BasicOperationsMultiplicationLevelResultActions from './basic-operations-multiplication-level-result.actions';

export const basicOperationsMultiplicationLevelResultsFeatureKey = 'basicOperationsMultiplicationLevelResults';

export interface State extends EntityState<BasicOperationsMultiplicationLevelResult> {
  // additional entities state properties
}

export const adapter: EntityAdapter<BasicOperationsMultiplicationLevelResult> = createEntityAdapter<BasicOperationsMultiplicationLevelResult>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(BasicOperationsMultiplicationLevelResultActions.addBasicOperationsMultiplicationLevelResult,
    (state, action) => adapter.addOne(action.basicOperationsMultiplicationLevelResult, state)
  ),
  on(BasicOperationsMultiplicationLevelResultActions.upsertBasicOperationsMultiplicationLevelResult,
    (state, action) => adapter.upsertOne(action.basicOperationsMultiplicationLevelResult, state)
  ),
  on(BasicOperationsMultiplicationLevelResultActions.addBasicOperationsMultiplicationLevelResults,
    (state, action) => adapter.addMany(action.basicOperationsMultiplicationLevelResults, state)
  ),
  on(BasicOperationsMultiplicationLevelResultActions.upsertBasicOperationsMultiplicationLevelResults,
    (state, action) => adapter.upsertMany(action.basicOperationsMultiplicationLevelResults, state)
  ),
  on(BasicOperationsMultiplicationLevelResultActions.updateBasicOperationsMultiplicationLevelResult,
    (state, action) => adapter.updateOne(action.basicOperationsMultiplicationLevelResult, state)
  ),
  on(BasicOperationsMultiplicationLevelResultActions.updateBasicOperationsMultiplicationLevelResults,
    (state, action) => adapter.updateMany(action.basicOperationsMultiplicationLevelResults, state)
  ),
  on(BasicOperationsMultiplicationLevelResultActions.deleteBasicOperationsMultiplicationLevelResult,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(BasicOperationsMultiplicationLevelResultActions.deleteBasicOperationsMultiplicationLevelResults,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(BasicOperationsMultiplicationLevelResultActions.loadBasicOperationsMultiplicationLevelResults,
    (state, action) => adapter.setAll(action.basicOperationsMultiplicationLevelResults, state)
  ),
  on(BasicOperationsMultiplicationLevelResultActions.clearBasicOperationsMultiplicationLevelResults,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
