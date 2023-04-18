import { render } from '@testing-library/react';
import RemoveBasketItemModal from './remove-basket-item-modal';
import { BrowserRouter } from 'react-router-dom';

jest.mock('react-redux');

describe('RemoveBasketItemModal component', () => {
  it('Snapshot', () => {
    const view = render(<RemoveBasketItemModal />, {wrapper: BrowserRouter});

    expect(view).toMatchSnapshot();
  });
});
