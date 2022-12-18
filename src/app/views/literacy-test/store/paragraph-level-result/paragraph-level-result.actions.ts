import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { ParagraphLevelResult } from './paragraph-level-result.model';

export const loadParagraphLevelResults = createAction(
  '[ParagraphLevelResult Component] Load ParagraphLevelResults', 
  props<{ session_id: string }>()
);
export const loadParagraphLevelResultsSuccess = createAction(
  '[ParagraphLevelResult Effect] Load ParagraphLevelResults Success', 
  props<{ paragraphLevelResults: ParagraphLevelResult[] }>()
);
export const loadParagraphLevelResultsFailure = createAction(
  '[ParagraphLevelResult Effect] Load ParagraphLevelResults Failure', 
  props<{ error: any }>()
);