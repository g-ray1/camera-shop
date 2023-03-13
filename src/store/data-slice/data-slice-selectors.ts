import { RootState } from '..';

export const getAllCameras = (state: RootState) => state.data.cameras;

export const getCamerasIsLoading = (state: RootState) => state.data.camerasIsLoading;

export const getCamera = (state: RootState) => state.data.camera;

export const getCameraIsLoading = (state: RootState) => state.data.cameraIsLoading;

export const getPromo = (state: RootState) => state.data.promo;

export const getPromoIsLoading = (state: RootState) => state.data.promoIsLoading;

export const getSimilarCameras = (state: RootState) => state.data.similarCameras;

export const getSimilarCamerasIsLoading = (state: RootState) => state.data.similarCamerasIsLoading;

export const getReviews = (state: RootState) => state.data.reviews;

export const getReviewsIsLoading = (state: RootState) => state.data.reviewsIsLoading;
