import axios from 'axios';
import {
  signUpRequest,
  signUpSuccess,
  signUpError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  loginRequest,
  loginSuccess,
  loginError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth-actions';

axios.defaults.baseURL = 'https://nutritionapp-1-t7373772.deta.app/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const signUp = (credentials) => async (dispatch) => {
  dispatch(signUpRequest());

  try {
    const response = await axios.post('/users/signup', credentials);

    token.set(response.data.token);

    dispatch(signUpSuccess(response.data));
  } catch (error) {
    dispatch(signUpError(error.message));
  }
};

const logIn = (credentials) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const response = await axios.post('/users/login', credentials);

    token.set(response.data.token);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

const logOut = () => async (dispatch) => {
  dispatch(logoutRequest());

  try {
    await axios.get('/users/logout');

    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

// const getCurrentUser = () => async (dispatch, getState) => {
//   const {
//     auth: { token: persistedToken },
//   } = getState();

//   if (!persistedToken) {
//     return;
//   }

//   token.set(persistedToken);

//   dispatch(getCurrentUserRequest());

//   try {
//     const response = await axios.get('/users/current');

//     dispatch(getCurrentUserSuccess(response.data));
//   } catch (error) {
//     dispatch(getCurrentUserError(error.message));
//   }
// };

export { signUp, logOut, logIn };
