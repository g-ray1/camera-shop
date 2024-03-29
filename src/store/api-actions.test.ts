import { createApi } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';
import { fetchAllCameras, fetchCamera, fetchPromo, fetchSimilarCameras, fetchReviews, postUserReview, fetchSortedCameras, postCoupon, postOrder } from './api-actions';
import { RootState } from '.';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { cameras } from '../mocks/cameras';
import { APIRoutes } from '../consts';
import { promoProduct } from '../mocks/promo';
import { similarCameras } from '../mocks/similar';
import { reviews } from '../mocks/reviews';
import { setDiscount, setModalContent, setModalMode } from './utils-slice/utils-slice';

describe('Async actions', () => {
  const api = createApi();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    RootState,
    Action<string>,
    ThunkDispatch<RootState, typeof api, Action>
  >(middlewares);

  it('should dispatch cameras when GET /cameras', async () => {
    const allCameras = cameras;

    mockAPI
      .onGet(APIRoutes.Cameras)
      .reply(200, allCameras);

    const store = mockStore();

    await store.dispatch(fetchAllCameras());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchAllCameras.pending.type,
      fetchAllCameras.fulfilled.type
    ]);
  });

  it('should dispatch sorted cameras when GET /cameras', async () => {
    const allCameras = cameras;
    const params = '_sort=price';

    mockAPI
      .onGet(`${APIRoutes.Cameras}?${params}`)
      .reply(200, allCameras);

    const store = mockStore();

    await store.dispatch(fetchSortedCameras(params));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchSortedCameras.pending.type,
      fetchSortedCameras.fulfilled.type
    ]);
  });

  it('should dispatch camera when GET /cameras/id', async () => {
    const camera = cameras[0];

    mockAPI
      .onGet(`${APIRoutes.Cameras}/${camera.id}`)
      .reply(200, camera);

    const store = mockStore();

    await store.dispatch(fetchCamera(camera.id));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchCamera.pending.type,
      fetchCamera.fulfilled.type
    ]);
  });

  it('should dispatch promo when GET /promo', async () => {
    const promo = promoProduct;

    mockAPI
      .onGet(`${APIRoutes.Promo}`)
      .reply(200, promo);

    const store = mockStore();

    await store.dispatch(fetchPromo());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchPromo.pending.type,
      fetchPromo.fulfilled.type
    ]);
  });

  it('should dispatch reviews when GET /cameras/id/reviews', async () => {
    const productReviews = reviews;
    const camera = cameras[0];

    mockAPI
      .onGet(`${APIRoutes.Cameras}/${camera.id}${APIRoutes.Reviews}`)
      .reply(200, productReviews);

    const store = mockStore();

    await store.dispatch(fetchReviews(camera.id.toString()));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchReviews.pending.type,
      fetchReviews.fulfilled.type
    ]);
  });

  it('should dispatch similarCameras when GET /cameras/id/similar', async () => {
    const similar = similarCameras;
    const camera = cameras[0];

    mockAPI
      .onGet(`${APIRoutes.Cameras}/${camera.id}${APIRoutes.SimilarCameras}`)
      .reply(200, similar);

    const store = mockStore();

    await store.dispatch(fetchSimilarCameras(camera.id.toString()));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchSimilarCameras.pending.type,
      fetchSimilarCameras.fulfilled.type
    ]);
  });

  it('should dispatch review when POST /reviews', async () => {
    const review = {
      userName: 'asdasd',
      advantage: 'asdasd',
      disadvantage: 'asdasd',
      review: 'asdasd',
      rating: 1,
      cameraId: 1,
    };

    mockAPI
      .onPost(`${APIRoutes.Reviews}`)
      .reply(200, []);

    const store = mockStore();

    await store.dispatch(postUserReview(review));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      postUserReview.pending.type,
      postUserReview.fulfilled.type
    ]);
  });

  it('should dispatch discount when POST /coupons', async () => {
    const coupon = {
      coupon: '',
    };

    mockAPI
      .onPost(`${APIRoutes.Coupons}`)
      .reply(200, []);

    const store = mockStore();

    await store.dispatch(postCoupon(coupon));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      postCoupon.pending.type,
      setDiscount.type,
      postCoupon.fulfilled.type,
    ]);
  });

  it('should dispatch POST /orders', async () => {
    const order = {
      camerasIds: [1, 2, 3],
      coupon: null,
    };

    mockAPI
      .onPost(`${APIRoutes.Orders}`)
      .reply(200, []);

    const store = mockStore();

    await store.dispatch(postOrder(order));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      postOrder.pending.type,
      setModalMode.type,
      setModalContent.type,
      postOrder.fulfilled.type,
    ]);
  });
});
