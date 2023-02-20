import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Login } from './login.model';
import * as LoginActions from './login.actions';

export const loginsFeatureKey = 'logins';

export interface State extends EntityState<Login> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Login> = createEntityAdapter<Login>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(LoginActions.addLogin,
    (state, action) => adapter.addOne(action.login, state)
  ),
  on(LoginActions.upsertLogin,
    (state, action) => adapter.upsertOne(action.login, state)
  ),
  on(LoginActions.addLogins,
    (state, action) => adapter.addMany(action.logins, state)
  ),
  on(LoginActions.upsertLogins,
    (state, action) => adapter.upsertMany(action.logins, state)
  ),
  on(LoginActions.updateLogin,
    (state, action) => adapter.updateOne(action.login, state)
  ),
  on(LoginActions.updateLogins,
    (state, action) => adapter.updateMany(action.logins, state)
  ),
  on(LoginActions.deleteLogin,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(LoginActions.deleteLogins,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(LoginActions.loadLogins,
    (state, action) => adapter.setAll(action.logins, state)
  ),
  on(LoginActions.clearLogins,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
