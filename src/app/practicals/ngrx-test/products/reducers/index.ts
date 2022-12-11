import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { Product } from '../../services/product.service';
import { ProductState } from '../store';
import { loadProductsSuccess } from '../store/product.actions';

export const productStateFeatureKey = 'productState';

// export interface State {

// }


export interface State {
  products: Product[],
  error: any
}
export const initialState: ProductState = {
  products: undefined,
  error: undefined

};

export const reducers = createReducer(
  initialState,
  on(loadProductsSuccess, (state, action) => {
    return {
      products: action.data
    }
  })
)


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
