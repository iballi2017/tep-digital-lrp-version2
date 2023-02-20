import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Register } from './register.model';

export const loadRegisters = createAction(
  '[Register/API] Load Registers', 
  props<{ registers: Register[] }>()
);

export const addRegister = createAction(
  '[Register/API] Add Register',
  props<{ register: Register }>()
);

export const upsertRegister = createAction(
  '[Register/API] Upsert Register',
  props<{ register: Register }>()
);

export const addRegisters = createAction(
  '[Register/API] Add Registers',
  props<{ registers: Register[] }>()
);

export const upsertRegisters = createAction(
  '[Register/API] Upsert Registers',
  props<{ registers: Register[] }>()
);

export const updateRegister = createAction(
  '[Register/API] Update Register',
  props<{ register: Update<Register> }>()
);

export const updateRegisters = createAction(
  '[Register/API] Update Registers',
  props<{ registers: Update<Register>[] }>()
);

export const deleteRegister = createAction(
  '[Register/API] Delete Register',
  props<{ id: string }>()
);

export const deleteRegisters = createAction(
  '[Register/API] Delete Registers',
  props<{ ids: string[] }>()
);

export const clearRegisters = createAction(
  '[Register/API] Clear Registers'
);
