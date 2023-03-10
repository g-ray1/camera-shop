import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PaginationList from './pagination-list';

const handleClick = jest.fn();

describe('PaginationList component', () => {
  it('Snapshot', () => {
    const view = render(<PaginationList cardsCount={10} currentPage={1} clickHandler={handleClick} />, {wrapper: BrowserRouter});

    expect(view).toMatchSnapshot();
  });
});
