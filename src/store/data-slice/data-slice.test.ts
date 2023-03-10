import { cameras } from '../../mocks/cameras';
import { promoProduct } from '../../mocks/promo';
import { reviews } from '../../mocks/reviews';
import { similarCameras } from '../../mocks/similar';
import { fetchAllCameras, fetchCamera, fetchPromo, fetchReviews, fetchSimilarCameras } from '../api-actions';
import { dataSlice } from './data-slice';

const initialState = {
  cameras: [],
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

  it('should fill camera by payload', () => {
    const action = { type: fetchCamera.fulfilled.type, payload: cameras[0] };

    const result = dataSlice.reducer(initialState, action);

    expect(result.camera).toBe(cameras[0]);
  });

  it('should fill promo by payload', () => {
    const action = { type: fetchPromo.fulfilled.type, payload: promoProduct };

    const result = dataSlice.reducer(initialState, action);

    expect(result.promo).toBe(promoProduct);
  });

  it('should fill reviews by payload', () => {
    const action = { type: fetchReviews.fulfilled.type, payload: reviews };

    const result = dataSlice.reducer(initialState, action);

    expect(result.reviews).toBe(reviews);
  });

  it('should fill similarCameras by payload', () => {
    const action = { type: fetchSimilarCameras.fulfilled.type, payload: similarCameras };

    const result = dataSlice.reducer(initialState, action);

    expect(result.similarCameras).toBe(similarCameras);
  });
});
