import { RootState } from '..';

export const getModalMode = (state: RootState) => state.utils.modalIsActive;

export const getModalContent = (state: RootState) => state.utils.modalContent;

export const getIsReviewFormDisabled = (state: RootState) => state.utils.isReviewFormDisabled;

export const getCurrentCatalogPage = (state: RootState) => state.utils.currentCatalogPage;

export const getSortParams = (state: RootState) => state.utils.sortParams;

export const getFilterParams = (state: RootState) => state.utils.filterParams;

export const getPriceParams = (state: RootState) => state.utils.priceParams;

export const getDiscount = (state: RootState) => state.utils.discount;

export const getErrorMessage = (state: RootState) => state.utils.errorMessage;
