import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as authActions from './auth-actions';

const initialUserState = { name: null, email: null };

const parsedAuthToken = JSON.parse(localStorage.getItem('persist:auth'));

const user = createReducer(initialUserState, (builder) => {
  builder.addCase(
    authActions.signUpSuccess,
    (_, { payload }) => payload.userInfo
  );
  builder.addCase(
    authActions.loginSuccess,
    (_, { payload }) => payload.userInfo
  );
  builder.addCase(authActions.logoutSuccess, () => initialUserState);
});

const token = createReducer(null, (builder) => {
  builder.addCase(authActions.signUpSuccess, (_, { payload }) => payload.token);
  builder.addCase(authActions.loginSuccess, (_, { payload }) => payload.token);
  builder.addCase(authActions.logoutSuccess, () => null);
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, (builder) => {
  builder.addCase(authActions.signUpError, () => setError);
  builder.addCase(authActions.loginError, () => setError);
  builder.addCase(authActions.logoutError, () => setError);
});

const isAuthenticated = createReducer(
  parsedAuthToken?.token === 'null' ? false : true,
  (builder) => {
    builder.addCase(authActions.signUpSuccess, () => true);
    builder.addCase(authActions.loginSuccess, () => true);
    builder.addCase(authActions.signUpError, () => false);
    builder.addCase(authActions.logoutError, () => false);
    builder.addCase(authActions.logoutSuccess, () => false);
  }
);

const authReducer = combineReducers({
  user,
  isAuthenticated,
  token,
  error,
});

export default authReducer;
