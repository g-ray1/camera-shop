import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, RootState } from '.';
import { APIRoutes } from '../consts';
import { Camera, Coupon, Promo, Review, UserReview } from '../types/types';
import { setDiscount } from './utils-slice/utils-slice';

export const fetchAllCameras = createAsyncThunk<Camera[], undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchAllCameras',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Camera[]>(`${APIRoutes.Cameras}`);
    if (data) {
      return (data);
    } else {
      throw new Error('No data');
    }
  });

export const fetchSortedCameras = createAsyncThunk<Camera[], string, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchSortedCameras',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Camera[]>(`${APIRoutes.Cameras}?${_arg}`);
    if (data) {
      return (data);
    } else {
      throw new Error('No data');
    }
  });

export const fetchCamera = createAsyncThunk<Camera, number | string, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchCamera',
  async (cameraId, { extra: api }) => {
    const { data } = await api.get<Camera>(`${APIRoutes.Cameras}/${cameraId}`);
    if (data) {
      return (data);
    } else {
      throw new Error('No data');
    }
  });

export const fetchPromo = createAsyncThunk<Promo, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchPromo',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Promo>(`${APIRoutes.Promo}`);
    if (data) {
      return (data);
    } else {
      throw new Error('No data');
    }
  });

export const fetchSimilarCameras = createAsyncThunk<Camera[], string, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarCameras',
  async (cameraId, { extra: api }) => {
    const { data } = await api.get<Camera[]>((`${APIRoutes.Cameras}/${cameraId}${APIRoutes.SimilarCameras}`));
    if (data) {
      return (data);
    } else {
      throw new Error('No data');
    }
  });

export const fetchReviews = createAsyncThunk<Review[], string, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (cameraId, { extra: api }) => {
    const { data } = await api.get<Review[]>(`${APIRoutes.Cameras}/${cameraId}${APIRoutes.Reviews}`);
    if (data) {
      return (data);
    } else {
      throw new Error('No data');
    }
  });

export const postUserReview = createAsyncThunk<void, UserReview, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'utils/postUserReview',
  async (userReview, { dispatch, extra: api }) => {
    const response = await api.post<UserReview>(APIRoutes.Reviews, userReview);

    if (response.status === 201) {
      await dispatch(fetchReviews(userReview.cameraId.toString()));
    }
  }
);

export const postCoupon = createAsyncThunk<void, Coupon, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/postCoupon',
  async (coupon, { dispatch, extra: api }) => {
    await api.post<Coupon>(APIRoutes.Coupons, coupon)
      .then((response) => {
        dispatch(setDiscount(Number(response.data)));
      })
      .catch(() => dispatch(setDiscount(0)));
  });
