import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { PlaceValueLevelResult } from './place-value-level-result.model';
import * as PlaceValueLevelResultActions from './place-value-level-result.actions';

export const placeValueLevelResultsFeatureKey = 'placeValueLevelResults';

export interface PlaceValueLevelResultState extends EntityState<PlaceValueLevelResult> {
  // additional entities state properties
  isLoading: boolean;
  error: any;
  isSubmitResult: boolean;
  result: any;
}

export const adapter: EntityAdapter<PlaceValueLevelResult> = createEntityAdapter<PlaceValueLevelResult>();

export const initialState: PlaceValueLevelResultState = adapter.getInitialState({
  // additional entity state properties
    isLoading: false,
    error: null,
    isSubmitResult: false,
    result: undefined,
});

export const reducer = createReducer(
  initialState,
  
  on(
    PlaceValueLevelResultActions.loadPlaceValueLevelResult,
    (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    }
  ),
  on(
    PlaceValueLevelResultActions.loadPlaceValueLevelResultSuccess,
    (state, action) =>
      adapter.setAll(action.placeValueLevelResult, state)
  ),
  on(
    PlaceValueLevelResultActions.loadPlaceValueLevelResultSuccess,
    (state, action) => {
      return {
        ...state,
        isLoading: false,
      };
    }
  ),
  on(
    PlaceValueLevelResultActions.loadPlaceValueLevelResultFailure,
    (state, action) => {
      return {
        ...state,
        error: action?.error,
        isLoading: false,
      };
    }
  ),

  



  /* ADD NUMBER_RECOGNITION_TWO LEVEL STAGE ONE RESULT */
  on(PlaceValueLevelResultActions.addPlaceValueLevelStageOneResult, (state, action) => {
    return {
      ...state,
      isSubmitResult: true,
    };
  }),
  on(
    PlaceValueLevelResultActions.addPlaceValueLevelStageOneResultSuccess,
    (state, action) => {
      return {
        ...state,
        result: action.payload,
      };
    }
  ),
  on(
    PlaceValueLevelResultActions.addPlaceValueLevelStageOneResultSuccess,
    (state, action) => {
      return {
        ...state,
        isSubmitResult: false,
      };
    }
  ),
  on(
    PlaceValueLevelResultActions.addPlaceValueLevelStageOneResultFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
        isSubmitResult: false,
      };
    }
  ),


  
  // on(PlaceValueLevelResultActions.addPlaceValueLevelResult,
  //   (state, action) => adapter.addOne(action.placeValueLevelResult, state)
  // ),
  // on(PlaceValueLevelResultActions.upsertPlaceValueLevelResult,
  //   (state, action) => adapter.upsertOne(action.placeValueLevelResult, state)
  // ),
  // on(PlaceValueLevelResultActions.addPlaceValueLevelResults,
  //   (state, action) => adapter.addMany(action.placeValueLevelResults, state)
  // ),
  // on(PlaceValueLevelResultActions.upsertPlaceValueLevelResults,
  //   (state, action) => adapter.upsertMany(action.placeValueLevelResults, state)
  // ),
  // on(PlaceValueLevelResultActions.updatePlaceValueLevelResult,
  //   (state, action) => adapter.updateOne(action.placeValueLevelResult, state)
  // ),
  // on(PlaceValueLevelResultActions.updatePlaceValueLevelResults,
  //   (state, action) => adapter.updateMany(action.placeValueLevelResults, state)
  // ),
  // on(PlaceValueLevelResultActions.deletePlaceValueLevelResult,
  //   (state, action) => adapter.removeOne(action.id, state)
  // ),
  // on(PlaceValueLevelResultActions.deletePlaceValueLevelResults,
  //   (state, action) => adapter.removeMany(action.ids, state)
  // ),
  // on(PlaceValueLevelResultActions.loadPlaceValueLevelResults,
  //   (state, action) => adapter.setAll(action.placeValueLevelResults, state)
  // ),
  // on(PlaceValueLevelResultActions.clearPlaceValueLevelResults,
  //   state => adapter.removeAll(state)
  // ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
