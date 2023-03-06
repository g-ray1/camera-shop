import { useEffect, useRef } from 'react';
import { ModalContent } from '../../consts';
import { useAppDispatch, useAppSelector, useScrollLock } from '../../hooks/hooks';
import { setModalMode } from '../../store/utils-slice/utils-slice';
import { getModalContent } from '../../store/utils-slice/utils-slice-selectors';
import AddItemModal from '../add-item-modal/add-item-modal';
import AddReviewModal from '../add-review-modal/add-review-modal';
import ReviewSuccessModal from '../review-success-modal/review-success-modal';

type ModalWindowProps = {
  content: string;
}

function ModalWindow({ content }: ModalWindowProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { unlockScroll } = useScrollLock();
  const modalContent = useAppSelector(getModalContent);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const addButtonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const backButtonRef = useRef<HTMLButtonElement>(null);

  const handleCloseButtoneClick = () => {
    dispatch(setModalMode(false));
    unlockScroll();
  };

  const handleCloseButtoneBlur = () => {
    switch (modalContent) {
      case ModalContent.AddItem:
        addButtonRef.current && addButtonRef.current.focus();
        break;
      case ModalContent.AddReview:
        inputRef.current && inputRef.current.focus();
        break;
      case ModalContent.ReviewSuccess:
        backButtonRef.current && backButtonRef.current.focus();
        break;
    }
  };

  const handleEscKeydown = (evt: KeyboardEvent) => evt.key === 'Escape' && handleCloseButtoneClick();

  const getContent = () => {
    switch (content) {
      case ModalContent.AddItem:
        return <AddItemModal ref={addButtonRef} />;
      case ModalContent.AddReview:
        return <AddReviewModal ref={inputRef} />;
      case ModalContent.ReviewSuccess:
        return <ReviewSuccessModal ref={backButtonRef} />;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscKeydown);

    return () => window.removeEventListener('keydown', handleEscKeydown);
  });

  return (
    <div className="modal is-active">
      <div className="modal__wrapper">
        <div
          className="modal__overlay"
          onClick={handleCloseButtoneClick}
        >
        </div>
        <div className="modal__content">

          {getContent()}

          <button
            className="cross-btn"
            type="button"
            aria-label="Закрыть попап"
            ref={closeButtonRef}
            onClick={handleCloseButtoneClick}
            onBlur={handleCloseButtoneBlur}
          >
            <svg width="10" height="10" aria-hidden="true">
              <use xlinkHref="#icon-close"></use>
            </svg>
          </button>
        </div>
      </div>
    </div >
  );
}

export default ModalWindow;
