import { configureStore } from '@reduxjs/toolkit';
import { dataSlice } from './data-slice/data-slice';
import { utilSlice } from './utils-slice/utils-slice';

export const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    utils: utilSlice.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
