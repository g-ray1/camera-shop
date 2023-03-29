import { configureMockStore } from '@jedmao/redux-mock-store';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import PriceBlock from './price-block';
import { Provider } from 'react-redux';

jest.mock('react-redux');

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  utils: { priceParams: '' },
});

describe('PriceBlock component', () => {
  it('Snapshot', () => {
    const view = render(
      <Provider store={store}>
        <PriceBlock />
      </Provider>, { wrapper: BrowserRouter });

    expect(view).toMatchSnapshot();
  });
});
