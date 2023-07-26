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

const fetchRecipe = (data) => (dispatch) => {
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

const fetchNextPage = () => (dispatch) => {
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
