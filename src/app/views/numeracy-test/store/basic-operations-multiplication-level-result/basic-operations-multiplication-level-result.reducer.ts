import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { BasicOperationsMultiplicationLevelResult } from './basic-operations-multiplication-level-result.model';
import * as BasicOperationsMultiplicationLevelResultActions from './basic-operations-multiplication-level-result.actions';

export const basicOperationsMultiplicationLevelResultsFeatureKey =
  'basicOperationsMultiplicationLevelResults';

export interface BasicOperationsMultiplicationLevelResultState
  extends EntityState<BasicOperationsMultiplicationLevelResult> {
  // additional entities state properties
  isLoading: boolean;
  error: any;
  isSubmitResult: boolean;
  result: any;
}

export const adapter: EntityAdapter<BasicOperationsMultiplicationLevelResult> =
  createEntityAdapter<BasicOperationsMultiplicationLevelResult>();

export const initialState: BasicOperationsMultiplicationLevelResultState =
  adapter.getInitialState({
    // additional entity state properties
    isLoading: false,
    error: null,
    isSubmitResult: false,
    result: null,
  });

export const reducer = createReducer(
  initialState,

  on(
    BasicOperationsMultiplicationLevelResultActions.loadBasicOperationsMultiplicationLevelResult,
    (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    }
  ),
  on(
    BasicOperationsMultiplicationLevelResultActions.loadBasicOperationsMultiplicationLevelResultSuccess,
    (state, action) =>
      adapter.setAll(action.basicOperationsMultiplicationLevelResult, state)
  ),
  on(
    BasicOperationsMultiplicationLevelResultActions.loadBasicOperationsMultiplicationLevelResultSuccess,
    (state, action) => {
      return {
        ...state,
        isLoading: false,
      };
    }
  ),
  on(
    BasicOperationsMultiplicationLevelResultActions.loadBasicOperationsMultiplicationLevelResultFailure,
    (state, action) => {
      return {
        ...state,
        error: action?.error,
        isLoading: false,
      };
    }
  ),

  
  /* ADD BASIC_OPERATIONS_MULTIPLICATION LEVEL STAGE ONE RESULT */
  on(BasicOperationsMultiplicationLevelResultActions.addBasicOperationsMultiplicationLevelStageOneResult, (state, action) => {
    return {
      ...state,
      isSubmitResult: true,
    };
  }),
  on(
    BasicOperationsMultiplicationLevelResultActions.addBasicOperationsMultiplicationLevelStageOneResultSuccess,
    (state, action) => {
      return {
        ...state,
        result: action.payload,
      };
    }
  ),
  on(
    BasicOperationsMultiplicationLevelResultActions.addBasicOperationsMultiplicationLevelStageOneResultSuccess,
    (state, action) => {
      return {
        ...state,
        isSubmitResult: false,
      };
    }
  ),
  on(
    BasicOperationsMultiplicationLevelResultActions.addBasicOperationsMultiplicationLevelStageOneResultFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
        isSubmitResult: false,
      };
    }
  ),


  /* ADD BASIC_OPERATIONS_MULTIPLICATION LEVEL STAGE TWO RESULT */
  on(BasicOperationsMultiplicationLevelResultActions.addBasicOperationsMultiplicationLevelStageTwoResult, (state, action) => {
    return {
      ...state,
      isSubmitResult: true,
    };
  }),
  on(
    BasicOperationsMultiplicationLevelResultActions.addBasicOperationsMultiplicationLevelStageTwoResultSuccess,
    (state, action) => {
      return {
        ...state,
        result: action.payload,
      };
    }
  ),
  on(
    BasicOperationsMultiplicationLevelResultActions.addBasicOperationsMultiplicationLevelStageTwoResultSuccess,
    (state, action) => {
      return {
        ...state,
        isSubmitResult: false,
      };
    }
  ),
  on(
    BasicOperationsMultiplicationLevelResultActions.addBasicOperationsMultiplicationLevelStageTwoResultFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
        isSubmitResult: false,
      };
    }
  ),


  /* ADD BASIC_OPERATIONS_MULTIPLICATION LEVEL STAGE THREE RESULT */
  on(BasicOperationsMultiplicationLevelResultActions.addBasicOperationsMultiplicationLevelStageThreeResult, (state, action) => {
    return {
      ...state,
      isSubmitResult: true,
    };
  }),
  on(
    BasicOperationsMultiplicationLevelResultActions.addBasicOperationsMultiplicationLevelStageThreeResultSuccess,
    (state, action) => {
      return {
        ...state,
        result: action.payload,
      };
    }
  ),
  on(
    BasicOperationsMultiplicationLevelResultActions.addBasicOperationsMultiplicationLevelStageThreeResultSuccess,
    (state, action) => {
      return {
        ...state,
        isSubmitResult: false,
      };
    }
  ),
  on(
    BasicOperationsMultiplicationLevelResultActions.addBasicOperationsMultiplicationLevelStageThreeResultFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
        isSubmitResult: false,
      };
    }
  ),




  // on(BasicOperationsMultiplicationLevelResultActions.addBasicOperationsMultiplicationLevelResult,
  //   (state, action) => adapter.addOne(action.basicOperationsMultiplicationLevelResult, state)
  // ),
  // on(BasicOperationsMultiplicationLevelResultActions.upsertBasicOperationsMultiplicationLevelResult,
  //   (state, action) => adapter.upsertOne(action.basicOperationsMultiplicationLevelResult, state)
  // ),
  // on(BasicOperationsMultiplicationLevelResultActions.addBasicOperationsMultiplicationLevelResults,
  //   (state, action) => adapter.addMany(action.basicOperationsMultiplicationLevelResults, state)
  // ),
  // on(BasicOperationsMultiplicationLevelResultActions.upsertBasicOperationsMultiplicationLevelResults,
  //   (state, action) => adapter.upsertMany(action.basicOperationsMultiplicationLevelResults, state)
  // ),
  // on(BasicOperationsMultiplicationLevelResultActions.updateBasicOperationsMultiplicationLevelResult,
  //   (state, action) => adapter.updateOne(action.basicOperationsMultiplicationLevelResult, state)
  // ),
  // on(BasicOperationsMultiplicationLevelResultActions.updateBasicOperationsMultiplicationLevelResults,
  //   (state, action) => adapter.updateMany(action.basicOperationsMultiplicationLevelResults, state)
  // ),
  // on(BasicOperationsMultiplicationLevelResultActions.deleteBasicOperationsMultiplicationLevelResult,
  //   (state, action) => adapter.removeOne(action.id, state)
  // ),
  // on(BasicOperationsMultiplicationLevelResultActions.deleteBasicOperationsMultiplicationLevelResults,
  //   (state, action) => adapter.removeMany(action.ids, state)
  // ),
  // on(BasicOperationsMultiplicationLevelResultActions.loadBasicOperationsMultiplicationLevelResults,
  //   (state, action) => adapter.setAll(action.basicOperationsMultiplicationLevelResults, state)
  // ),
  // on(BasicOperationsMultiplicationLevelResultActions.clearBasicOperationsMultiplicationLevelResults,
  //   state => adapter.removeAll(state)
  // ),
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
