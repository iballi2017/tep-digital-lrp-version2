import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "src/environments/environment";


export const productStateFeatureKey = 'productState';
export interface ProductState {

}

export const reducers: ActionReducerMap<ProductState> = {

}

export const metaReducers: MetaReducer<ProductState>[] = !environment.production ? [] : [];

