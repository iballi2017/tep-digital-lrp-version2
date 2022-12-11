import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "src/environments/environment";


export const productStateFeatureKey = 'productState';
export interface HelloworldState {

}

export const reducers: ActionReducerMap<HelloworldState> = {

}

export const metaReducers: MetaReducer<HelloworldState>[] = !environment.production ? [] : [];

