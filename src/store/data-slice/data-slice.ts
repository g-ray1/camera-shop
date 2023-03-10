import { createSlice } from '@reduxjs/toolkit';
import { Camera, Promo, Review } from '../../types/types';
import { fetchAllCameras, fetchCamera, fetchPromo, fetchReviews, fetchSimilarCameras } from '../api-actions';

type DataState = {
  cameras: Camera[];
  camerasIsLoading: boolean;
  camera?: Camera;
  cameraIsLoading: boolean;
  promo?: Promo;
  promoIsLoading: boolean;
  promoDescription?: string;
  similarCameras: Camera[];
  similarCamerasIsLoading: boolean;
  reviews: Review[];
  reviewsIsLoading: boolean;
}

const initialState: DataState = {
  cameras: [],
  cameraIsLoading: false,
  camerasIsLoading: false,
  promoIsLoading: false,
  similarCameras: [],
  similarCamerasIsLoading: false,
  reviews: [],
  reviewsIsLoading: false,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllCameras.pending, (state) => {
        state.camerasIsLoading = true;
      })
      .addCase(fetchAllCameras.fulfilled, (state, action) => {
        state.cameras = action.payload;
        state.camerasIsLoading = false;
      })
      .addCase(fetchAllCameras.rejected, (state) => {
        state.camerasIsLoading = false;
      })
      .addCase(fetchCamera.pending, (state) => {
        state.cameraIsLoading = true;
      })
      .addCase(fetchCamera.fulfilled, (state, action) => {
        state.camera = action.payload;
        state.cameraIsLoading = false;
      })
      .addCase(fetchCamera.rejected, (state) => {
        state.cameraIsLoading = false;
      })
      .addCase(fetchPromo.pending, (state) => {
        state.promoIsLoading = true;
      })
      .addCase(fetchPromo.fulfilled, (state, action) => {
        state.promo = action.payload;
        state.promoIsLoading = false;
      })
      .addCase(fetchPromo.rejected, (state) => {
        state.promoIsLoading = false;
      })
      .addCase(fetchSimilarCameras.pending, (state) => {
        state.similarCamerasIsLoading = true;
      })
      .addCase(fetchSimilarCameras.fulfilled, (state, action) => {
        state.similarCameras = action.payload;
        state.similarCamerasIsLoading = false;
      })
      .addCase(fetchSimilarCameras.rejected, (state) => {
        state.similarCamerasIsLoading = false;
      })
      .addCase(fetchReviews.pending, (state) => {
        state.reviewsIsLoading = true;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.reviewsIsLoading = false;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.reviewsIsLoading = false;
      });
  },
});
