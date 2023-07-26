import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import recipesReducer from './recipes/recipes-reducer';
import authReducer from './authentication/auth-reducer';
import wishListReducer from './wishList/wishList-reducer';
import plannerReducer from './planner/planner-reducer';
import foodReducer from './food/food-reducer';
import loading from './loading-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    recipes: recipesReducer,
    wishlist: wishListReducer,
    plannerList: plannerReducer,
    shoppingList: foodReducer,
    loadingStatus: loading,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { store, persistor };
