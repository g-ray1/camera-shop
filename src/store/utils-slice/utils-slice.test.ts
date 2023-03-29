import { utilSlice, setModalMode, setModalContent, setCurrentCatalogPage, setSortParamsInState, setFilterParamsInState, setPriceParamsInState } from './utils-slice';
import { postUserReview } from '../api-actions';

const utilsInitialState = {
  modalIsActive: false,
  modalContent: 'addItem',
  isReviewFormDisabled: false,
  currentCatalogPage: 1,
  sortParams: '',
  filterParams: '',
  priceParams: '',
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

  it('should set currentCatalogPage to 2', () => {
    const action = { type: setCurrentCatalogPage, payload: 2 };

    const result = utilSlice.reducer(utilsInitialState, action);

    expect(result.currentCatalogPage).toBe(2);
  });

  it('should set sortParams to text', () => {
    const action = { type: setSortParamsInState, payload: 'text' };

    const result = utilSlice.reducer(utilsInitialState, action);

    expect(result.sortParams).toBe('text');
  });

  it('should set filterParams to text', () => {
    const action = { type: setFilterParamsInState, payload: 'text' };

    const result = utilSlice.reducer(utilsInitialState, action);

    expect(result.filterParams).toBe('text');
  });

  it('should set priceParams to text', () => {
    const action = { type: setPriceParamsInState, payload: 'text' };

    const result = utilSlice.reducer(utilsInitialState, action);

    expect(result.priceParams).toBe('text');
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
