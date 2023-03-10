import { render } from '@testing-library/react';
import CatalogFilter from './catalog-filter';

describe('CatalogFilter component', () => {
  it('Snapshot', () => {
    const view = render(<CatalogFilter />);

    expect(view).toMatchSnapshot();
  });
});
