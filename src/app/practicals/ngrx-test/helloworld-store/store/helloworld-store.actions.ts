import { createAction, props } from '@ngrx/store';

export const loadHelloworldStores = createAction(
  '[HelloworldStore] Load HelloworldStores'
);

export const loadHelloworldStoresSuccess = createAction(
  '[HelloworldStore] Load HelloworldStores Success',
  props<{ data: any }>()
);

export const loadHelloworldStoresFailure = createAction(
  '[HelloworldStore] Load HelloworldStores Failure',
  props<{ error: any }>()
);
