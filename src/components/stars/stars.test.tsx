import { render } from '@testing-library/react';
import Stars from './stars';

describe('Stars component', () => {
  it('Snapshot without reviewCount', () => {
    const view = render(<Stars rating={5} />);

    expect(view).toMatchSnapshot();
  });

  it('Snapshot with reviewCount', () => {
    const view = render(<Stars rating={0} reviewCount={100}/>);

    expect(view).toMatchSnapshot();
  });
});
