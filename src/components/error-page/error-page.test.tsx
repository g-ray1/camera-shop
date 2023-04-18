import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ErrorPage from './error-page';

jest.mock('react-redux');

describe('Page404 component', () => {
  it('Snapshot', () => {
    const view = render(<ErrorPage />, {wrapper: BrowserRouter});

    expect(view).toMatchSnapshot();
  });
});
