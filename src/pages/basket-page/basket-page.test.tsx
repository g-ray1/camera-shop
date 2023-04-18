import { render } from '@testing-library/react';
import BasketPage from './basket-page';
import { BrowserRouter } from 'react-router-dom';

jest.mock('react-redux');

describe('BasketPage component', () => {
  it('Should render BasketPage', () => {
    const view = render(<BasketPage />, {wrapper: BrowserRouter});

    expect(view).toMatchSnapshot();
  });
});

