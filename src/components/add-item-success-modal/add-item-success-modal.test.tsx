import { render } from '@testing-library/react';
import AddItemSuccessModal from './add-item-success-modal';
import { BrowserRouter } from 'react-router-dom';

jest.mock('react-redux');

describe('AddItemSuccessModal component', () => {
  it('Snapshot', () => {
    const view = render(<AddItemSuccessModal />, {wrapper: BrowserRouter});

    expect(view).toMatchSnapshot();
  });
});
