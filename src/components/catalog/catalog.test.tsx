import { configureMockStore } from '@jedmao/redux-mock-store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { cameras } from '../../mocks/cameras';
import Catalog from './catalog';

jest.mock('react-redux');

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  data: { cameras: cameras },
});

describe('Catalog component', () => {
  it('Snapshot', () => {
    const view = render(
      <Provider store={store}>
        <Catalog />
      </Provider>
    );

    expect(view).toMatchSnapshot();
  });
});
