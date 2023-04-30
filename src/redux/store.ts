import { apiMiddleware } from '@api/apiMiddleware';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistReducer } from 'redux-persist';
import { createWrapper } from 'next-redux-wrapper';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['auth'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    //@ts-ignore
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, //TODO CHECK THIS
      }).concat(apiMiddleware),
  });

type Store = ReturnType<typeof makeStore>;
setupListeners(makeStore().dispatch);

//@ts-ignore
// export type RootState = ReturnType<typeof store.getState>;
export type RootState = ReturnType<Store['getState']>;
export type AppDispatch = Store['dispatch'];

export type AppStore = ReturnType<typeof makeStore>;
export const wrapper = createWrapper<AppStore>(makeStore, { debug: false });

export default makeStore();
