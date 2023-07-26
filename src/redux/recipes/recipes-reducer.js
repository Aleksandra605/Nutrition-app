import { createReducer } from '@reduxjs/toolkit';

import { fetchRecipeSuccess, fetchNextPageSuccess } from './recipes-actions';

import {
  addToWishlistSuccess,
  removeFromWishlistSuccess,
} from '../wishList/wishList-actions';
const initialState = [];

const recipesReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchRecipeSuccess, (state, { payload }) => {
    return [...payload.recipesList];
  });
  builder.addCase(fetchNextPageSuccess, (state, { payload }) => {
    return [...state, ...payload.recipesList];
  });
  builder.addCase(addToWishlistSuccess, (state, { payload }) => {
    return state.forEach((el) => {
      if (el.uri === payload.uri) {
        el.liked = true;
      }
    });
  });
  builder.addCase(removeFromWishlistSuccess, (state, { payload }) => {
    return state.forEach((el) => {
      if (el.uri === payload.uri) {
        el.liked = false;
      }
    });
  });
});

export default recipesReducer;
