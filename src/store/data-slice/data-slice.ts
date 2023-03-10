import { createSlice } from '@reduxjs/toolkit';
import { cameras } from '../../mocks/cameras';
import { reviews } from '../../mocks/reviews';
import { similarCameras } from '../../mocks/similar';
import { Camera, Review } from '../../types/types';

type DataState = {
  cameras: Camera[];
  similarCameras: Camera[];
  reviews: Review[];
}

const initialState: DataState = {
  cameras: cameras,
  similarCameras: similarCameras,
  reviews: reviews,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {}
});
