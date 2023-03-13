import { render } from '@testing-library/react';
import Loader from './loader';

describe('Loader component', () => {
  it('Snapshot', () => {
    const view = render(<Loader />);

    expect(view).toMatchSnapshot();
  });
});
