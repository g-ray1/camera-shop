import { configureStore } from '@reduxjs/toolkit';
import { createApi } from '../services/api';
import { dataSlice } from './data-slice/data-slice';
import { utilSlice } from './utils-slice/utils-slice';

const api = createApi();

export const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    utils: utilSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      }
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
