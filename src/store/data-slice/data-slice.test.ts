import { basketItem } from '../../mocks/basketItem';
import { cameras } from '../../mocks/cameras';
import { promoProduct } from '../../mocks/promo';
import { reviews } from '../../mocks/reviews';
import { similarCameras } from '../../mocks/similar';
import { fetchAllCameras, fetchCamera, fetchPromo, fetchReviews, fetchSimilarCameras, fetchSortedCameras } from '../api-actions';
import { dataSlice, decreaseOrders, deleteOrders, increaseOrders, setOrders, setSelectedCamera } from './data-slice';

const initialState = {
  cameras: [],
  camerasIsLoading: false,
  cameraIsLoading: false,
  promoIsLoading: false,
  similarCamerasIsLoading: false,
  sortedCamerasIsLoading: false,
  reviewsIsLoading: false,
  similarCameras: [],
  reviews: [],
  orders: [],
};

describe('dataSlice', () => {
  it('should return initialState', () => {
    const result = dataSlice.getInitialState();

    expect(result).toEqual(initialState);
  });

  it('should set selectedCamera', () => {
    const action = { type: setSelectedCamera, payload: cameras[0] };

    const result = dataSlice.reducer(initialState, action);

    expect(result.selectedCamera).toBe(cameras[0]);
  });

  it('increase count in orders', () => {
    const action = { type: increaseOrders, payload: basketItem };

    const result = dataSlice.reducer(initialState, action);

    expect(result.orders[0].count).toBe(1);
  });

  it('decrease count in orders', () => {
    const state = {
      cameras: [],
      camerasIsLoading: false,
      cameraIsLoading: false,
      promoIsLoading: false,
      similarCamerasIsLoading: false,
      sortedCamerasIsLoading: false,
      reviewsIsLoading: false,
      similarCameras: [],
      reviews: [],
      orders: [basketItem],
    };

    const action = { type: decreaseOrders, payload: basketItem };

    const result = dataSlice.reducer(state, action);

    expect(result.orders[0].count).toBe(0);
  });

  it('should set orders', () => {
    const state = {
      cameras: [],
      camerasIsLoading: false,
      cameraIsLoading: false,
      promoIsLoading: false,
      similarCamerasIsLoading: false,
      sortedCamerasIsLoading: false,
      reviewsIsLoading: false,
      similarCameras: [],
      reviews: [],
      orders: [basketItem],
    };

    const action = { type: setOrders, payload: basketItem };

    const result = dataSlice.reducer(state, action);

    expect(result.orders[0].count).toBe(basketItem.count);
  });

  it('should delete orders', () => {
    const action = { type: deleteOrders, payload: cameras[0] };

    const result = dataSlice.reducer(initialState, action);

    expect(result.orders.length).toBe(0);
  });

  it('should fill cameras by payload', () => {
    const actionForFetchAllCameras = { type: fetchAllCameras.fulfilled.type, payload: cameras };
    const actionForFetchSortedCameras = { type: fetchSortedCameras.fulfilled.type, payload: cameras };

    const result = dataSlice.reducer(initialState, actionForFetchAllCameras);
    const resultSorted = dataSlice.reducer(initialState, actionForFetchSortedCameras);

    expect(result.cameras).toBe(cameras);
    expect(resultSorted.cameras).toBe(cameras);
  });

  it('should set camerasIsLoaging true', () => {
    const actionForFetchAllCameras = { type: fetchAllCameras.pending.type };
    const actionForFetchSortedCameras = { type: fetchSortedCameras.pending.type };

    const result = dataSlice.reducer(initialState, actionForFetchAllCameras);
    const resultSorted = dataSlice.reducer(initialState, actionForFetchSortedCameras);

    expect(result.camerasIsLoading).toBe(true);
    expect(resultSorted.sortedCamerasIsLoading).toBe(true);
  });

  it('should set camerasIsLoaging false', () => {
    const actionForFetchAllCameras = { type: fetchAllCameras.rejected.type };
    const actionForFetchSortedCameras = { type: fetchSortedCameras.rejected.type };

    const result = dataSlice.reducer(initialState, actionForFetchAllCameras);
    const resultSorted = dataSlice.reducer(initialState, actionForFetchSortedCameras);

    expect(result.camerasIsLoading).toBe(false);
    expect(resultSorted.camerasIsLoading).toBe(false);
  });

  it('should fill camera by payload', () => {
    const action = { type: fetchCamera.fulfilled.type, payload: cameras[0] };

    const result = dataSlice.reducer(initialState, action);

    expect(result.camera).toBe(cameras[0]);
  });

  it('should set cameraIsLoaging true', () => {
    const action = { type: fetchCamera.pending.type };

    const result = dataSlice.reducer(initialState, action);

    expect(result.cameraIsLoading).toBe(true);
  });

  it('should set cameraIsLoading false', () => {
    const action = { type: fetchCamera.rejected.type };

    const result = dataSlice.reducer(initialState, action);

    expect(result.cameraIsLoading).toBe(false);
  });

  it('should fill promo by payload', () => {
    const action = { type: fetchPromo.fulfilled.type, payload: promoProduct };

    const result = dataSlice.reducer(initialState, action);

    expect(result.promo).toBe(promoProduct);
  });

  it('should set promoIsLoading true', () => {
    const action = { type: fetchPromo.pending.type, payload: true };

    const result = dataSlice.reducer(initialState, action);

    expect(result.promoIsLoading).toBe(true);
  });

  it('should set promoIsLoading false', () => {
    const action = { type: fetchPromo.rejected.type, payload: false };

    const result = dataSlice.reducer(initialState, action);

    expect(result.promoIsLoading).toBe(false);
  });

  it('should fill reviews by payload', () => {
    const action = { type: fetchReviews.fulfilled.type, payload: reviews };

    const result = dataSlice.reducer(initialState, action);

    expect(result.reviews).toBe(reviews);
  });

  it('should set reviewsIsLoading true', () => {
    const action = { type: fetchReviews.pending.type, payload: true };

    const result = dataSlice.reducer(initialState, action);

    expect(result.reviewsIsLoading).toBe(true);
  });

  it('should set reviewsIsLoading false', () => {
    const action = { type: fetchReviews.rejected.type, payload: false };

    const result = dataSlice.reducer(initialState, action);

    expect(result.reviewsIsLoading).toBe(false);
  });

  it('should fill similarCameras by payload', () => {
    const action = { type: fetchSimilarCameras.fulfilled.type, payload: similarCameras };

    const result = dataSlice.reducer(initialState, action);

    expect(result.similarCameras).toBe(similarCameras);
  });

  it('should set similarCamerasIsLoading true', () => {
    const action = { type: fetchSimilarCameras.pending.type, payload: true };

    const result = dataSlice.reducer(initialState, action);

    expect(result.similarCamerasIsLoading).toBe(true);
  });

  it('should set similarCamerasIsLoading false', () => {
    const action = { type: fetchSimilarCameras.rejected.type, payload: false };

    const result = dataSlice.reducer(initialState, action);

    expect(result.similarCamerasIsLoading).toBe(false);
  });
});
