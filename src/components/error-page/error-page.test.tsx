import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Page404 from './error-page';


describe('Page404 component', () => {
  it('Snapshot', () => {
    const view = render(<Page404 />, {wrapper: BrowserRouter});

    expect(view).toMatchSnapshot();
  });
});
