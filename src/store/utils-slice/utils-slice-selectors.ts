import { RootState } from '..';

export const getModalMode = (state: RootState) => state.utils.modalIsActive;

export const getModalContent = (state: RootState) => state.utils.modalContent;

export const getIsReviewFormDisabled = (state: RootState) => state.utils.isReviewFormDisabled;

export const getCurrentCatalogPage = (state: RootState) => state.utils.currentCatalogPage;
