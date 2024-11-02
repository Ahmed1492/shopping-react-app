import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import wishListSlice from './wishListSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers } from 'redux';

// Config for persisting the state
const persistConfig = {
  key: 'root',       // Key for local storage
  storage,           // Use local storage
  whitelist: ['cart', 'wishList'], // Only persist these slices
};

// Combine the reducers
const rootReducer = combineReducers({
  cart: cartSlice,
  wishList: wishListSlice,
});

// Wrap the combined reducers with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // To prevent errors with non-serializable values in redux-persist
    }),
});

// Create the persistor
export const persistor = persistStore(store);
