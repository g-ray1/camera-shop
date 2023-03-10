import { render } from '@testing-library/react';
import Header from './header';

describe('Header component', () => {
  it('Snapshot', () => {
    const view = render(<Header />);

    expect(view).toMatchSnapshot();
  });
});
