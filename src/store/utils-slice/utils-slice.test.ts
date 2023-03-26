import { utilSlice, setModalMode, setModalContent } from './utils-slice';
import { postUserReview } from '../api-actions';

const utilsInitialState = {
  modalIsActive: false,
  modalContent: 'addItem',
  isReviewFormDisabled: false,
  currentCatalogPage: 1,
  sortingMode: 'byPrice',
  sortParams: '',
  filterParams: '',
};

describe('utilsSlice', () => {
  it('should return initialState', () => {
    const result = utilSlice.getInitialState();

    expect(result).toEqual(utilsInitialState);
  });

  it('should set modalIsActive to true', () => {
    const action = { type: setModalMode, payload: true };

    const result = utilSlice.reducer(utilsInitialState, action);

    expect(result.modalIsActive).toBe(true);
  });

  it('should set modalContent to text', () => {
    const action = { type: setModalContent, payload: 'text' };

    const result = utilSlice.reducer(utilsInitialState, action);

    expect(result.modalContent).toBe('text');
  });

  it('should set isReviewFormDisabled on true', () => {
    const action = { type: postUserReview.pending.type, payload: true };

    const result = utilSlice.reducer(utilsInitialState, action);

    expect(result.isReviewFormDisabled).toEqual(true);
  });

  it('should set isReviewFormDisabled on false when fulfilled', () => {
    const action = { type: postUserReview.fulfilled.type, payload: false };

    const result = utilSlice.reducer(utilsInitialState, action);

    expect(result.isReviewFormDisabled).toEqual(false);
  });

  it('should set isReviewFormDisabled on false when rejected', () => {
    const action = { type: postUserReview.rejected.type, payload: false };

    const result = utilSlice.reducer(utilsInitialState, action);

    expect(result.isReviewFormDisabled).toEqual(false);
  });
});
