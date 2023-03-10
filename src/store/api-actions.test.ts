import { createApi } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';
import { fetchAllCameras, fetchCamera, fetchPromo, fetchSimilarCameras, fetchReviews, postUserReview } from './api-actions';
import { RootState } from '.';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { cameras } from '../mocks/cameras';
import { APIRoutes } from '../consts';
import { promoProduct } from '../mocks/promo';
import { similarCameras } from '../mocks/similar';
import { reviews } from '../mocks/reviews';

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
});
