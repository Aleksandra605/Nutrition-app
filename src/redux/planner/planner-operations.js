import axios from 'axios';

import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

import {
  addToPlannerRequest,
  addToPlannerSuccess,
  // addToPlannerError,
  fetchPlannerRequest,
  fetchPlannerSuccess,
  // fetchPlannerError,
  removeFromPlannerRequest,
  removeFromPlannerSuccess,
  //removeFromPlannerError,
} from './planner-actions';

axios.defaults.baseURL = 'https://nutritionapp-1-t7373772.deta.app/api';

const toastifyOptions = {
  text: 'Recipe added to planner',
  className: 'success',
  stopOnFocus: true,
  autoClose: 5000,
  style: {
    background: 'rgba(154, 22, 46, 0.725)',
  },
};

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

//.....................................................................

const addToPlanner = (data) => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(addToPlannerRequest());

  return axios
    .post('/planner/addItem', data)
    .then(({ data }) => {
      dispatch(addToPlannerSuccess(data));
      Toastify(toastifyOptions).showToast();
      return dispatch(addToPlannerSuccess);
    })
    .catch((error) => console.log(error));
};

//.....................................................................

const removeFromPlanner = (data) => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(removeFromPlannerRequest());
  axios
    .delete(`/planner/removeItem`, { data: data })
    .then(({ data }) => dispatch(removeFromPlannerSuccess(data)))
    .catch((error) => console.log(error));
};

//.....................................................................

const fetchPlanner = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(fetchPlannerRequest);

  return axios
    .get('/planner/getPlannerList')
    .then(({ data }) => {
      dispatch(fetchPlannerSuccess(data));
    })
    .catch((error) => console.log('Error>>>', error));
};

export { addToPlanner, fetchPlanner, removeFromPlanner };
