import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { WordLevelResult } from './word-level-result.model';
import * as WordLevelResultActions from './word-level-result.actions';

export const wordLevelResultFeatureKey = 'wordLevelResult';

export interface WordLevelResultState extends EntityState<WordLevelResult> {
  // additional entities state properties
  result: any;
  error: any;
  isLoading: boolean;
  isSubmitResult: boolean;
}

export const adapter: EntityAdapter<WordLevelResult> =
  createEntityAdapter<WordLevelResult>();

export const initialState: WordLevelResultState = adapter.getInitialState({
  // additional entity state properties
  result: undefined,
  error: undefined,
  isLoading: false,
  isSubmitResult: false
});

export const reducer = createReducer(
  initialState,

  /* LOAD WORD LEVEL RESULTS WITH RATINGS*/
  on(WordLevelResultActions.loadWordLevelResult, (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(WordLevelResultActions.loadWordLevelResultSuccess, (state, action) =>
    adapter.setAll(action.wordLevelResults, state)
  ),
  on(WordLevelResultActions.loadWordLevelResultSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(
    WordLevelResultActions.loadWordLevelResultFailure,
    (state, action: any) => {
      return {
        ...state,
        error: action?.error,
        isLoading: false,
      };
    }
  ),

  /* ADD WORD LEVEL STAGE ONE RESULT */
  on(WordLevelResultActions.addWordLevelStageOneResult, (state, action) => {
    return {
      ...state,
      isSubmitResult: true,
    };
  }),
  on(
    WordLevelResultActions.addWordLevelStageOneResultSuccess,
    (state, action) => {
      return {
        ...state,
        result: action.payload,
      };
    }
  ),
  on(
    WordLevelResultActions.addWordLevelStageOneResultSuccess,
    (state, action) => {
      return {
        ...state,
        isSubmitResult: false,
      };
    }
  ),
  on(
    WordLevelResultActions.addWordLevelStageOneResultFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
        isSubmitResult: false,
      };
    }
  ),

  /* ADD Word LEVEL STAGE TWO RESULT */
  on(WordLevelResultActions.addWordLevelStageTwoResult, (state, action) => {
    return {
      ...state,
      isSubmitResult: true,
    };
  }),
  on(
    WordLevelResultActions.addWordLevelStageTwoResultSuccess,
    (state, action) => {
      return {
        ...state,
        result: action.payload,
      };
    }
  ),
  on(
    WordLevelResultActions.addWordLevelStageTwoResultSuccess,
    (state, action) => {
      return {
        ...state,
        isSubmitResult: false,
      };
    }
  ),
  on(
    WordLevelResultActions.addWordLevelStageTwoResultFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
        isSubmitResult: false,
      };
    }
  ),

  /* ADD Word LEVEL STAGE THREE RESULT */
  on(WordLevelResultActions.addWordLevelStageThreeResult, (state, action) => {
    return {
      ...state,
      isSubmitResult: true,
    };
  }),
  on(
    WordLevelResultActions.addWordLevelStageThreeResultSuccess,
    (state, action) => {
      return {
        ...state,
        result: action.payload,
      };
    }
  ),
  on(
    WordLevelResultActions.addWordLevelStageThreeResultSuccess,
    (state, action) => {
      return {
        ...state,
        isSubmitResult: false,
      };
    }
  ),
  on(
    WordLevelResultActions.addWordLevelStageThreeResultFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
        isSubmitResult: false,
      };
    }
  ),

  /* ADD Word LEVEL STAGE FOUR RESULT */
  on(WordLevelResultActions.addWordLevelStageFourResult, (state, action) => {
    return {
      ...state,
      isSubmitResult: true,
    };
  }),
  on(
    WordLevelResultActions.addWordLevelStageFourResultSuccess,
    (state, action) => {
      return {
        ...state,
        result: action.payload,
      };
    }
  ),
  on(
    WordLevelResultActions.addWordLevelStageFourResultSuccess,
    (state, action) => {
      return {
        ...state,
        isSubmitResult: false,
      };
    }
  ),
  on(
    WordLevelResultActions.addWordLevelStageFourResultFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
        isSubmitResult: false,
      };
    }
  )
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
