import { createReducer } from '@reduxjs/toolkit';
import {
  fetchRecipeRequest,
  fetchRecipeSuccess,
  fetchRecipeError,
} from './recipes/recipes-actions';
import {
  signUpRequest,
  signUpSuccess,
  signUpError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
} from './authentication/auth-actions';
import {
  fetchPlannerRequest,
  fetchPlannerSuccess,
  fetchPlannerError,
} from './planner/planner-actions';
import {
  fetchWishlistRequest,
  fetchWishlistSuccess,
  fetchWishlistError,
} from './wishList/wishList-actions';

const loading = createReducer(false, (builder) => {
  builder.addCase(fetchRecipeRequest, () => true);
  builder.addCase(fetchRecipeSuccess, () => false);
  builder.addCase(fetchRecipeError, () => false);

  builder.addCase(fetchPlannerRequest, () => true);
  builder.addCase(fetchPlannerSuccess, () => false);
  builder.addCase(fetchPlannerError, () => false);

  builder.addCase(fetchWishlistRequest, () => true);
  builder.addCase(fetchWishlistSuccess, () => false);
  builder.addCase(fetchWishlistError, () => false);

  builder.addCase(signUpRequest, () => true);
  builder.addCase(signUpSuccess, () => false);
  builder.addCase(signUpError, () => false);

  builder.addCase(loginRequest, () => true);
  builder.addCase(loginSuccess, () => false);
  builder.addCase(loginError, () => false);

  builder.addCase(logoutRequest, () => true);
  builder.addCase(logoutSuccess, () => false);
  builder.addCase(logoutError, () => false);
});

export default loading;
