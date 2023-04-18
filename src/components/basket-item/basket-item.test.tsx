import { render } from '@testing-library/react';
import BasketItem from './basket-item';
import { BrowserRouter } from 'react-router-dom';
import { basketItem } from '../../mocks/basketItem';

jest.mock('react-redux');

describe('BasketItem component', () => {
  it('Snapshot', () => {
    const view = render(<BasketItem product={basketItem}/>, {wrapper: BrowserRouter});

    expect(view).toMatchSnapshot();
  });
});
