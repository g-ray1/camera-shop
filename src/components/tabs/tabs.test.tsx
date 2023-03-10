import { render } from '@testing-library/react';
import { cameras } from '../../mocks/cameras';
import Tabs from './tabs';

describe('Tabs component', () => {
  it('Snapshot', () => {
    const view = render(<Tabs product={cameras[0]}/>);

    expect(view).toMatchSnapshot();
  });
});
