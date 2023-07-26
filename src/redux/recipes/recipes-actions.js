import { createAction } from '@reduxjs/toolkit';

export const fetchRecipeRequest = createAction('recipes/fetchRecipeRequest');
export const fetchRecipeSuccess = createAction('recipes/fetchRecipeSuccess');
export const fetchRecipeError = createAction('recipes/fetchRecipeError');

export const fetchNextPageRequest = createAction(
  'recipes/fetchNextPageRequest'
);
export const fetchNextPageSuccess = createAction(
  'recipes/fetchNextPageSuccess'
);
export const fetchNextPageError = createAction('recipes/fetchNextPageError');
