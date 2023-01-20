import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { NumberRecognitionTwoLevelResult } from './number-recognition-two-level-result.model';
import * as NumberRecognitionTwoLevelResultActions from './number-recognition-two-level-result.actions';

export const numberRecognitionTwoLevelResultsFeatureKey =
  'numberRecognitionTwoLevelResults';

export interface NumberRecognitionTwoLevelResultState
  extends EntityState<NumberRecognitionTwoLevelResult> {
  // additional entities state properties
  result: any;
  isLoading: boolean;
  error: any;
  isSubmitResult: boolean;
}

export const adapter: EntityAdapter<NumberRecognitionTwoLevelResult> =
  createEntityAdapter<NumberRecognitionTwoLevelResult>();

export const initialState: NumberRecognitionTwoLevelResultState =
  adapter.getInitialState({
    // additional entity state properties
    result: undefined,
    isLoading: false,
    error: null,
    isSubmitResult: false,
  });

export const reducer = createReducer(
  initialState,
  on(
    NumberRecognitionTwoLevelResultActions.loadNumberRecognitionTwoLevelResult,
    (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    }
  ),
  on(
    NumberRecognitionTwoLevelResultActions.loadNumberRecognitionTwoLevelResultSuccess,
    (state, action) =>
      adapter.setAll(action.numberRecognitionTwoLevelResult, state)
  ),
  on(
    NumberRecognitionTwoLevelResultActions.loadNumberRecognitionTwoLevelResultSuccess,
    (state, action) => {
      return {
        ...state,
        isLoading: false,
      };
    }
  ),
  on(
    NumberRecognitionTwoLevelResultActions.loadNumberRecognitionTwoLevelResultFailure,
    (state, action) => {
      return {
        ...state,
        error: action?.error,
        isLoading: false,
      };
    }
  ),




  /* ADD LETTER LEVEL STAGE ONE RESULT */
  on(NumberRecognitionTwoLevelResultActions.addNumberRecognitionTwoLevelStageOneResult, (state, action) => {
    return {
      ...state,
      isSubmitResult: true,
    };
  }),
  on(
    NumberRecognitionTwoLevelResultActions.addNumberRecognitionTwoLevelStageOneResultSuccess,
    (state, action) => {
      return {
        ...state,
        result: action.payload,
      };
    }
  ),
  on(
    NumberRecognitionTwoLevelResultActions.addNumberRecognitionTwoLevelStageOneResultSuccess,
    (state, action) => {
      return {
        ...state,
        isSubmitResult: false,
      };
    }
  ),
  on(
    NumberRecognitionTwoLevelResultActions.addNumberRecognitionTwoLevelStageOneResultFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
        isSubmitResult: false,
      };
    }
  ),






  // on(
  //   NumberRecognitionTwoLevelResultActions.addNumberRecognitionTwoLevelResult,
  //   (state, action) =>
  //     adapter.addOne(action.numberRecognitionTwoLevelResult, state)
  // ),
  // on(
  //   NumberRecognitionTwoLevelResultActions.upsertNumberRecognitionTwoLevelResult,
  //   (state, action) =>
  //     adapter.upsertOne(action.numberRecognitionTwoLevelResult, state)
  // ),
  // on(
  //   NumberRecognitionTwoLevelResultActions.addNumberRecognitionTwoLevelResults,
  //   (state, action) =>
  //     adapter.addMany(action.numberRecognitionTwoLevelResults, state)
  // ),
  // on(
  //   NumberRecognitionTwoLevelResultActions.upsertNumberRecognitionTwoLevelResults,
  //   (state, action) =>
  //     adapter.upsertMany(action.numberRecognitionTwoLevelResults, state)
  // ),
  // on(
  //   NumberRecognitionTwoLevelResultActions.updateNumberRecognitionTwoLevelResult,
  //   (state, action) =>
  //     adapter.updateOne(action.numberRecognitionTwoLevelResult, state)
  // ),
  // on(
  //   NumberRecognitionTwoLevelResultActions.updateNumberRecognitionTwoLevelResults,
  //   (state, action) =>
  //     adapter.updateMany(action.numberRecognitionTwoLevelResults, state)
  // ),
  // on(
  //   NumberRecognitionTwoLevelResultActions.deleteNumberRecognitionTwoLevelResult,
  //   (state, action) => adapter.removeOne(action.id, state)
  // ),
  // on(
  //   NumberRecognitionTwoLevelResultActions.deleteNumberRecognitionTwoLevelResults,
  //   (state, action) => adapter.removeMany(action.ids, state)
  // ),
  // on(
  //   NumberRecognitionTwoLevelResultActions.loadNumberRecognitionTwoLevelResults,
  //   (state, action) =>
  //     adapter.setAll(action.numberRecognitionTwoLevelResults, state)
  // ),
  // on(
  //   NumberRecognitionTwoLevelResultActions.clearNumberRecognitionTwoLevelResults,
  //   (state) => adapter.removeAll(state)
  // )
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
