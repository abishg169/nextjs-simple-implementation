import { configureStore } from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage";
import authReducer from "./reducer/auth";
import userReducer from "./reducer/user";

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  };
  
  const rootReducer = combineReducers({
      // add module
      auth: authReducer,
      user: userReducer
  });
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    // devTools: process
  });
  
  export const persistor = persistStore(store);
  
  export type IStore = typeof store
  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch
  export type GetState = () => RootState