import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ProfileInformation } from './profile-information.model';
import * as ProfileInformationActions from './profile-information.actions';

export const profileInformationsFeatureKey = 'profileInformation';

export interface ProfileInformationState extends EntityState<ProfileInformation> {
  // additional entities state properties
  profileInformation: any,
  error: any
}

export const adapter: EntityAdapter<ProfileInformation> = createEntityAdapter<ProfileInformation>();

export const initialState: ProfileInformationState = adapter.getInitialState({
  // additional entity state properties,
  profileInformation: undefined,
  error: undefined
});

export const reducer = createReducer(
  initialState,
  on(ProfileInformationActions.loadProfileInformationsSuccess,
    (state, action: any) => {
      return {
        ...state,
        profileInformation: action?.profileInformation,
      };
    }
  ),
  on(ProfileInformationActions.loadProfileInformationsFailure,
    (state, action: any) => {
      return {
        ...state,
        error: action.error,
      };
    }
  ),
  on(ProfileInformationActions.updateProfileInformation,
    (state, action:any) => {
      return {
        ...state,
        profileInformation: action?.profileInformation,
      };
    }
  ),
  // on(ProfileInformationActions.updateProfileInformationFailure,
  //   (state, action:any) => {
  //     return {
  //       ...state,
  //       error: action.error,
  //     };
  //   }
  // ),



  // on(ProfileInformationActions.addProfileInformation,
  //   (state, action) => adapter.addOne(action.profileInformation, state)
  // ),
  // on(ProfileInformationActions.upsertProfileInformation,
  //   (state, action) => adapter.upsertOne(action.profileInformation, state)
  // ),
  // on(ProfileInformationActions.addProfileInformations,
  //   (state, action) => adapter.addMany(action.profileInformations, state)
  // ),
  // on(ProfileInformationActions.upsertProfileInformations,
  //   (state, action) => adapter.upsertMany(action.profileInformations, state)
  // ),
  // on(ProfileInformationActions.updateProfileInformation,
  //   (state, action) => adapter.updateOne(action.profileInformation, state)
  // ),
  // on(ProfileInformationActions.updateProfileInformations,
  //   (state, action) => adapter.updateMany(action.profileInformations, state)
  // ),
  // on(ProfileInformationActions.deleteProfileInformation,
  //   (state, action) => adapter.removeOne(action.id, state)
  // ),
  // on(ProfileInformationActions.deleteProfileInformations,
  //   (state, action) => adapter.removeMany(action.ids, state)
  // ),
  // on(ProfileInformationActions.loadProfileInformations,
  //   (state, action) => adapter.setAll(action.profileInformations, state)
  // ),
  // on(ProfileInformationActions.clearProfileInformations,
  //   state => adapter.removeAll(state)
  // ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
