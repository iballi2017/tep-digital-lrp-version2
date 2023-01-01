import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { ParagraphLevelResult } from './paragraph-level-result.model';
import { ActivityAnswer } from 'src/app/models/interface/game';

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



// ADD ParagraphLevelStageFourResult
export const addParagraphLevelStageFourResult = createAction(
  '[Paragraph Stage-one Activity] Add Level Stage Four Result',
  props<{ payload: ActivityAnswer }>()
);
export const addParagraphLevelStageFourResultSuccess = createAction(
  '[Paragraph Level Result Effect] Add Level Stage Four Result Success',
  props<{ payload: any }>()
);
export const addParagraphLevelStageFourResultFailure = createAction(
  '[Paragraph Level Result Effect] Add Level Stage Four Result Failure',
  props<{ error: any }>()
);