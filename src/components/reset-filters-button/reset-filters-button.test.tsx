import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ResetFiltresButton from './reset-filters-button';

jest.mock('react-redux');

describe('ResetFiltresButton component', () => {
  it('Snapshot', () => {
    const view = render(<ResetFiltresButton />, { wrapper: BrowserRouter });

    expect(view).toMatchSnapshot();
  });
});
