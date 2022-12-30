import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Occupant } from './occupant-list.model';
import * as OccupantListActions from './occupant-list.actions';

export const occupantListFeatureKey = 'occupantLists';

export interface OccupantListState extends EntityState<Occupant> {
  // additional entities state properties
  // occupantList: any[] | any;
  selectedOccupant: any;
  isLoading: boolean;
  error: any;
}

export const adapter: EntityAdapter<Occupant> = createEntityAdapter<Occupant>();

export const initialState: OccupantListState = adapter.getInitialState({
  // additional entity state properties
  // occupantList: undefined,
  selectedOccupant: undefined,
  isLoading: false,
  error: undefined,
});

export const reducer = createReducer(
  initialState,
  // ADD OCCUPANT
  on(OccupantListActions.addOccupant, (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(OccupantListActions.addOccupantSuccess, (state, action) => {
    return adapter.addOne(action.occupant, state);
  }),
  on(OccupantListActions.addOccupantSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  // on(OccupantListActions.addOccupantFailure,
  //   (state, action) => adapter.addOne(action.error, state)
  // ),
  on(OccupantListActions.addOccupantFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
      isLoading: false,
    };
  }),

  // LOAD OCCUPANTS
  on(OccupantListActions.loadOccupantList, (state, action: any) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(OccupantListActions.loadOccupantListSuccess, (state, action: any) =>
    // {
    //   return {
    //     ...state,
    //     occupantList: action?.occupantList,
    //   };
    // }
    adapter.setAll(action.occupantList, state)
  ),
  on(OccupantListActions.loadOccupantListSuccess, (state, action: any) => {
    return {
      ...state,
      isLoading: false,
    };
  }),

  on(OccupantListActions.loadOccupantListFailure, (state, action: any) => {
    return {
      ...state,
      error: action.error,
      isLoading: false,
    };
  }),

  // LOAD SINGLE OCCUPANT
  on(OccupantListActions.loadSingleOccupantSuccess, (state, action) => {
    return {
      ...state,
      selectedOccupant: action.selectedOccupant,
    };
  }),
  on(OccupantListActions.loadSingleOccupantFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),

  // DELETE OCCUPANT
  on(OccupantListActions.deleteOccupant, (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(OccupantListActions.deleteOccupantSuccess, (state, action: any) =>
    adapter.removeOne(action.id.occ_id, state)
  ),
  on(OccupantListActions.deleteOccupantSuccess, (state, action: any) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(OccupantListActions.deleteOccupantFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
      isLoading: false,
    };
  })

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

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
