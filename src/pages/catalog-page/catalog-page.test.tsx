import { render } from '@testing-library/react';
import CatalogPage from './catalog-page';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';

jest.mock('react-redux');

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  data: { filterParams: '' },
});

describe('CatalogPage component', () => {

  it('Snapshot', () => {
    const view = render(
      <Provider store={store}>
        <CatalogPage />
      </Provider>);

    expect(view).toMatchSnapshot();
  });
});

