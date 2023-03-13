import { render } from '@testing-library/react';
import AddReviewModal from './add-review-modal';

jest.mock('react-redux');

describe('AddReviewModal component', () => {
  it('Snapshot', () => {
    const view = render(<AddReviewModal />);

    expect(view).toMatchSnapshot();
  });
});
