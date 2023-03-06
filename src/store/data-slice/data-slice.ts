import { createSlice } from '@reduxjs/toolkit';
import { cameras } from '../../mocks/cameras';
import { similarCameras } from '../../mocks/similar';
import { Camera, Review } from '../../types/types';
import { fetchReviews } from '../api-actions';

type DataState = {
  cameras: Camera[];
  similarCameras: Camera[];
  reviews: Review[];
}

const initialState: DataState = {
  cameras: cameras,
  similarCameras: similarCameras,
  reviews: [],
};

export const dataSlice = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  },
});
