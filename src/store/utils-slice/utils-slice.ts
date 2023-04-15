import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { postCoupon, postUserReview } from '../api-actions';

type UtilsState = {
  modalIsActive: boolean;
  modalContent: string;
  isReviewFormDisabled: boolean;
  currentCatalogPage: number;
  sortParams: string;
  filterParams: string;
  priceParams: string;
  discount?: number;
  isCouponFormDisabled?: boolean;
}

const initialState: UtilsState = {
  modalIsActive: false,
  modalContent: 'addItem',
  isReviewFormDisabled: false,
  currentCatalogPage: 1,
  sortParams: '',
  filterParams: '',
  priceParams: '',
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
    setCurrentCatalogPage(state, action: PayloadAction<number>) {
      state.currentCatalogPage = action.payload;
    },
    setSortParamsInState(state, action: PayloadAction<string>) {
      state.sortParams = action.payload;
    },
    setFilterParamsInState(state, action: PayloadAction<string>) {
      state.filterParams = action.payload;
    },
    setPriceParamsInState(state, action: PayloadAction<string>) {
      state.priceParams = action.payload;
    },
    setDiscount(state, action: PayloadAction<number>) {
      state.discount = action.payload;
    }
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
      })
      .addCase(postCoupon.pending, (state) => {
        state.isCouponFormDisabled = true;
      })
      .addCase(postCoupon.rejected, (state) => {
        state.isCouponFormDisabled = false;
      })
      .addCase(postCoupon.fulfilled, (state) => {
        state.isCouponFormDisabled = false;
      });
  },
});

export const {
  setModalMode,
  setModalContent,
  setCurrentCatalogPage,
  setSortParamsInState,
  setFilterParamsInState,
  setPriceParamsInState,
  setDiscount
} = utilSlice.actions;
