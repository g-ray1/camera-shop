import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { postUserReview } from '../api-actions';

type UtilsState = {
  modalIsActive: boolean;
  modalContent: string;
  isReviewFormDisabled: boolean;
}

const initialState: UtilsState = {
  modalIsActive: false,
  modalContent: 'addItem',
  isReviewFormDisabled: false,
};

export const utilSlice = createSlice({
  name: 'utils',
  initialState: initialState,
  reducers: {
    setModalMode(state, action: PayloadAction<boolean>) {
      state.modalIsActive = action.payload;
    },
    setModalContent(state, action: PayloadAction<string>) {
      state.modalContent = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(postUserReview.pending, (state) => {
        state.isReviewFormDisabled = true;
      })
      .addCase(postUserReview.fulfilled, (state) => {
        state.isReviewFormDisabled = false;
      })
      .addCase(postUserReview.rejected, (state) => {
        state.isReviewFormDisabled = false;
      });
  },
});

export const { setModalMode, setModalContent } = utilSlice.actions;
