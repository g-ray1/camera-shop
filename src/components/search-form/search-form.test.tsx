import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SearchForm from './search-form';

jest.mock('react-redux');

describe('SearchForm component', () => {
  it('Snapshot', () => {
    const view = render(<SearchForm />, {wrapper: BrowserRouter});

    expect(view).toMatchSnapshot();
  });
});
