import { render } from '@testing-library/react';
import { reviews } from '../../mocks/reviews';
import ReviewsBlock from './reviews-block';

jest.mock('react-redux');

describe('ReviewsBlock component', () => {
  it('Snapshot', () => {
    const view = render(<ReviewsBlock reviews={reviews}/>);

    expect(view).toMatchSnapshot();
  });
});
