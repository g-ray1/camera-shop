import { render } from '@testing-library/react';
import Basket from './basket';
import { BrowserRouter } from 'react-router-dom';

jest.mock('react-redux');

describe('Basket component', () => {
  it('Snapshot', () => {
    const view = render(<Basket />, {wrapper: BrowserRouter});

    expect(view).toMatchSnapshot();
  });
});
