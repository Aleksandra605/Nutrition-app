import { createAction } from '@reduxjs/toolkit';

export const addToShoppingListRequest = createAction(
  'food/addToShoppingListRequest'
);
export const addToShoppingListSuccess = createAction(
  'food/addToShoppingListSuccess'
);
export const addToShoppingListError = createAction(
  'food/addToShoppingListError'
);

export const removeFromShoppingListRequest = createAction(
  'food/removeFromShoppingListRequest'
);
export const removeFromShoppingListSuccess = createAction(
  'food/removeFromShoppingListSuccess'
);
export const removeFromShoppingListError = createAction(
  'food/removeFromShoppingListError'
);

export const fetchShoppingListRequest = createAction(
  'food/fetchShoppingListRequest'
);
export const fetchShoppingListSuccess = createAction(
  'food/fetchShoppingListSuccess'
);
export const fetchShoppingListError = createAction(
  'food/fetchShoppingListError'
);
