import { render } from '@testing-library/react';
import ModalWindow from './modal-window';

jest.mock('react-redux');

describe('ModalWindow component', () => {
  it('Snapshot with addItemModal', () => {
    const view = render(<ModalWindow content='addItem' />);

    expect(view).toMatchSnapshot();
  });

  it('Snapshot with addReviewModal', () => {
    const view = render(<ModalWindow content='addReview' />);

    expect(view).toMatchSnapshot();
  });

  it('Snapshot with reviewSuccessModal', () => {
    const view = render(<ModalWindow content='reviewSuccess' />);

    expect(view).toMatchSnapshot();
  });
});
