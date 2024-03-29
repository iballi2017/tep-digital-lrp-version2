import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Report } from './reports.model';
import * as ReportsActions from './reports.actions';

export const reportsFeatureKey = 'reports';

export interface ReportState extends EntityState<Report> {
  // additional entities state properties
  isLoading: boolean;
  reportList: any;
  selectedReport: any;
  reportsParams: any;
  error: any;
}

export const adapter: EntityAdapter<Report> = createEntityAdapter<Report>();

export const initialState: ReportState = adapter.getInitialState({
  // additional entity state properties
  isLoading: false,
  reportsParams: null,
  reportList: null,
  selectedReport: null,
  error: null,
});

export const reducer = createReducer(
  initialState,

  // LOAD REPORTS
  on(ReportsActions.loadReports, (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(ReportsActions.loadReportsSuccess, (state, action) =>
    adapter.setAll(action.reports, state)
  ),
  on(ReportsActions.loadReportsSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(ReportsActions.loadReportsFailure, (state, action) => {
    return {
      ...state,
      error: action?.error,
      isLoading: false,
    };
  }),

  // LOAD PAGED REPORTS
  on(ReportsActions.loadPagedReports, (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(ReportsActions.loadPagedReportsSuccess, (state, action) => {
    // return adapter.setAll(action.reports?.data, state);
    return {
      ...state,
      reportList: action.reports.data
    }
  }),
  on(ReportsActions.loadPagedReportsSuccess, (state, action) => {
    return {
      ...state,
      reportsParams: {
        itemsPerPage: action.reports.itemsPerPage,
        page: action.reports.page,
        totalRecords: action.reports.totalRecords,
      },
    };
  }),
  on(ReportsActions.loadPagedReportsSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(ReportsActions.loadPagedReportsFailure, (state, action) => {
    return {
      ...state,
      error: action?.error,
      isLoading: false,
    };
  }),

  // LOAD SINGLE REPORT
  on(ReportsActions.loadSingleReport, (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(ReportsActions.loadSingleReportSuccess, (state, action) => {
    return {
      ...state,
      selectedReport: action.selectedReport,
      isLoading: false,
    };
  }),
  on(ReportsActions.loadSingleReportFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
      isLoading: false,
    };
  }),

  // DELETE SINGLE REPORT
  on(ReportsActions.deleteReport, (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(ReportsActions.deleteReportSuccess, (state, action) => {
    console.log('action: ', action);
    return adapter.removeOne(action.id.session_id, state);
  }),
  on(ReportsActions.deleteReportSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(ReportsActions.deleteReportFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
      isLoading: false,
    };
  }),

  // DELETE ALL REPORTs
  on(ReportsActions.deleteAllReports, (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(ReportsActions.deleteAllReportsSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(ReportsActions.deleteAllReportsSuccess, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),
  on(ReportsActions.deleteAllReportsFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  })

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
