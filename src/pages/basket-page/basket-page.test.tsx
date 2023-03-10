import { render } from '@testing-library/react';
import BasketPage from './basket-page';

describe('BasketPage component', () => {
  it('Should render Banner', () => {
    const view = render(<BasketPage />);

    expect(view).toMatchSnapshot();
  });
});

