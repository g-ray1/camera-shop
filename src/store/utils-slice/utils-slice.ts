import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UtilsState = {
  modalIsActive: boolean;
}

const initialState: UtilsState = {
  modalIsActive: false,
};

export const utilSlice = createSlice({
  name: 'utils',
  initialState: initialState,
  reducers: {
    setModalMode(state, action: PayloadAction<boolean>) {
      state.modalIsActive = action.payload;
    },
  }
});

export const { setModalMode } = utilSlice.actions;
