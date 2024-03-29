import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout';

jest.mock('react-redux');

describe('Layout component', () => {
  it('Snapshot', () => {
    const view = render(<Layout />, {wrapper: BrowserRouter});

    expect(view).toMatchSnapshot();
  });
});
