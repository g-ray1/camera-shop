import { forwardRef } from 'react';
import { useAppDispatch, useScrollLock } from '../../hooks/hooks';
import { setModalMode } from '../../store/utils-slice/utils-slice';
import { useNavigate } from 'react-router-dom';

const AddItemSuccessModal = forwardRef<HTMLButtonElement>((props, ref) => {
  const dispatch = useAppDispatch();
  const { unlockScroll } = useScrollLock();
  const navigate = useNavigate();

  const handleGoToCatalogButtonClick = () => {
    dispatch(setModalMode(false));
    unlockScroll();
  };

  const handleGoToBasketButtonClick = () => {
    navigate('/basket');
    dispatch(setModalMode(false));
    unlockScroll();
  };

  return (
    <>
      <p className="title title--h4">Товар успешно добавлен в корзину</p>
      <svg className="modal__icon" width="86" height="80" aria-hidden="true">
        <use xlinkHref="#icon-success"></use>
      </svg>
      <div className="modal__buttons">
        <button
          ref={ref}
          className="btn btn--transparent modal__btn"
          onClick={handleGoToCatalogButtonClick}
        >
          Продолжить покупки
        </button>
        <button
          className="btn btn--purple modal__btn modal__btn--fit-width"
          onClick={handleGoToBasketButtonClick}
        >
          Перейти в корзину
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

AddItemSuccessModal.displayName = 'AddItemSuccessModal';

export default AddItemSuccessModal;
