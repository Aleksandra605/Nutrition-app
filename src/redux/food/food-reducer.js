import { createReducer } from '@reduxjs/toolkit';
import { fetchShoppingListSuccess } from './food-actions';

const initialState = [];

const foodReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchShoppingListSuccess, (state, { payload }) => {
    return [...payload.shoppingList];
  });
});

export default foodReducer;
