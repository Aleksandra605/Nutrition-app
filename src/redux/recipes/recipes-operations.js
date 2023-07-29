import axios from 'axios';
import {
  fetchRecipeRequest,
  fetchRecipeSuccess,
  // fetchRecipeError,
  fetchNextPageRequest,
  fetchNextPageSuccess,
  //fetchNextPageError
} from './recipes-actions';
var qs = require('qs');
//const url = require('url');

axios.defaults.baseURL = 'https://nutritionapp-1-t7373772.deta.app/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const fetchRecipe = (data) => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(fetchRecipeRequest());

  const query = qs.stringify(data);

  return axios
    .get(`/recipes?${query}`)
    .then(({ data }) => {
      dispatch(fetchRecipeSuccess(data));
    })
    .catch((error) => console.log(error));
  // .catch((error) => dispatch(fetchRecipeError(error)));
};

const fetchNextPage = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(fetchNextPageRequest());

  const query = qs.stringify({ next: 'nextPage' });

  return axios
    .get(`/recipes?${query}`)
    .then(({ data }) => {
      dispatch(fetchNextPageSuccess(data));
    })
    .catch((error) => console.log(error));
};

export { fetchRecipe, fetchNextPage };
