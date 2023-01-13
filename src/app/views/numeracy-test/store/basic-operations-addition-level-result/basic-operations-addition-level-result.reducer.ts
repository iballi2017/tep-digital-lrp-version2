import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { BasicOperationsAdditionLevelResult } from './basic-operations-addition-level-result.model';
import * as BasicOperationsAdditionLevelResultActions from './basic-operations-addition-level-result.actions';

export const basicOperationsAdditionLevelResultsFeatureKey = 'basicOperationsAdditionLevelResults';

export interface State extends EntityState<BasicOperationsAdditionLevelResult> {
  // additional entities state properties
}

export const adapter: EntityAdapter<BasicOperationsAdditionLevelResult> = createEntityAdapter<BasicOperationsAdditionLevelResult>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(BasicOperationsAdditionLevelResultActions.addBasicOperationsAdditionLevelResult,
    (state, action) => adapter.addOne(action.basicOperationsAdditionLevelResult, state)
  ),
  on(BasicOperationsAdditionLevelResultActions.upsertBasicOperationsAdditionLevelResult,
    (state, action) => adapter.upsertOne(action.basicOperationsAdditionLevelResult, state)
  ),
  on(BasicOperationsAdditionLevelResultActions.addBasicOperationsAdditionLevelResults,
    (state, action) => adapter.addMany(action.basicOperationsAdditionLevelResults, state)
  ),
  on(BasicOperationsAdditionLevelResultActions.upsertBasicOperationsAdditionLevelResults,
    (state, action) => adapter.upsertMany(action.basicOperationsAdditionLevelResults, state)
  ),
  on(BasicOperationsAdditionLevelResultActions.updateBasicOperationsAdditionLevelResult,
    (state, action) => adapter.updateOne(action.basicOperationsAdditionLevelResult, state)
  ),
  on(BasicOperationsAdditionLevelResultActions.updateBasicOperationsAdditionLevelResults,
    (state, action) => adapter.updateMany(action.basicOperationsAdditionLevelResults, state)
  ),
  on(BasicOperationsAdditionLevelResultActions.deleteBasicOperationsAdditionLevelResult,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(BasicOperationsAdditionLevelResultActions.deleteBasicOperationsAdditionLevelResults,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(BasicOperationsAdditionLevelResultActions.loadBasicOperationsAdditionLevelResults,
    (state, action) => adapter.setAll(action.basicOperationsAdditionLevelResults, state)
  ),
  on(BasicOperationsAdditionLevelResultActions.clearBasicOperationsAdditionLevelResults,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
