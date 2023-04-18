import { forwardRef } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { useNavigate } from 'react-router-dom';
import { setModalMode } from '../../store/utils-slice/utils-slice';

const OrderSuccessModal = forwardRef<HTMLButtonElement>((props, ref) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleGoToBasketButtonClick = () => {
    dispatch(setModalMode(false));
    navigate('/');
  };

  return (
    <>
      <p className="title title--h4">Спасибо за покупку</p>
      <svg className="modal__icon" width="80" height="78" aria-hidden="true">
        <use xlinkHref="#icon-review-success"></use>
      </svg>
      <div className="modal__buttons">
        <button
          className="btn btn--purple modal__btn modal__btn--fit-width"
          type="button"
          onClick={handleGoToBasketButtonClick}
          ref={ref}
        >
          Вернуться к покупкам
        </button>
      </div>
    </>
  );
});

OrderSuccessModal.displayName = 'OrderSuccessModal';
export default OrderSuccessModal;
