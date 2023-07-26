import { createAction } from '@reduxjs/toolkit';

export const fetchWishlistRequest = createAction(
  'wishlist/fetchWishlistRequest'
);

export const fetchWishlistSuccess = createAction(
  'wishlist/fetchWishlistSuccess'
);

export const fetchWishlistError = createAction('wishlist/fetchWishlistError');

export const addToWishlistRequest = createAction(
  'wishlist/addToWishlistRequest'
);
export const addToWishlistSuccess = createAction(
  'wishlist/addToWishlistSuccess'
);
export const addToWishlistError = createAction('wishlist/addToWishlistError');

export const removeFromWishlistRequest = createAction(
  'wishlist/removeFromWishlistRequest'
);

export const removeFromWishlistSuccess = createAction(
  'wishlist/removeFromWishlistSuccess'
);
export const removeFromWishlistError = createAction(
  'wishlist/removeFromWishlistError'
);
