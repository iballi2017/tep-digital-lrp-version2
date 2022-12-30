import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Report } from './reports.model';
import { SessionId } from 'src/app/models/interface/game-report';

// LOAD REPORTs BEGINS
export const loadReports = createAction(
  '[Reports list component] Load Reports'
);
export const loadReportsSuccess = createAction(
  '[Reports Effect] Load Reports Success',
  props<{ reports: Report[] }>()
);
export const loadReportsFailure = createAction(
  '[Reports Effect] Load Reports Failure',
  props<{ error: any }>()
);

// LOAD SINGLE REPORT BEGINS
export const loadSingleReport = createAction(
  '[Report details Component] Load single report',
  props<{ session_id: string }>()
);

export const loadSingleReportSuccess = createAction(
  '[Load report effect] Load single report Success',
  props<{ selectedReport: Report }>()
);

export const loadSingleReportFailure = createAction(
  '[Load report effect] Load single report Failure',
  props<{ error: any }>()
);

// DELETE REPORT
export const deleteReport = createAction('[Reports/API] Delete Report',
props<{ id: SessionId }>());
export const deleteReportSuccess = createAction(
  '[Reports/API] Delete Report Success',
  props<{ id: SessionId }>()
);
export const deleteReportFailure = createAction(
  '[Reports/API] Delete Report Failure',
  props<{ error: any }>()
);

// DELETE ALL REPORT
export const deleteAllReports = createAction(
  '[Reports/API] Delete All Reports'
);
export const deleteAllReportsSuccess = createAction(
  '[Reports/API] Delete All Reports Success',
  props<{ ids: string[] }>()
);
export const deleteAllReportsFailure = createAction(
  '[Reports/API] Delete All Reports Failure',
  props<{ error: any }>()
);

// export const addReports = createAction(
//   '[Reports/API] Add Reports',
//   props<{ reports: Reports }>()
// );

// export const upsertReports = createAction(
//   '[Reports/API] Upsert Reports',
//   props<{ reports: Reports }>()
// );

// export const addReports = createAction(
//   '[Reports/API] Add Reports',
//   props<{ reports: Reports[] }>()
// );

// export const upsertReports = createAction(
//   '[Reports/API] Upsert Reports',
//   props<{ reports: Reports[] }>()
// );

// export const updateReports = createAction(
//   '[Reports/API] Update Reports',
//   props<{ reports: Update<Reports> }>()
// );

// export const updateReports = createAction(
//   '[Reports/API] Update Reports',
//   props<{ reports: Update<Reports>[] }>()
// );

// export const deleteReports = createAction(
//   '[Reports/API] Delete Reports',
//   props<{ id: string }>()
// );

// export const deleteReports = createAction(
//   '[Reports/API] Delete Reports',
//   props<{ ids: string[] }>()
// );

// export const clearReports = createAction(
//   '[Reports/API] Clear Reports'
// );
