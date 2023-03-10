import { render } from '@testing-library/react';
import { reviews } from '../../mocks/reviews';
import ReviewCard from './review-card';

describe('ReviewCard component', () => {
  it('Snapshot', () => {
    const view = render(<ReviewCard review={reviews[0]} />);

    expect(view).toMatchSnapshot();
  });
});
