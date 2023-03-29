import { configureMockStore } from '@jedmao/redux-mock-store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import CatalogSort from './catalog-sort';

jest.mock('react-redux');

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  data: { sortParams: '' },
});

describe('CatalogSort component', () => {
  it('Snapshot', () => {
    const view = render(
      <Provider store={store}>
        <CatalogSort />
      </Provider>, { wrapper: BrowserRouter });

    expect(view).toMatchSnapshot();
  });
});
