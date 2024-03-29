import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { BasketItemType, Camera, Promo, Review } from '../../types/types';
import { fetchAllCameras, fetchCamera, fetchPromo, fetchReviews, fetchSimilarCameras, fetchSortedCameras } from '../api-actions';

type DataState = {
  cameras: Camera[];
  camerasIsLoading: boolean;
  camera?: Camera;
  selectedCamera?: Camera;
  cameraIsLoading: boolean;
  promo?: Promo;
  promoIsLoading: boolean;
  promoDescription?: string;
  similarCameras: Camera[];
  similarCamerasIsLoading: boolean;
  sortedCamerasIsLoading: boolean;
  reviews: Review[];
  reviewsIsLoading: boolean;
  orders: BasketItemType[];
}

const initialState: DataState = {
  cameras: [],
  cameraIsLoading: false,
  camerasIsLoading: false,
  promoIsLoading: false,
  similarCameras: [],
  similarCamerasIsLoading: false,
  sortedCamerasIsLoading: false,
  reviews: [],
  reviewsIsLoading: false,
  orders: [],
};

export const dataSlice = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {
    setSelectedCamera(state, action: PayloadAction<Camera>) {
      state.selectedCamera = action.payload;
    },
    increaseOrders(state, action: PayloadAction<BasketItemType>) {
      const { camera } = action.payload;
      const index = state.orders.findIndex((item) => item.camera.id === camera.id);
      if (index !== -1) {
        state.orders[index].count += 1;
      } else {
        state.orders.push(action.payload);
      }
    },
    decreaseOrders(state, action: PayloadAction<BasketItemType>) {
      const { camera } = action.payload;
      const index = state.orders.findIndex((item) => item.camera.id === camera.id);
      state.orders[index].count -= 1;
    },
    setOrders(state, action: PayloadAction<BasketItemType>) {
      const { camera, count } = action.payload;
      const index = state.orders.findIndex((item) => item.camera.id === camera.id);
      state.orders[index].count = count;
    },
    deleteOrders(state, action: PayloadAction<Camera>) {
      const index = state.orders.findIndex((item) => item.camera.id === action.payload.id);
      state.orders.splice(index, 1);
    }
  },
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
      .addCase(fetchSortedCameras.pending, (state) => {
        state.sortedCamerasIsLoading = true;
      })
      .addCase(fetchSortedCameras.fulfilled, (state, action) => {
        state.cameras = action.payload;
        state.sortedCamerasIsLoading = false;
      })
      .addCase(fetchSortedCameras.rejected, (state) => {
        state.sortedCamerasIsLoading = false;
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

export const { setSelectedCamera, increaseOrders, decreaseOrders, deleteOrders, setOrders } = dataSlice.actions;
