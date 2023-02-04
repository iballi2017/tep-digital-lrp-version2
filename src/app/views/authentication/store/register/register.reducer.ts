import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Register } from './register.model';
import * as RegisterActions from './register.actions';

export const registersFeatureKey = 'registers';

export interface State extends EntityState<Register> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Register> = createEntityAdapter<Register>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(RegisterActions.addRegister,
    (state, action) => adapter.addOne(action.register, state)
  ),
  on(RegisterActions.upsertRegister,
    (state, action) => adapter.upsertOne(action.register, state)
  ),
  on(RegisterActions.addRegisters,
    (state, action) => adapter.addMany(action.registers, state)
  ),
  on(RegisterActions.upsertRegisters,
    (state, action) => adapter.upsertMany(action.registers, state)
  ),
  on(RegisterActions.updateRegister,
    (state, action) => adapter.updateOne(action.register, state)
  ),
  on(RegisterActions.updateRegisters,
    (state, action) => adapter.updateMany(action.registers, state)
  ),
  on(RegisterActions.deleteRegister,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(RegisterActions.deleteRegisters,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(RegisterActions.loadRegisters,
    (state, action) => adapter.setAll(action.registers, state)
  ),
  on(RegisterActions.clearRegisters,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
