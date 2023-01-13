import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { PlaceValueLevelResult } from './place-value-level-result.model';
import * as PlaceValueLevelResultActions from './place-value-level-result.actions';

export const placeValueLevelResultsFeatureKey = 'placeValueLevelResults';

export interface State extends EntityState<PlaceValueLevelResult> {
  // additional entities state properties
}

export const adapter: EntityAdapter<PlaceValueLevelResult> = createEntityAdapter<PlaceValueLevelResult>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(PlaceValueLevelResultActions.addPlaceValueLevelResult,
    (state, action) => adapter.addOne(action.placeValueLevelResult, state)
  ),
  on(PlaceValueLevelResultActions.upsertPlaceValueLevelResult,
    (state, action) => adapter.upsertOne(action.placeValueLevelResult, state)
  ),
  on(PlaceValueLevelResultActions.addPlaceValueLevelResults,
    (state, action) => adapter.addMany(action.placeValueLevelResults, state)
  ),
  on(PlaceValueLevelResultActions.upsertPlaceValueLevelResults,
    (state, action) => adapter.upsertMany(action.placeValueLevelResults, state)
  ),
  on(PlaceValueLevelResultActions.updatePlaceValueLevelResult,
    (state, action) => adapter.updateOne(action.placeValueLevelResult, state)
  ),
  on(PlaceValueLevelResultActions.updatePlaceValueLevelResults,
    (state, action) => adapter.updateMany(action.placeValueLevelResults, state)
  ),
  on(PlaceValueLevelResultActions.deletePlaceValueLevelResult,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(PlaceValueLevelResultActions.deletePlaceValueLevelResults,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(PlaceValueLevelResultActions.loadPlaceValueLevelResults,
    (state, action) => adapter.setAll(action.placeValueLevelResults, state)
  ),
  on(PlaceValueLevelResultActions.clearPlaceValueLevelResults,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
