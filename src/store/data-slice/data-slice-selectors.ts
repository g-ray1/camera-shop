import { RootState } from '..';

export const getAllCameras = (state: RootState) => state.data.cameras;

export const getCamera = (state: RootState) => state.data.camera;

export const getPromo = (state: RootState) => state.data.promo;

export const getSimilarCameras = (state: RootState) => state.data.similarCameras;

export const getReviews = (state: RootState) => state.data.reviews;

