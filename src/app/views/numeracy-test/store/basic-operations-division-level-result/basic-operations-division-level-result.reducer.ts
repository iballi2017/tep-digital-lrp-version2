import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { BasicOperationsDivisionLevelResult } from './basic-operations-division-level-result.model';
import * as BasicOperationsDivisionLevelResultActions from './basic-operations-division-level-result.actions';

export const basicOperationsDivisionLevelResultsFeatureKey = 'basicOperationsDivisionLevelResults';

export interface State extends EntityState<BasicOperationsDivisionLevelResult> {
  // additional entities state properties
}

export const adapter: EntityAdapter<BasicOperationsDivisionLevelResult> = createEntityAdapter<BasicOperationsDivisionLevelResult>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(BasicOperationsDivisionLevelResultActions.addBasicOperationsDivisionLevelResult,
    (state, action) => adapter.addOne(action.basicOperationsDivisionLevelResult, state)
  ),
  on(BasicOperationsDivisionLevelResultActions.upsertBasicOperationsDivisionLevelResult,
    (state, action) => adapter.upsertOne(action.basicOperationsDivisionLevelResult, state)
  ),
  on(BasicOperationsDivisionLevelResultActions.addBasicOperationsDivisionLevelResults,
    (state, action) => adapter.addMany(action.basicOperationsDivisionLevelResults, state)
  ),
  on(BasicOperationsDivisionLevelResultActions.upsertBasicOperationsDivisionLevelResults,
    (state, action) => adapter.upsertMany(action.basicOperationsDivisionLevelResults, state)
  ),
  on(BasicOperationsDivisionLevelResultActions.updateBasicOperationsDivisionLevelResult,
    (state, action) => adapter.updateOne(action.basicOperationsDivisionLevelResult, state)
  ),
  on(BasicOperationsDivisionLevelResultActions.updateBasicOperationsDivisionLevelResults,
    (state, action) => adapter.updateMany(action.basicOperationsDivisionLevelResults, state)
  ),
  on(BasicOperationsDivisionLevelResultActions.deleteBasicOperationsDivisionLevelResult,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(BasicOperationsDivisionLevelResultActions.deleteBasicOperationsDivisionLevelResults,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(BasicOperationsDivisionLevelResultActions.loadBasicOperationsDivisionLevelResults,
    (state, action) => adapter.setAll(action.basicOperationsDivisionLevelResults, state)
  ),
  on(BasicOperationsDivisionLevelResultActions.clearBasicOperationsDivisionLevelResults,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
