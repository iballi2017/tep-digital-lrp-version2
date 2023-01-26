import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { BasicOperationsAdditionLevelResult } from './basic-operations-addition-level-result.model';
import * as BasicOperationsAdditionLevelResultActions from './basic-operations-addition-level-result.actions';

export const basicOperationsAdditionLevelResultsFeatureKey =
  'basicOperationsAdditionLevelResults';

export interface BasicOperationsAdditionLevelResultState
  extends EntityState<BasicOperationsAdditionLevelResult> {
  // additional entities state properties
  isLoading: boolean;
  error: any;
  isSubmitResult: boolean;
  result: any;
}

export const adapter: EntityAdapter<BasicOperationsAdditionLevelResult> =
  createEntityAdapter<BasicOperationsAdditionLevelResult>();

export const initialState: BasicOperationsAdditionLevelResultState =
  adapter.getInitialState({
    // additional entity state properties
    isLoading: false,
    error: null,
    isSubmitResult: false,
    result: null
  });

export const reducer = createReducer(
  initialState,
  on(
    BasicOperationsAdditionLevelResultActions.loadBasicOperationsAdditionLevelResult,
    (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    }
  ),
  on(
    BasicOperationsAdditionLevelResultActions.loadBasicOperationsAdditionLevelResultSuccess,
    (state, action) =>
      adapter.setAll(action.basicOperationsAdditionLevelResult, state)
  ),
  on(
    BasicOperationsAdditionLevelResultActions.loadBasicOperationsAdditionLevelResultSuccess,
    (state, action) => {
      return {
        ...state,
        isLoading: false,
      };
    }
  ),
  on(
    BasicOperationsAdditionLevelResultActions.loadBasicOperationsAdditionLevelResultFailure,
    (state, action) => {
      return {
        ...state,
        error: action?.error,
        isLoading: false,
      };
    }
  ),


  /* ADD BASIC_OPERATIONS_ADDITION LEVEL STAGE ONE RESULT */
  on(BasicOperationsAdditionLevelResultActions.addBasicOperationsAdditionLevelStageOneResult, (state, action) => {
    return {
      ...state,
      isSubmitResult: true,
    };
  }),
  on(
    BasicOperationsAdditionLevelResultActions.addBasicOperationsAdditionLevelStageOneResultSuccess,
    (state, action) => {
      return {
        ...state,
        result: action.payload,
      };
    }
  ),
  on(
    BasicOperationsAdditionLevelResultActions.addBasicOperationsAdditionLevelStageOneResultSuccess,
    (state, action) => {
      return {
        ...state,
        isSubmitResult: false,
      };
    }
  ),
  on(
    BasicOperationsAdditionLevelResultActions.addBasicOperationsAdditionLevelStageOneResultFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
        isSubmitResult: false,
      };
    }
  ),


  /* ADD BASIC_OPERATIONS_ADDITION LEVEL STAGE TWO RESULT */
  on(BasicOperationsAdditionLevelResultActions.addBasicOperationsAdditionLevelStageTwoResult, (state, action) => {
    return {
      ...state,
      isSubmitResult: true,
    };
  }),
  on(
    BasicOperationsAdditionLevelResultActions.addBasicOperationsAdditionLevelStageTwoResultSuccess,
    (state, action) => {
      return {
        ...state,
        result: action.payload,
      };
    }
  ),
  on(
    BasicOperationsAdditionLevelResultActions.addBasicOperationsAdditionLevelStageTwoResultSuccess,
    (state, action) => {
      return {
        ...state,
        isSubmitResult: false,
      };
    }
  ),
  on(
    BasicOperationsAdditionLevelResultActions.addBasicOperationsAdditionLevelStageTwoResultFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
        isSubmitResult: false,
      };
    }
  ),




  // on(BasicOperationsAdditionLevelResultActions.addBasicOperationsAdditionLevelResult,
  //   (state, action) => adapter.addOne(action.basicOperationsAdditionLevelResult, state)
  // ),
  // on(BasicOperationsAdditionLevelResultActions.upsertBasicOperationsAdditionLevelResult,
  //   (state, action) => adapter.upsertOne(action.basicOperationsAdditionLevelResult, state)
  // ),
  // on(BasicOperationsAdditionLevelResultActions.addBasicOperationsAdditionLevelResults,
  //   (state, action) => adapter.addMany(action.basicOperationsAdditionLevelResults, state)
  // ),
  // on(BasicOperationsAdditionLevelResultActions.upsertBasicOperationsAdditionLevelResults,
  //   (state, action) => adapter.upsertMany(action.basicOperationsAdditionLevelResults, state)
  // ),
  // on(BasicOperationsAdditionLevelResultActions.updateBasicOperationsAdditionLevelResult,
  //   (state, action) => adapter.updateOne(action.basicOperationsAdditionLevelResult, state)
  // ),
  // on(BasicOperationsAdditionLevelResultActions.updateBasicOperationsAdditionLevelResults,
  //   (state, action) => adapter.updateMany(action.basicOperationsAdditionLevelResults, state)
  // ),
  // on(BasicOperationsAdditionLevelResultActions.deleteBasicOperationsAdditionLevelResult,
  //   (state, action) => adapter.removeOne(action.id, state)
  // ),
  // on(BasicOperationsAdditionLevelResultActions.deleteBasicOperationsAdditionLevelResults,
  //   (state, action) => adapter.removeMany(action.ids, state)
  // ),
  // on(BasicOperationsAdditionLevelResultActions.loadBasicOperationsAdditionLevelResults,
  //   (state, action) => adapter.setAll(action.basicOperationsAdditionLevelResults, state)
  // ),
  // on(BasicOperationsAdditionLevelResultActions.clearBasicOperationsAdditionLevelResults,
  //   state => adapter.removeAll(state)
  // ),
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
