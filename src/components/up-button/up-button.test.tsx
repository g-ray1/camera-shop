import { render } from '@testing-library/react';
import UpButton from './up-button';

describe('UpButton component', () => {
  it('Snapshot', () => {
    const view = render(<UpButton />);

    expect(view).toMatchSnapshot();
  });
});
