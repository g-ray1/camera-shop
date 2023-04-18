import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { postCoupon, postOrder, postUserReview } from '../api-actions';

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
  isOrderPosting: boolean;
  errorMessage: string;
}

const initialState: UtilsState = {
  modalIsActive: false,
  modalContent: 'addItem',
  isReviewFormDisabled: false,
  currentCatalogPage: 1,
  sortParams: '',
  filterParams: '',
  priceParams: '',
  isOrderPosting: false,
  errorMessage: '',
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
    },
    setErrorMessage(state, action: PayloadAction<string>) {
      state.errorMessage = action.payload;
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
      .addCase(postCoupon.fulfilled, (state) => {
        state.isCouponFormDisabled = false;
      })
      .addCase(postCoupon.rejected, (state) => {
        state.isCouponFormDisabled = false;
      })
      .addCase(postOrder.pending, (state) => {
        state.isOrderPosting = true;
      })
      .addCase(postOrder.fulfilled, (state) => {
        state.isOrderPosting = false;
      })
      .addCase(postOrder.rejected, (state) => {
        state.isOrderPosting = false;
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
  setDiscount,
  setErrorMessage
} = utilSlice.actions;
