import { utilSlice, setModalMode,
  setModalContent, setCurrentCatalogPage,
  setSortParamsInState, setFilterParamsInState,
  setPriceParamsInState, setDiscount, setErrorMessage} from './utils-slice';
import { postCoupon, postOrder, postUserReview } from '../api-actions';

const utilsInitialState = {
  modalIsActive: false,
  modalContent: 'addItem',
  isReviewFormDisabled: false,
  currentCatalogPage: 1,
  sortParams: '',
  filterParams: '',
  priceParams: '',
  isOrderPosting: false,
  errorMessage: '',
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

  it('should set discount to 0', () => {
    const action = { type: setDiscount, payload: 0 };

    const result = utilSlice.reducer(utilsInitialState, action);

    expect(result.discount).toBe(0);
  });

  it('should set errorMessage to text', () => {
    const action = { type: setErrorMessage, payload: 'text' };

    const result = utilSlice.reducer(utilsInitialState, action);

    expect(result.errorMessage).toBe('text');
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

  it('should set isCouponFormDisabled on true when pending', () => {
    const action = { type: postCoupon.pending.type, payload: true };

    const result = utilSlice.reducer(utilsInitialState, action);

    expect(result.isCouponFormDisabled).toEqual(true);
  });

  it('should set isCouponFormDisabled on false when rejected', () => {
    const action = { type: postCoupon.rejected.type, payload: false };

    const result = utilSlice.reducer(utilsInitialState, action);

    expect(result.isCouponFormDisabled).toEqual(false);
  });

  it('should set isCouponFormDisabled on false when fulfilled', () => {
    const action = { type: postCoupon.fulfilled.type, payload: false };

    const result = utilSlice.reducer(utilsInitialState, action);

    expect(result.isCouponFormDisabled).toEqual(false);
  });

  it('should set isOrderPosting on true when pending', () => {
    const action = { type: postOrder.pending.type, payload: true };

    const result = utilSlice.reducer(utilsInitialState, action);

    expect(result.isOrderPosting).toEqual(true);
  });

  it('should set isOrderPosting on false when rejected', () => {
    const action = { type: postOrder.rejected.type, payload: false };

    const result = utilSlice.reducer(utilsInitialState, action);

    expect(result.isOrderPosting).toEqual(false);
  });

  it('should set isOrderPosting on false when fulfilled', () => {
    const action = { type: postOrder.fulfilled.type, payload: false };

    const result = utilSlice.reducer(utilsInitialState, action);

    expect(result.isOrderPosting).toEqual(false);
  });
});
