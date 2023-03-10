import { render } from '@testing-library/react';
import Layout from './layout';

describe('Layout component', () => {
  it('Snapshot', () => {
    const view = render(<Layout />);

    expect(view).toMatchSnapshot();
  });
});
