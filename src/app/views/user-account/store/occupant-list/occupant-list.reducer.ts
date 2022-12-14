import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { OccupantList } from './occupant-list.model';
import * as OccupantListActions from './occupant-list.actions';

export const occupantListFeatureKey = 'occupantLists';

export interface OccupantListState extends EntityState<OccupantList> {
  // additional entities state properties
  occupantList: any[] | any;
  selectedOccupant: any;
  error: any
}

export const adapter: EntityAdapter<OccupantList> = createEntityAdapter<OccupantList>();

export const initialState: OccupantListState = adapter.getInitialState({
  // additional entity state properties
  occupantList: undefined,
  selectedOccupant: undefined,
  error: undefined
});

export const reducer = createReducer(
  initialState,
  on(OccupantListActions.loadOccupantListSuccess,
    (state, action: any) => {
      return {
        ...state,
        occupantList: action?.occupantList,
      };
    }
    //  adapter.setAll(action.occupantList, state)
  ),

  on(OccupantListActions.loadOccupantListFailure,
    (state, action: any) => {
      return {
        ...state,
        error: action.error,
      };
    }
  ),



  // on(OccupantListActions.addOccupantList,
  //   (state, action) => adapter.addOne(action.occupantList, state)
  // ),
  // on(OccupantListActions.upsertOccupantList,
  //   (state, action) => adapter.upsertOne(action.occupantList, state)
  // ),
  // on(OccupantListActions.addOccupantLists,
  //   (state, action) => adapter.addMany(action.occupantLists, state)
  // ),
  // on(OccupantListActions.upsertOccupantLists,
  //   (state, action) => adapter.upsertMany(action.occupantLists, state)
  // ),
  // on(OccupantListActions.updateOccupantList,
  //   (state, action) => adapter.updateOne(action.occupantList, state)
  // ),
  // on(OccupantListActions.updateOccupantLists,
  //   (state, action) => adapter.updateMany(action.occupantLists, state)
  // ),
  // on(OccupantListActions.deleteOccupantList,
  //   (state, action) => adapter.removeOne(action.id, state)
  // ),
  // on(OccupantListActions.deleteOccupantLists,
  //   (state, action) => adapter.removeMany(action.ids, state)
  // ),
  // on(OccupantListActions.loadOccupantLists,
  //   (state, action) => adapter.setAll(action.occupantLists, state)
  // ),
  // on(OccupantListActions.clearOccupantLists,
  //   state => adapter.removeAll(state)
  // ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
