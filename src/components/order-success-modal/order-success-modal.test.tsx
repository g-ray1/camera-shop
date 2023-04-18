import { render } from '@testing-library/react';
import OrderSuccessModal from './order-success-modal';
import { BrowserRouter } from 'react-router-dom';

jest.mock('react-redux');

describe('OrderSuccessModal component', () => {
  it('Snapshot', () => {
    const view = render(<OrderSuccessModal />, {wrapper: BrowserRouter});

    expect(view).toMatchSnapshot();
  });
});
