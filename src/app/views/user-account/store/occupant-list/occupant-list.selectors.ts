import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  occupantListFeatureKey,
  OccupantListState,
  selectAll,
} from './occupant-list.reducer';

export const selectOccupantListState = createFeatureSelector<OccupantListState>(
  occupantListFeatureKey
);

// export const selectOccupants = createSelector(selectOccupantListState,
//     (state: OccupantListState) => state.occupantList);
export const selectOccupants = createSelector(
  selectOccupantListState,
  selectAll
);

export const selectedOccupant = createSelector(
  selectOccupantListState,
  (state: OccupantListState) => state.selectedOccupant
);


export const isLoadingOccupantState = createSelector(
    selectOccupantListState,
    (state: OccupantListState) => state.isLoading
  );
  