import { render } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';
import App from './app';
import { Provider } from 'react-redux';
import { cameras } from '../../mocks/cameras';

jest.mock('react-redux');

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  data: { cameras: cameras },
});

describe('App component', () => {
  it('App component snapshot', () => {
    const view = render(
      <Provider store={store}>
        <App />;
      </Provider>
    );

    expect(view).toMatchSnapshot();
  });
});
