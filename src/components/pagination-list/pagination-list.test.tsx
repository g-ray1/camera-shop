import { configureMockStore } from '@jedmao/redux-mock-store';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { cameras } from '../../mocks/cameras';
import thunk from 'redux-thunk';
import PaginationList from './pagination-list';
import { Provider } from 'react-redux';

jest.mock('react-redux');

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  data: { cameras: cameras },
});

describe('PaginationList component', () => {
  it('Snapshot', () => {
    const view = render(
      <Provider store={store}>
        <PaginationList />
      </Provider>, { wrapper: BrowserRouter });

    expect(view).toMatchSnapshot();
  });
});
