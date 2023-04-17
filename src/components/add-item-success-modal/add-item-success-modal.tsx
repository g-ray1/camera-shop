import { forwardRef } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { setModalMode } from '../../store/utils-slice/utils-slice';
import { useNavigate } from 'react-router-dom';

const AddItemSuccessModal = forwardRef<HTMLButtonElement>((props, ref) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleGoToCatalogButtonClick = () => {
    dispatch(setModalMode(false));
  };

  const handleGoToBasketButtonClick = () => {
    navigate('/basket');
    dispatch(setModalMode(false));
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
    </>
  );
}
);

AddItemSuccessModal.displayName = 'AddItemSuccessModal';

export default AddItemSuccessModal;
