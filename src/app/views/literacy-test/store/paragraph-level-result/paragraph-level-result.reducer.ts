import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ParagraphLevelResult } from './paragraph-level-result.model';
import * as ParagraphLevelResultActions from './paragraph-level-result.actions';

export const paragraphLevelResultFeatureKey = 'paragraphLevelResult';

export interface ParagraphLevelResultState
  extends EntityState<ParagraphLevelResult> {
  // additional entities state properties
  isLoading: boolean;
  error: any;
  isSubmitResult: boolean;
}

export const adapter: EntityAdapter<ParagraphLevelResult> =
  createEntityAdapter<ParagraphLevelResult>();

export const initialState: ParagraphLevelResultState = adapter.getInitialState({
  // additional entity state properties
  isLoading: false,
  error: null,
  isSubmitResult: false
});

export const reducer = createReducer(
  initialState,

  on(ParagraphLevelResultActions.loadParagraphLevelResult, (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(
    ParagraphLevelResultActions.loadParagraphLevelResultSuccess,
    (state, action) => adapter.setAll(action.paragraphLevelResult, state)
  ),
  on(
    ParagraphLevelResultActions.loadParagraphLevelResultSuccess,
    (state, action) => {
      return {
        ...state,
        isLoading: false,
      };
    }
  ),
  on(
    ParagraphLevelResultActions.loadParagraphLevelResultFailure,
    (state, action: any) => {
      return {
        ...state,
        error: action?.error,
        isLoading: false,
      };
    }
  ),



  /* ADD PARAGRAPH LEVEL STAGE ONE RESULT */
  on(ParagraphLevelResultActions.addParagraphLevelStageOneResult, (state, action) => {
    return {
      ...state,
      isSubmitResult: true,
    };
  }),
  on(
    ParagraphLevelResultActions.addParagraphLevelStageOneResultSuccess,
    (state, action) => {
      return {
        ...state,
        result: action.payload,
      };
    }
  ),
  on(
    ParagraphLevelResultActions.addParagraphLevelStageOneResultSuccess,
    (state, action) => {
      return {
        ...state,
        isSubmitResult: false,
      };
    }
  ),
  on(
    ParagraphLevelResultActions.addParagraphLevelStageOneResultFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
        isSubmitResult: false,
      };
    }
  ),



  /* ADD PARAGRAPH LEVEL STAGE TWO RESULT */
  on(ParagraphLevelResultActions.addParagraphLevelStageTwoResult, (state, action) => {
    return {
      ...state,
      isSubmitResult: true,
    };
  }),
  on(
    ParagraphLevelResultActions.addParagraphLevelStageTwoResultSuccess,
    (state, action) => {
      return {
        ...state,
        result: action.payload,
      };
    }
  ),
  on(
    ParagraphLevelResultActions.addParagraphLevelStageTwoResultSuccess,
    (state, action) => {
      return {
        ...state,
        isSubmitResult: false,
      };
    }
  ),
  on(
    ParagraphLevelResultActions.addParagraphLevelStageTwoResultFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
        isSubmitResult: false,
      };
    }
  ),



  /* ADD PARAGRAPH LEVEL STAGE THREE RESULT */
  on(ParagraphLevelResultActions.addParagraphLevelStageThreeResult, (state, action) => {
    return {
      ...state,
      isSubmitResult: true,
    };
  }),
  on(
    ParagraphLevelResultActions.addParagraphLevelStageThreeResultSuccess,
    (state, action) => {
      return {
        ...state,
        result: action.payload,
      };
    }
  ),
  on(
    ParagraphLevelResultActions.addParagraphLevelStageThreeResultSuccess,
    (state, action) => {
      return {
        ...state,
        isSubmitResult: false,
      };
    }
  ),
  on(
    ParagraphLevelResultActions.addParagraphLevelStageThreeResultFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
        isSubmitResult: false,
      };
    }
  ),



  /* ADD PARAGRAPH LEVEL STAGE FOUR RESULT */
  on(ParagraphLevelResultActions.addParagraphLevelStageFourResult, (state, action) => {
    return {
      ...state,
      isSubmitResult: true,
    };
  }),
  on(
    ParagraphLevelResultActions.addParagraphLevelStageFourResultSuccess,
    (state, action) => {
      return {
        ...state,
        result: action.payload,
      };
    }
  ),
  on(
    ParagraphLevelResultActions.addParagraphLevelStageFourResultSuccess,
    (state, action) => {
      return {
        ...state,
        isSubmitResult: false,
      };
    }
  ),
  on(
    ParagraphLevelResultActions.addParagraphLevelStageFourResultFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
        isSubmitResult: false,
      };
    }
  ),
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
