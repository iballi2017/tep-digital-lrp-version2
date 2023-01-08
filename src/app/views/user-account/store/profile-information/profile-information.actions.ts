import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { ProfileInformation } from './profile-information.model';

// LOAD PRODUCTS BEGINS
export const loadProfileInformations = createAction(
  '[ProfileInformation Component] Load ProfileInformations'
);
export const loadProfileInformationsSuccess = createAction(
  '[ProfileInformation Effect] Load ProfileInformations Success',
  props<{ profileInformation: ProfileInformation }>()
);
export const loadProfileInformationsFailure = createAction(
  '[ProfileInformation Effect] Load ProfileInformations Failure',
  props<{ error: any }>()
);
// LOAD PRODUCTS ENDS


// UPDATE PRODUCT BEGINS
// export const updateProfileInformation = createAction(
//   '[update-personal-information.component] Update ProfileInformation'
// );
export const updateProfileInformation = createAction(
  '[profile- Information.effects] Update ProfileInformation',
  props<{ profileInformation: any }>()
);

export const updateProfileInformationFailure = createAction(
  '[Profile Information Effect] Update ProfileInformations Failure',
  props<{ error: any }>()
);
// export const updateProfileInformationFailure = createAction(
//   '[profile-information.effects] Update ProfileInformation',
//   props<{ error: any }>()
// );
// UPDATE PRODUCT ENDS







// export const addProfileInformation = createAction(
//   '[ProfileInformation/API] Add ProfileInformation',
//   props<{ profileInformation: ProfileInformation }>()
// );

// export const upsertProfileInformation = createAction(
//   '[ProfileInformation/API] Upsert ProfileInformation',
//   props<{ profileInformation: ProfileInformation }>()
// );

// export const addProfileInformations = createAction(
//   '[ProfileInformation/API] Add ProfileInformations',
//   props<{ profileInformations: ProfileInformation[] }>()
// );

// export const upsertProfileInformations = createAction(
//   '[ProfileInformation/API] Upsert ProfileInformations',
//   props<{ profileInformations: ProfileInformation[] }>()
// );

// export const updateProfileInformation = createAction(
//   '[ProfileInformation/API] Update ProfileInformation',
//   props<{ profileInformation: Update<ProfileInformation> }>()
// );

// export const updateProfileInformations = createAction(
//   '[ProfileInformation/API] Update ProfileInformations',
//   props<{ profileInformations: Update<ProfileInformation>[] }>()
// );

// export const deleteProfileInformation = createAction(
//   '[ProfileInformation/API] Delete ProfileInformation',
//   props<{ id: string }>()
// );

// export const deleteProfileInformations = createAction(
//   '[ProfileInformation/API] Delete ProfileInformations',
//   props<{ ids: string[] }>()
// );

// export const clearProfileInformations = createAction(
//   '[ProfileInformation/API] Clear ProfileInformations'
// );
