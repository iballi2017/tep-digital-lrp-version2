import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Reports } from './reports.model';
import * as ReportsActions from './reports.actions';

export const reportsesFeatureKey = 'reportses';

export interface State extends EntityState<Reports> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Reports> = createEntityAdapter<Reports>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(ReportsActions.addReports,
    (state, action) => adapter.addOne(action.reports, state)
  ),
  on(ReportsActions.upsertReports,
    (state, action) => adapter.upsertOne(action.reports, state)
  ),
  on(ReportsActions.addReportss,
    (state, action) => adapter.addMany(action.reportss, state)
  ),
  on(ReportsActions.upsertReportss,
    (state, action) => adapter.upsertMany(action.reportss, state)
  ),
  on(ReportsActions.updateReports,
    (state, action) => adapter.updateOne(action.reports, state)
  ),
  on(ReportsActions.updateReportss,
    (state, action) => adapter.updateMany(action.reportss, state)
  ),
  on(ReportsActions.deleteReports,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(ReportsActions.deleteReportss,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(ReportsActions.loadReportss,
    (state, action) => adapter.setAll(action.reportss, state)
  ),
  on(ReportsActions.clearReportss,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
