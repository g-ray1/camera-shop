import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { cameras } from '../../mocks/cameras';
import Slider from './slider';

jest.mock('react-redux');

describe('Slider component', () => {
  it('Snapshot', () => {
    const view = render(<Slider products={cameras} />, {wrapper: BrowserRouter});

    expect(view).toMatchSnapshot();
  });

  it('Should return empty element', () => {
    const view = render(<Slider products={[]} />, {wrapper: BrowserRouter});

    expect(view.container).toBeEmptyDOMElement();
  });
});
