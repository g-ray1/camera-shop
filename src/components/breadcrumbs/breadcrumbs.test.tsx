import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Breadcrumbs from './breadcrumbs';

describe('Breadcrumbs component', () => {
  it('Snapshot with props', () => {
    const view = render(<Breadcrumbs productName='productName'/>, {wrapper: BrowserRouter});

    expect(view).toMatchSnapshot();
  });

  it('Snapshot without props', () => {
    const view = render(<Breadcrumbs />, {wrapper: BrowserRouter});

    expect(view).toMatchSnapshot();
  });
});
