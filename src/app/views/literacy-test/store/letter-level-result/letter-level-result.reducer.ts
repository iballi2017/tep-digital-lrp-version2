import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { LetterLevelResult } from './letter-level-result.model';
import * as LetterLevelResultActions from './letter-level-result.actions';

export const letterLevelResultFeatureKey = 'letterLevelResult';

export interface LetterLevelResultState extends EntityState<LetterLevelResult> {
  result: any;
  error: any;
  isLoading: boolean;
}

export const adapter: EntityAdapter<LetterLevelResult> =
  createEntityAdapter<LetterLevelResult>();

export const initialState: LetterLevelResultState = adapter.getInitialState({
  result: undefined,
  error: undefined,
  isLoading: false,
});

export const reducer = createReducer(
  initialState,
  /* LOAD LETTER LEVEL RESULTS WITH RATINGS*/
  on(LetterLevelResultActions.loadLetterLevelResult, (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(LetterLevelResultActions.loadLetterLevelResultSuccess, (state, action) =>
    adapter.setAll(action.letterLevelResult, state)
  ),
  on(
    LetterLevelResultActions.loadLetterLevelResultSuccess,
    (state, action) => {
      return {
        ...state,
        isLoading: false,
      };
    }
  ),
  on(LetterLevelResultActions.loadLetterLevelResultFailure, (state, action: any) => {
    return {
      ...state,
      error: action?.error,
      isLoading: false,
    };
  }),

  /* ADD LETTER LEVEL STAGE ONE RESULT */
  on(LetterLevelResultActions.addLetterLevelStageOneResult, (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(
    LetterLevelResultActions.addLetterLevelStageOneResultSuccess,
    (state, action) => {
      return {
        ...state,
        result: action.payload,
      };
    }
  ),
  on(
    LetterLevelResultActions.addLetterLevelStageOneResultSuccess,
    (state, action) => {
      return {
        ...state,
        isLoading: false,
      };
    }
  ),
  on(
    LetterLevelResultActions.addLetterLevelStageOneResultFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    }
  ),

  /* ADD LETTER LEVEL STAGE TWO RESULT */
  on(LetterLevelResultActions.addLetterLevelStageTwoResult, (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(
    LetterLevelResultActions.addLetterLevelStageTwoResultSuccess,
    (state, action) => {
      return {
        ...state,
        result: action.payload,
      };
    }
  ),
  on(
    LetterLevelResultActions.addLetterLevelStageTwoResultSuccess,
    (state, action) => {
      return {
        ...state,
        isLoading: false,
      };
    }
  ),
  on(
    LetterLevelResultActions.addLetterLevelStageTwoResultFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    }
  ),

  /* ADD LETTER LEVEL STAGE THREE RESULT */
  on(LetterLevelResultActions.addLetterLevelStageThreeResult, (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(
    LetterLevelResultActions.addLetterLevelStageThreeResultSuccess,
    (state, action) => {
      return {
        ...state,
        result: action.payload,
      };
    }
  ),
  on(
    LetterLevelResultActions.addLetterLevelStageThreeResultSuccess,
    (state, action) => {
      return {
        ...state,
        isLoading: false,
      };
    }
  ),
  on(
    LetterLevelResultActions.addLetterLevelStageThreeResultFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    }
  )
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
