import axios from 'axios';
import {
  addToWishlistRequest,
  addToWishlistSuccess,
  fetchWishlistRequest,
  fetchWishlistSuccess,
  // addToWishlistError,
  removeFromWishlistRequest,
  removeFromWishlistSuccess,
} from './wishList-actions';

import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const toastifyOptions = {
  text: 'The recipe is already on the wishlist',
  className: 'error',
  stopOnFocus: true,
  autoClose: 5000,
  style: {
    background: 'rgba(154, 22, 46, 0.725)',
  },
};

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
    })
    .catch((error) => Toastify(toastifyOptions).showToast());
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
      .then(({ data }) => dispatch(removeFromWishlistSuccess(data)))
      .catch((error) => console.log(error));
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
