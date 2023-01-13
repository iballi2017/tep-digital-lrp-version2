import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { BasicOperationsSubtractionLevelResult } from './basic-operations-subtraction-level-result.model';
import * as BasicOperationsSubtractionLevelResultActions from './basic-operations-subtraction-level-result.actions';

export const basicOperationsSubtractionLevelResultsFeatureKey = 'basicOperationsSubtractionLevelResults';

export interface State extends EntityState<BasicOperationsSubtractionLevelResult> {
  // additional entities state properties
}

export const adapter: EntityAdapter<BasicOperationsSubtractionLevelResult> = createEntityAdapter<BasicOperationsSubtractionLevelResult>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(BasicOperationsSubtractionLevelResultActions.addBasicOperationsSubtractionLevelResult,
    (state, action) => adapter.addOne(action.basicOperationsSubtractionLevelResult, state)
  ),
  on(BasicOperationsSubtractionLevelResultActions.upsertBasicOperationsSubtractionLevelResult,
    (state, action) => adapter.upsertOne(action.basicOperationsSubtractionLevelResult, state)
  ),
  on(BasicOperationsSubtractionLevelResultActions.addBasicOperationsSubtractionLevelResults,
    (state, action) => adapter.addMany(action.basicOperationsSubtractionLevelResults, state)
  ),
  on(BasicOperationsSubtractionLevelResultActions.upsertBasicOperationsSubtractionLevelResults,
    (state, action) => adapter.upsertMany(action.basicOperationsSubtractionLevelResults, state)
  ),
  on(BasicOperationsSubtractionLevelResultActions.updateBasicOperationsSubtractionLevelResult,
    (state, action) => adapter.updateOne(action.basicOperationsSubtractionLevelResult, state)
  ),
  on(BasicOperationsSubtractionLevelResultActions.updateBasicOperationsSubtractionLevelResults,
    (state, action) => adapter.updateMany(action.basicOperationsSubtractionLevelResults, state)
  ),
  on(BasicOperationsSubtractionLevelResultActions.deleteBasicOperationsSubtractionLevelResult,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(BasicOperationsSubtractionLevelResultActions.deleteBasicOperationsSubtractionLevelResults,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(BasicOperationsSubtractionLevelResultActions.loadBasicOperationsSubtractionLevelResults,
    (state, action) => adapter.setAll(action.basicOperationsSubtractionLevelResults, state)
  ),
  on(BasicOperationsSubtractionLevelResultActions.clearBasicOperationsSubtractionLevelResults,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
