import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { AccountEmail } from './forgot-password.model';
import { ChangePasswordData } from 'src/app/services/authentication.service';

/* SEND_FORGOT_PASSWORD_EMAIL_ADDRESS*/
export const sendForgotPasswordEmailAddress = createAction(
  '[ForgotPasswordEmailAddress/API] Send ForgotPasswordEmailAddress',
  props<{ emailAddress: AccountEmail }>()
);

export const sendForgotPasswordEmailAddressSuccess = createAction(
  '[ForgotPasswordEmailAddress/API Effect] Send ForgotPasswordEmailAddress',
  props<{ sendForgotPasswordEmailAddressResponseMessage: any }>()
);

export const sendForgotPasswordEmailAddressFailure = createAction(
  '[ForgotPasswordEmailAddress/API Effect] Send ForgotPasswordEmailAddress',
  props<{ error: any }>()
);


/* UPDATE_PASSWORD*/
export const updatePassword = createAction(
  '[Update Password/API] Update Password',
  props<{ payload: ChangePasswordData }>()
);

export const updatePasswordSuccess = createAction(
  '[Update Password/API Effect] Update Password',
  props<{ updatePasswordResponseMessage: any }>()
);

export const updatePasswordFailure = createAction(
  '[Update Password/API Effect] Update Password',
  props<{ error: any }>()
);




// export const loadForgotPasswords = createAction(
//   '[ForgotPassword/API] Load ForgotPasswords',
//   props<{ forgotPasswords: ForgotPassword[] }>()
// );

// export const addForgotPassword = createAction(
//   '[ForgotPassword/API] Add ForgotPassword',
//   props<{ forgotPassword: ForgotPassword }>()
// );

// export const upsertForgotPassword = createAction(
//   '[ForgotPassword/API] Upsert ForgotPassword',
//   props<{ forgotPassword: ForgotPassword }>()
// );

// export const addForgotPasswords = createAction(
//   '[ForgotPassword/API] Add ForgotPasswords',
//   props<{ forgotPasswords: ForgotPassword[] }>()
// );

// export const upsertForgotPasswords = createAction(
//   '[ForgotPassword/API] Upsert ForgotPasswords',
//   props<{ forgotPasswords: ForgotPassword[] }>()
// );

// export const updateForgotPassword = createAction(
//   '[ForgotPassword/API] Update ForgotPassword',
//   props<{ forgotPassword: Update<ForgotPassword> }>()
// );

// export const updateForgotPasswords = createAction(
//   '[ForgotPassword/API] Update ForgotPasswords',
//   props<{ forgotPasswords: Update<ForgotPassword>[] }>()
// );

// export const deleteForgotPassword = createAction(
//   '[ForgotPassword/API] Delete ForgotPassword',
//   props<{ id: string }>()
// );

// export const deleteForgotPasswords = createAction(
//   '[ForgotPassword/API] Delete ForgotPasswords',
//   props<{ ids: string[] }>()
// );

// export const clearForgotPasswords = createAction(
//   '[ForgotPassword/API] Clear ForgotPasswords'
// );
