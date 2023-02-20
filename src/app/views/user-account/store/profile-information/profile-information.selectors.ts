import { createFeatureSelector, createSelector } from "@ngrx/store";
import { profileInformationsFeatureKey, ProfileInformationState } from "./profile-information.reducer";



export const selectedProfileInformationState =
    createFeatureSelector<ProfileInformationState>(profileInformationsFeatureKey);
export const profileInformation = createSelector(
    selectedProfileInformationState,
    (state: ProfileInformationState) => state.profileInformation
);



export const isLoadingProfileInformationState = createSelector(
    selectedProfileInformationState,
    (state: ProfileInformationState) => state.isLoading
  );
  