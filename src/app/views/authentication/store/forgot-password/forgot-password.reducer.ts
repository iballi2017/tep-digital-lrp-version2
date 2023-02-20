import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ForgotPassword } from './forgot-password.model';
import * as ForgotPasswordActions from './forgot-password.actions';

export const forgotPasswordsFeatureKey = 'forgotPasswords';

export interface ForgotPasswordState extends EntityState<ForgotPassword> {
  // additional entities state properties
  error: any;
  isLoading: boolean;
  sendRegisteredEmailResponse:any,
}

export const adapter: EntityAdapter<ForgotPassword> =
  createEntityAdapter<ForgotPassword>();

export const initialState: ForgotPasswordState = adapter.getInitialState({
  // additional entity state properties
  error: null,
  isLoading: false,
  sendRegisteredEmailResponse: null,
});

export const reducer = createReducer(
  initialState,

/* SEND_FORGOT_PASSWORD_EMAIL_ADDRESS*/
  on(ForgotPasswordActions.sendForgotPasswordEmailAddress, (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }),

  on(ForgotPasswordActions.sendForgotPasswordEmailAddressSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
      sendRegisteredEmailResponse: action.sendForgotPasswordEmailAddressResponseMessage,
    };
  }),
  on(ForgotPasswordActions.sendForgotPasswordEmailAddressFailure, (state, action) => {
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  }),

/* UPDATE_PASSWORD*/
  on(ForgotPasswordActions.updatePassword, (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }),

  on(ForgotPasswordActions.updatePasswordSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
      updatePasswordResponse: action.updatePasswordResponseMessage,
    };
  }),
  on(ForgotPasswordActions.updatePasswordFailure, (state, action) => {
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  })


  // on(ForgotPasswordActions.addForgotPassword,
  //   (state, action) => adapter.addOne(action.forgotPassword, state)
  // ),
  // on(ForgotPasswordActions.upsertForgotPassword,
  //   (state, action) => adapter.upsertOne(action.forgotPassword, state)
  // ),
  // on(ForgotPasswordActions.addForgotPasswords,
  //   (state, action) => adapter.addMany(action.forgotPasswords, state)
  // ),
  // on(ForgotPasswordActions.upsertForgotPasswords,
  //   (state, action) => adapter.upsertMany(action.forgotPasswords, state)
  // ),
  // on(ForgotPasswordActions.updateForgotPassword,
  //   (state, action) => adapter.updateOne(action.forgotPassword, state)
  // ),
  // on(ForgotPasswordActions.updateForgotPasswords,
  //   (state, action) => adapter.updateMany(action.forgotPasswords, state)
  // ),
  // on(ForgotPasswordActions.deleteForgotPassword,
  //   (state, action) => adapter.removeOne(action.id, state)
  // ),
  // on(ForgotPasswordActions.deleteForgotPasswords,
  //   (state, action) => adapter.removeMany(action.ids, state)
  // ),
  // on(ForgotPasswordActions.loadForgotPasswords,
  //   (state, action) => adapter.setAll(action.forgotPasswords, state)
  // ),
  // on(ForgotPasswordActions.clearForgotPasswords,
  //   state => adapter.removeAll(state)
  // ),
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
