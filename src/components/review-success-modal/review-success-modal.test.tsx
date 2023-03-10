import { render } from '@testing-library/react';
import ReviewSuccessModal from './review-success-modal';

jest.mock('react-redux');

describe('ReviewSuccessModal component', () => {
  it('Snapshot', () => {
    const view = render(<ReviewSuccessModal />);

    expect(view).toMatchSnapshot();
  });
});
