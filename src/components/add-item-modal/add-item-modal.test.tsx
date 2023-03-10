import { render } from '@testing-library/react';
import AddItemModal from './add-item-modal';

describe('AddItemModal component', () => {
  it('Snapshot', () => {
    const view = render(<AddItemModal />);

    expect(view).toMatchSnapshot();
  });
});
