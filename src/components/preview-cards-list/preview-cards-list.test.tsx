import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { cameras } from '../../mocks/cameras';
import PreviewCardsList from './preview-cards-list';

jest.mock('react-redux');

describe('PreviewCardsList component', () => {
  it('Snapshot', () => {
    const view = render(<PreviewCardsList products={cameras} />, {wrapper: BrowserRouter});

    expect(view).toMatchSnapshot();
  });
});
