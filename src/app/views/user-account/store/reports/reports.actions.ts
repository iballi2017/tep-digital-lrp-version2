import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Reports } from './reports.model';

export const loadReportss = createAction(
  '[Reports/API] Load Reportss', 
  props<{ reportss: Reports[] }>()
);

export const addReports = createAction(
  '[Reports/API] Add Reports',
  props<{ reports: Reports }>()
);

export const upsertReports = createAction(
  '[Reports/API] Upsert Reports',
  props<{ reports: Reports }>()
);

export const addReportss = createAction(
  '[Reports/API] Add Reportss',
  props<{ reportss: Reports[] }>()
);

export const upsertReportss = createAction(
  '[Reports/API] Upsert Reportss',
  props<{ reportss: Reports[] }>()
);

export const updateReports = createAction(
  '[Reports/API] Update Reports',
  props<{ reports: Update<Reports> }>()
);

export const updateReportss = createAction(
  '[Reports/API] Update Reportss',
  props<{ reportss: Update<Reports>[] }>()
);

export const deleteReports = createAction(
  '[Reports/API] Delete Reports',
  props<{ id: string }>()
);

export const deleteReportss = createAction(
  '[Reports/API] Delete Reportss',
  props<{ ids: string[] }>()
);

export const clearReportss = createAction(
  '[Reports/API] Clear Reportss'
);
