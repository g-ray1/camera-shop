import { createSlice } from '@reduxjs/toolkit';
import { Camera, Promo, Review } from '../../types/types';
import { fetchAllCameras, fetchCamera, fetchPromo, fetchReviews, fetchSimilarCameras } from '../api-actions';

type DataState = {
  cameras: Camera[];
  camera?: Camera;
  promo?: Promo;
  similarCameras: Camera[];
  reviews: Review[];
}

const initialState: DataState = {
  cameras: [],
  similarCameras: [],
  reviews: [],
};

export const dataSlice = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllCameras.fulfilled, (state, action) => {
        state.cameras = action.payload;
      })
      .addCase(fetchCamera.fulfilled, (state, action) => {
        state.camera = action.payload;
      })
      .addCase(fetchPromo.fulfilled, (state, action) => {
        state.promo = action.payload;
      })
      .addCase(fetchSimilarCameras.fulfilled, (state, action) => {
        state.similarCameras = action.payload;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  },
});
