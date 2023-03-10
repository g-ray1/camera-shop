import { render } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';
import CatalogPage from './catalog-page';
import { Provider } from 'react-redux';
import { cameras } from '../../mocks/cameras';

jest.mock('react-redux');

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  data: { cameras: cameras },
});

describe('CatalogPage component', () => {
  it('Snapshot', () => {
    const view = render(
      <Provider store={store}>
        <CatalogPage />;
      </Provider>
    );

    expect(view).toMatchSnapshot();
  });
});

