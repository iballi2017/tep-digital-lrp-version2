import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { BasicOperationsSubtractionLevelResult } from './basic-operations-subtraction-level-result.model';
import * as BasicOperationsSubtractionLevelResultActions from './basic-operations-subtraction-level-result.actions';

export const basicOperationsSubtractionLevelResultsFeatureKey =
  'basicOperationsSubtractionLevelResults';

export interface BasicOperationsSubtractionLevelResultState
  extends EntityState<BasicOperationsSubtractionLevelResult> {
  // additional entities state properties
  isLoading: boolean;
  error: any;
  isSubmitResult: boolean;
  result: any;
}

export const adapter: EntityAdapter<BasicOperationsSubtractionLevelResult> =
  createEntityAdapter<BasicOperationsSubtractionLevelResult>();

export const initialState: BasicOperationsSubtractionLevelResultState =
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
    BasicOperationsSubtractionLevelResultActions.loadBasicOperationsSubtractionLevelResult,
    (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    }
  ),
  on(
    BasicOperationsSubtractionLevelResultActions.loadBasicOperationsSubtractionLevelResultSuccess,
    (state, action) =>
      adapter.setAll(action.basicOperationsSubtractionLevelResult, state)
  ),
  on(
    BasicOperationsSubtractionLevelResultActions.loadBasicOperationsSubtractionLevelResultSuccess,
    (state, action) => {
      return {
        ...state,
        isLoading: false,
      };
    }
  ),
  on(
    BasicOperationsSubtractionLevelResultActions.loadBasicOperationsSubtractionLevelResultFailure,
    (state, action) => {
      return {
        ...state,
        error: action?.error,
        isLoading: false,
      };
    }
  ),


  /* ADD BASIC_OPERATIONS_SUBTRACTION LEVEL STAGE ONE RESULT */
  on(BasicOperationsSubtractionLevelResultActions.addBasicOperationsSubtractionLevelStageOneResult, (state, action) => {
    return {
      ...state,
      isSubmitResult: true,
    };
  }),
  on(
    BasicOperationsSubtractionLevelResultActions.addBasicOperationsSubtractionLevelStageOneResultSuccess,
    (state, action) => {
      return {
        ...state,
        result: action.payload,
      };
    }
  ),
  on(
    BasicOperationsSubtractionLevelResultActions.addBasicOperationsSubtractionLevelStageOneResultSuccess,
    (state, action) => {
      return {
        ...state,
        isSubmitResult: false,
      };
    }
  ),
  on(
    BasicOperationsSubtractionLevelResultActions.addBasicOperationsSubtractionLevelStageOneResultFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
        isSubmitResult: false,
      };
    }
  ),


  /* ADD BASIC_OPERATIONS_SUBTRACTION LEVEL STAGE TWO RESULT */
  on(BasicOperationsSubtractionLevelResultActions.addBasicOperationsSubtractionLevelStageTwoResult, (state, action) => {
    return {
      ...state,
      isSubmitResult: true,
    };
  }),
  on(
    BasicOperationsSubtractionLevelResultActions.addBasicOperationsSubtractionLevelStageTwoResultSuccess,
    (state, action) => {
      return {
        ...state,
        result: action.payload,
      };
    }
  ),
  on(
    BasicOperationsSubtractionLevelResultActions.addBasicOperationsSubtractionLevelStageTwoResultSuccess,
    (state, action) => {
      return {
        ...state,
        isSubmitResult: false,
      };
    }
  ),
  on(
    BasicOperationsSubtractionLevelResultActions.addBasicOperationsSubtractionLevelStageTwoResultFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
        isSubmitResult: false,
      };
    }
  ),



  // on(BasicOperationsSubtractionLevelResultActions.addBasicOperationsSubtractionLevelResult,
  //   (state, action) => adapter.addOne(action.basicOperationsSubtractionLevelResult, state)
  // ),
  // on(BasicOperationsSubtractionLevelResultActions.upsertBasicOperationsSubtractionLevelResult,
  //   (state, action) => adapter.upsertOne(action.basicOperationsSubtractionLevelResult, state)
  // ),
  // on(BasicOperationsSubtractionLevelResultActions.addBasicOperationsSubtractionLevelResults,
  //   (state, action) => adapter.addMany(action.basicOperationsSubtractionLevelResults, state)
  // ),
  // on(BasicOperationsSubtractionLevelResultActions.upsertBasicOperationsSubtractionLevelResults,
  //   (state, action) => adapter.upsertMany(action.basicOperationsSubtractionLevelResults, state)
  // ),
  // on(BasicOperationsSubtractionLevelResultActions.updateBasicOperationsSubtractionLevelResult,
  //   (state, action) => adapter.updateOne(action.basicOperationsSubtractionLevelResult, state)
  // ),
  // on(BasicOperationsSubtractionLevelResultActions.updateBasicOperationsSubtractionLevelResults,
  //   (state, action) => adapter.updateMany(action.basicOperationsSubtractionLevelResults, state)
  // ),
  // on(BasicOperationsSubtractionLevelResultActions.deleteBasicOperationsSubtractionLevelResult,
  //   (state, action) => adapter.removeOne(action.id, state)
  // ),
  // on(BasicOperationsSubtractionLevelResultActions.deleteBasicOperationsSubtractionLevelResults,
  //   (state, action) => adapter.removeMany(action.ids, state)
  // ),
  // on(BasicOperationsSubtractionLevelResultActions.loadBasicOperationsSubtractionLevelResults,
  //   (state, action) => adapter.setAll(action.basicOperationsSubtractionLevelResults, state)
  // ),
  // on(BasicOperationsSubtractionLevelResultActions.clearBasicOperationsSubtractionLevelResults,
  //   state => adapter.removeAll(state)
  // ),
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
