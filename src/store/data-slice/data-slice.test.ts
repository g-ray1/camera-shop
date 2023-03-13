import { cameras } from '../../mocks/cameras';
import { promoProduct } from '../../mocks/promo';
import { reviews } from '../../mocks/reviews';
import { similarCameras } from '../../mocks/similar';
import { fetchAllCameras, fetchCamera, fetchPromo, fetchReviews, fetchSimilarCameras } from '../api-actions';
import { dataSlice } from './data-slice';

const initialState = {
  cameras: [],
  camerasIsLoading: false,
  cameraIsLoading: false,
  promoIsLoading: false,
  similarCamerasIsLoading: false,
  reviewsIsLoading: false,
  similarCameras: [],
  reviews: [],
};

describe('dataSlice', () => {
  it('should return initialState', () => {
    const result = dataSlice.getInitialState();

    expect(result).toEqual(initialState);
  });

  it('should fill cameras by payload', () => {
    const action = { type: fetchAllCameras.fulfilled.type, payload: cameras };

    const result = dataSlice.reducer(initialState, action);

    expect(result.cameras).toBe(cameras);
  });

  it('should set camerasIsLoaging true', () => {
    const action = { type: fetchAllCameras.pending.type, payload: true };

    const result = dataSlice.reducer(initialState, action);

    expect(result.camerasIsLoading).toBe(true);
  });

  it('should set camerasIsLoaging false', () => {
    const action = { type: fetchAllCameras.rejected.type, payload: false };

    const result = dataSlice.reducer(initialState, action);

    expect(result.camerasIsLoading).toBe(false);
  });

  it('should fill camera by payload', () => {
    const action = { type: fetchCamera.fulfilled.type, payload: cameras[0] };

    const result = dataSlice.reducer(initialState, action);

    expect(result.camera).toBe(cameras[0]);
  });

  it('should set cameraIsLoaging true', () => {
    const action = { type: fetchCamera.pending.type, payload: true };

    const result = dataSlice.reducer(initialState, action);

    expect(result.cameraIsLoading).toBe(true);
  });

  it('should set cameraIsLoading false', () => {
    const action = { type: fetchCamera.rejected.type, payload: false };

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
