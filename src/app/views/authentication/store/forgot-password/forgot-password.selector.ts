import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  forgotPasswordsFeatureKey,
  ForgotPasswordState,
} from './forgot-password.reducer';

export const selectForgotPasswordState =
  createFeatureSelector<ForgotPasswordState>(forgotPasswordsFeatureKey);
  
export const selectedsendRegisteredEmailResponse = createSelector(
  selectForgotPasswordState,
  (state: ForgotPasswordState) => state.sendRegisteredEmailResponse
);

export const isLoadingForgotPasswordStateState = createSelector(
  selectForgotPasswordState,
  (state: ForgotPasswordState) => state.isLoading
);
