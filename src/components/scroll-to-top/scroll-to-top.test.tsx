import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './scroll-to-top';

describe('ScrollToTop component', () => {
  it('Snapshot', () => {
    const view = render(<ScrollToTop />, {wrapper: BrowserRouter});

    expect(view).toMatchSnapshot();
  });
});
