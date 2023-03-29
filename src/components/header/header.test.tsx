import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './header';

jest.mock('react-redux');

describe('Header component', () => {
  it('Snapshot', () => {
    const view = render(<Header />, {wrapper: BrowserRouter});

    expect(view).toMatchSnapshot();
  });
});
