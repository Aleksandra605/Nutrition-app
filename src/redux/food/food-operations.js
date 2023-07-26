import axios from 'axios';

import {
  addToShoppingListRequest,
  addToShoppingListSuccess,
  removeFromShoppingListRequest,
  removeFromShoppingListSuccess,
  fetchShoppingListRequest,
  fetchShoppingListSuccess,
} from './food-actions';

axios.defaults.baseURL = 'https://nutritionapp-1-t7373772.deta.app/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const addToShoppingList = (data) => (dispatch) => {
  dispatch(addToShoppingListRequest());

  return axios
    .post('/shoppingList/addToShoppingList', data)
    .then(({ data }) => {
      dispatch(addToShoppingListSuccess(data));
    })
    .catch((error) => console.log('Error from request >>>', error));
};

const removeFromShoppingList = (id) => (dispatch) => {
  dispatch(removeFromShoppingListRequest());

  axios
    .delete(`/shoppingList/${id}`)
    .then(({ data }) => dispatch(removeFromShoppingListSuccess(data)))
    .catch((error) => console.log(error));
};

const fetchShoppingList = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(fetchShoppingListRequest);

  return axios
    .get('/shoppingList/getShoppingList')
    .then(({ data }) => {
      dispatch(fetchShoppingListSuccess(data));
    })
    .catch((error) => console.log('Error>>>', error));
};

export { addToShoppingList, removeFromShoppingList, fetchShoppingList };
