import { forwardRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useScrollLock } from '../../hooks/hooks';
import { fetchReviews } from '../../store/api-actions';
import { setModalMode } from '../../store/utils-slice/utils-slice';

const ReviewSuccessModal = forwardRef<HTMLButtonElement>((props, ref) => {
  const dispatch = useAppDispatch();
  const { id } = useParams<keyof UserParams>() as UserParams;
  const { unlockScroll } = useScrollLock();

  const handleButtonClick = () => {
    dispatch(setModalMode(false));
    unlockScroll();
  };

  useEffect(() => {
    dispatch(fetchReviews(id));
  }, []);

  return (
    <>
      <p className="title title--h4">Спасибо за отзыв</p>
      <svg className="modal__icon" width="80" height="78" aria-hidden="true">
        <use xlinkHref="#icon-review-success"></use>
      </svg>
      <div className="modal__buttons">
        <button
          className="btn btn--purple modal__btn modal__btn--fit-width"
          type="button"
          ref={ref}
          onClick={handleButtonClick}
        >
          Вернуться к покупкам
        </button>
      </div>
      <button className="cross-btn" type="button" aria-label="Закрыть попап">
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg>
      </button>
    </>
  );
}
);

ReviewSuccessModal.displayName = 'ReviewSuccessModal';

export default ReviewSuccessModal;
