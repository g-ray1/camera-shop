import { render } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';
import ProductPage from './product-page';
import { similarCameras } from '../../mocks/similar';
import { Provider } from 'react-redux';

jest.mock('react-redux');

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  data: { similarCameras: similarCameras },
});

describe('ProductPage component', () => {
  it('Snapshot', () => {

    const view = render(
      <Provider store={store}>
        <ProductPage />;
      </Provider>
    );

    expect(view).toMatchSnapshot();
  });
});

