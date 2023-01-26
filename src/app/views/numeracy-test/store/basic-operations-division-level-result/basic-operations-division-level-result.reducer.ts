import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { BasicOperationsDivisionLevelResult } from './basic-operations-division-level-result.model';
import * as BasicOperationsDivisionLevelResultActions from './basic-operations-division-level-result.actions';

export const basicOperationsDivisionLevelResultsFeatureKey = 'basicOperationsDivisionLevelResults';

export interface BasicOperationsDivisionLevelResultState extends EntityState<BasicOperationsDivisionLevelResult> {
  // additional entities state properties
  isLoading: boolean;
  error: any;
  isSubmitResult: boolean;
  result: any;
}

export const adapter: EntityAdapter<BasicOperationsDivisionLevelResult> = createEntityAdapter<BasicOperationsDivisionLevelResult>();

export const initialState: BasicOperationsDivisionLevelResultState = adapter.getInitialState({
  // additional entity state properties
  isLoading: false,
  error: null,
  isSubmitResult: false,
  result: null
});

export const reducer = createReducer(
  initialState,

  on(
    BasicOperationsDivisionLevelResultActions.loadBasicOperationsDivisionLevelResult,
    (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    }
  ),
  on(
    BasicOperationsDivisionLevelResultActions.loadBasicOperationsDivisionLevelResultSuccess,
    (state, action) =>
      adapter.setAll(action.basicOperationsDivisionLevelResult, state)
  ),
  on(
    BasicOperationsDivisionLevelResultActions.loadBasicOperationsDivisionLevelResultSuccess,
    (state, action) => {
      return {
        ...state,
        isLoading: false,
      };
    }
  ),
  on(
    BasicOperationsDivisionLevelResultActions.loadBasicOperationsDivisionLevelResultFailure,
    (state, action) => {
      return {
        ...state,
        error: action?.error,
        isLoading: false,
      };
    }
  ),

  

  
  /* ADD BASIC_OPERATIONS_DIVISION LEVEL STAGE ONE RESULT */
  on(BasicOperationsDivisionLevelResultActions.addBasicOperationsDivisionLevelStageOneResult, (state, action) => {
    return {
      ...state,
      isSubmitResult: true,
    };
  }),
  on(
    BasicOperationsDivisionLevelResultActions.addBasicOperationsDivisionLevelStageOneResultSuccess,
    (state, action) => {
      return {
        ...state,
        result: action.payload,
      };
    }
  ),
  on(
    BasicOperationsDivisionLevelResultActions.addBasicOperationsDivisionLevelStageOneResultSuccess,
    (state, action) => {
      return {
        ...state,
        isSubmitResult: false,
      };
    }
  ),
  on(
    BasicOperationsDivisionLevelResultActions.addBasicOperationsDivisionLevelStageOneResultFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
        isSubmitResult: false,
      };
    }
  ),


  /* ADD BASIC_OPERATIONS_MULTIPLICATION LEVEL STAGE TWO RESULT */
  on(BasicOperationsDivisionLevelResultActions.addBasicOperationsDivisionLevelStageTwoResult, (state, action) => {
    return {
      ...state,
      isSubmitResult: true,
    };
  }),
  on(
    BasicOperationsDivisionLevelResultActions.addBasicOperationsDivisionLevelStageTwoResultSuccess,
    (state, action) => {
      return {
        ...state,
        result: action.payload,
      };
    }
  ),
  on(
    BasicOperationsDivisionLevelResultActions.addBasicOperationsDivisionLevelStageTwoResultSuccess,
    (state, action) => {
      return {
        ...state,
        isSubmitResult: false,
      };
    }
  ),
  on(
    BasicOperationsDivisionLevelResultActions.addBasicOperationsDivisionLevelStageTwoResultFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
        isSubmitResult: false,
      };
    }
  ),


  // on(BasicOperationsDivisionLevelResultActions.addBasicOperationsDivisionLevelResult,
  //   (state, action) => adapter.addOne(action.basicOperationsDivisionLevelResult, state)
  // ),
  // on(BasicOperationsDivisionLevelResultActions.upsertBasicOperationsDivisionLevelResult,
  //   (state, action) => adapter.upsertOne(action.basicOperationsDivisionLevelResult, state)
  // ),
  // on(BasicOperationsDivisionLevelResultActions.addBasicOperationsDivisionLevelResults,
  //   (state, action) => adapter.addMany(action.basicOperationsDivisionLevelResults, state)
  // ),
  // on(BasicOperationsDivisionLevelResultActions.upsertBasicOperationsDivisionLevelResults,
  //   (state, action) => adapter.upsertMany(action.basicOperationsDivisionLevelResults, state)
  // ),
  // on(BasicOperationsDivisionLevelResultActions.updateBasicOperationsDivisionLevelResult,
  //   (state, action) => adapter.updateOne(action.basicOperationsDivisionLevelResult, state)
  // ),
  // on(BasicOperationsDivisionLevelResultActions.updateBasicOperationsDivisionLevelResults,
  //   (state, action) => adapter.updateMany(action.basicOperationsDivisionLevelResults, state)
  // ),
  // on(BasicOperationsDivisionLevelResultActions.deleteBasicOperationsDivisionLevelResult,
  //   (state, action) => adapter.removeOne(action.id, state)
  // ),
  // on(BasicOperationsDivisionLevelResultActions.deleteBasicOperationsDivisionLevelResults,
  //   (state, action) => adapter.removeMany(action.ids, state)
  // ),
  // on(BasicOperationsDivisionLevelResultActions.loadBasicOperationsDivisionLevelResults,
  //   (state, action) => adapter.setAll(action.basicOperationsDivisionLevelResults, state)
  // ),
  // on(BasicOperationsDivisionLevelResultActions.clearBasicOperationsDivisionLevelResults,
  //   state => adapter.removeAll(state)
  // ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
