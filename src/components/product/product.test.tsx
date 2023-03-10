import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { cameras } from '../../mocks/cameras';
import Product from './product';

jest.mock('react-redux');

describe('Product component', () => {
  it('Snapshot', () => {
    const view = render(<Product product={cameras[0]} />);

    expect(view).toMatchSnapshot();
  });

  it('Should render Page404 component', () => {
    render(<Product />, {wrapper: BrowserRouter});

    expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
  });
});
