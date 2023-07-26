import {
  addToWishlistSuccess,
  fetchWishlistSuccess,
  removeFromWishlistSuccess,
} from './wishList-actions';

import { createReducer } from '@reduxjs/toolkit';

const initialState = [];

const wishListReducer = createReducer(initialState, (builder) => {
  builder.addCase(addToWishlistSuccess, (state, { payload }) => {
    return [payload, ...state];
  });
  builder.addCase(fetchWishlistSuccess, (_, { payload }) => {
    return [...payload];
  });
  builder.addCase(removeFromWishlistSuccess, (state, { payload }) => {
    return state.filter((el) => el.uri !== payload.uri);
  });
});

export default wishListReducer;
