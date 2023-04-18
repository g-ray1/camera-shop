import { render } from '@testing-library/react';
import BasketSummary from './basket-summary';
import { BrowserRouter } from 'react-router-dom';
import { basketItem } from '../../mocks/basketItem';

jest.mock('react-redux');

const productsInCart = [basketItem, basketItem, basketItem];

describe('BasketSummary component', () => {
  it('Snapshot', () => {
    const view = render(<BasketSummary productsInCart={productsInCart}/>, {wrapper: BrowserRouter});

    expect(view).toMatchSnapshot();
  });
});
