import { configureMockStore } from '@jedmao/redux-mock-store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import CatalogFilter from './catalog-filter';

jest.mock('react-redux');

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  data: { filterParams: '' },
});

describe('CatalogFilter component', () => {
  it('Snapshot', () => {
    const view = render(
      <Provider store={store}>
        <CatalogFilter />
      </Provider>, { wrapper: BrowserRouter });

    expect(view).toMatchSnapshot();
  });
});
