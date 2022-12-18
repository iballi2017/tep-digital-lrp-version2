import { createFeatureSelector, createSelector } from "@ngrx/store";
import { reportsFeatureKey, ReportState, selectAll } from "./reports.reducer";


export const selectReportState = createFeatureSelector<ReportState>(
  reportsFeatureKey
);

// export const selectReports = createSelector(selectReportState,
//     (state: ReportState) => state.Report);
export const selectReports = createSelector(
  selectReportState,
  selectAll
);

export const selectedReport = createSelector(
  selectReportState,
  (state: ReportState) => state.selectedReport
);


export const selectStateIsLoading = createSelector(
    selectReportState,
    (state: ReportState) => state.isLoading
  );
  