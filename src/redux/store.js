import { configureStore, combineReducers } from '@reduxjs/toolkit';
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
import { authReducer } from './auth/authSlice';
import { petsReducer } from './petsData/petsDataSlice';
import { noticesReducer } from './notices/noticesSlice';

// сюди доімпортувати свої редюсери

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isLoggedIn'],
};

const noticesPersistConfig = {
  key: 'notices',
  storage,
};

const authPersistedReducer = persistReducer(authPersistConfig, authReducer);
const noticesPersistedReducer = persistReducer(authPersistConfig, authReducer);

const rootRersistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  auth: authPersistedReducer,
  pets: petsReducer,
  notices: noticesPersistedReducer,
  //
});

const rootPersistedReducer = persistReducer(rootRersistConfig, rootReducer);

export const store = configureStore({
  reducer: rootPersistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  logger,
  //   devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
