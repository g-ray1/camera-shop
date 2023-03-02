import { RootState } from '..';

export const getCamerasList = (state: RootState) => state.data.cameras;

export const getSimilarCameras = (state: RootState) => state.data.similarCameras;

export const getReviews = (state: RootState) => state.data.reviews;
