import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Report } from './reports.model';
import * as ReportsActions from './reports.actions';

export const reportsFeatureKey = 'reports';

export interface ReportState extends EntityState<Report> {
  // additional entities state properties
  isLoading: boolean;
  selectedReport: any;
}

export const adapter: EntityAdapter<Report> = createEntityAdapter<Report>();

export const initialState: ReportState = adapter.getInitialState({
  // additional entity state properties
  isLoading: false,
  selectedReport: undefined
});

export const reducer = createReducer(
  initialState,
  on(ReportsActions.loadReportsSuccess, (state, action) =>
    adapter.setAll(action.reports, state)
  ),
  on(ReportsActions.loadReportsFailure, (state, action) => {
    return {
      ...state,
      error: action?.error,
    };
  }),


  // LOAD SINGLE REPORT
  on(ReportsActions.loadSingleReportSuccess, (state, action) => {
    return {
      ...state,
      selectedReport: action.selectedReport,
    };
  }),
  on(ReportsActions.loadSingleReportFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),



  // on(ReportsActions.addReports,
  //   (state, action) => adapter.addOne(action.reports, state)
  // ),
  // on(ReportsActions.upsertReports,
  //   (state, action) => adapter.upsertOne(action.reports, state)
  // ),
  // on(ReportsActions.addReports,
  //   (state, action) => adapter.addMany(action.reports, state)
  // ),
  // on(ReportsActions.upsertReports,
  //   (state, action) => adapter.upsertMany(action.reports, state)
  // ),
  // on(ReportsActions.updateReports,
  //   (state, action) => adapter.updateOne(action.reports, state)
  // ),
  // on(ReportsActions.updateReports,
  //   (state, action) => adapter.updateMany(action.reports, state)
  // ),
  // on(ReportsActions.deleteReports,
  //   (state, action) => adapter.removeOne(action.id, state)
  // ),
  // on(ReportsActions.deleteReports,
  //   (state, action) => adapter.removeMany(action.ids, state)
  // ),
  // on(ReportsActions.loadReports,
  //   (state, action) => adapter.setAll(action.reports, state)
  // ),
  // on(ReportsActions.clearReports,
  //   state => adapter.removeAll(state)
  // ),
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
