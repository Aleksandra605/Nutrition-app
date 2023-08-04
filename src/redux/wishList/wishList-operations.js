import axios from 'axios';
import {
  addToWishlistRequest,
  addToWishlistSuccess,
  fetchWishlistRequest,
  fetchWishlistSuccess,
  addToWishlistError,
  removeFromWishlistRequest,
  removeFromWishlistSuccess,
} from './wishList-actions';

import toastifyOptions from '../../helpers/toastifyOptions';
import Toastify from 'toastify-js';

axios.defaults.baseURL = 'https://nutritionapp-1-t7373772.deta.app/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

//.....................................................................

const addToWishlist = (data) => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  console.log('Request body', data);
  dispatch(addToWishlistRequest());

  return axios
    .post('/wishlist/addtowishlist', data)
    .then(({ data }) => {
      dispatch(addToWishlistSuccess(data));
      Toastify(
        toastifyOptions('info', 'Recipe added to wishlist.')
      ).showToast();
    })
    .catch((error) => {
      dispatch(addToWishlistError());
      Toastify(toastifyOptions('error', error.message)).showToast();
    });
};

//.....................................................................

const deleteFromWishList =
  ({ uri }) =>
  (dispatch, getState) => {
    const {
      auth: { token: persistedToken },
    } = getState();

    if (!persistedToken) {
      return;
    }

    token.set(persistedToken);

    dispatch(removeFromWishlistRequest());
    axios
      .delete(`/wishlist/removeItem`, { data: { uri: uri } })
      .then(({ data }) => {
        dispatch(removeFromWishlistSuccess(data));
        Toastify(
          toastifyOptions('info', 'Recipe removed from wishlist.')
        ).showToast();
      })
      .catch((error) =>
        Toastify(toastifyOptions('error', error.message)).showToast()
      );
  };

//.....................................................................

const fetchWishlist = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(fetchWishlistRequest);

  return axios
    .get('/wishlist')
    .then(({ data }) => {
      dispatch(fetchWishlistSuccess(data));
    })
    .catch((error) => console.log('Error>>>', error));
};

export { addToWishlist, fetchWishlist, deleteFromWishList };
