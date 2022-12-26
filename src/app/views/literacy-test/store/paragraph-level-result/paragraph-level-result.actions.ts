import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { ParagraphLevelResult } from './paragraph-level-result.model';

export const loadParagraphLevelResult = createAction(
  '[ParagraphLevelResult Component] Load ParagraphLevelResult', 
  props<{ session_id: string }>()
);
export const loadParagraphLevelResultSuccess = createAction(
  '[ParagraphLevelResult Effect] Load ParagraphLevelResult Success', 
  props<{ paragraphLevelResult: ParagraphLevelResult[] }>()
);
export const loadParagraphLevelResultFailure = createAction(
  '[ParagraphLevelResult Effect] Load ParagraphLevelResult Failure', 
  props<{ error: any }>()
);