import { render } from '@testing-library/react';
import CatalogSort from './catalog-sort';

describe('CatalogSort component', () => {
  it('Snapshot', () => {
    const view = render(<CatalogSort />);

    expect(view).toMatchSnapshot();
  });
});
