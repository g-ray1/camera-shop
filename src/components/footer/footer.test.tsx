import { render } from '@testing-library/react';
import Footer from './footer';

describe('Footer component', () => {
  it('Snapshot', () => {
    const view = render(<Footer />);

    expect(view).toMatchSnapshot();
  });
});
