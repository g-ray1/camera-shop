import { forwardRef } from 'react';
import { useAppDispatch, useAppSelector, useScrollLock } from '../../hooks/hooks';
import { getSelectedCamera } from '../../store/data-slice/data-slice-selectors';
import { deleteOrders } from '../../store/data-slice/data-slice';
import { setModalMode } from '../../store/utils-slice/utils-slice';

const RemoveBasketItemModal = forwardRef<HTMLButtonElement>((props, ref) => {
  const dispatch = useAppDispatch();
  const product = useAppSelector(getSelectedCamera);
  const { unlockScroll } = useScrollLock();

  if (!product) {
    return null;
  }

  const handleDeleteButtonClick = () => {
    dispatch(deleteOrders(product));
    dispatch(setModalMode(false));
    unlockScroll();
  };

  const handleDenyButtone = () => {
    dispatch(setModalMode(false));
    unlockScroll();
  };

  return (
    <>
      <p className="title title--h4">Удалить этот товар?</p>
      <div className="basket-item basket-item--short">
        <div className="basket-item__img">
          <picture>
            <source type="image/webp" srcSet={`/${product.previewImgWebp}, ${product.previewImgWebp2x} 2x`} />
            <img src={`/${product.previewImg}`} srcSet={`/${product.previewImg2x} 2x`} width="140" height="120" alt={product.name} />
          </picture>
        </div>
        <div className="basket-item__description">
          <p className="basket-item__title">{product.name}</p>
          <ul className="basket-item__list">
            <li className="basket-item__list-item"><span className="basket-item__article">Артикул:</span> <span className="basket-item__number">{product.vendorCode}</span>
            </li>
            <li className="basket-item__list-item">{product.type}</li>
            <li className="basket-item__list-item">{product.level} уровень</li>
          </ul>
        </div>
      </div>
      <div className="modal__buttons">
        <button
          className="btn btn--purple modal__btn modal__btn--half-width"
          type="button"
          ref={ref}
          onClick={handleDeleteButtonClick}
        >
          Удалить
        </button>
        <button
          className="btn btn--transparent modal__btn modal__btn--half-width"
          onClick={handleDenyButtone}
        >
          Продолжить покупки
        </button>
      </div>
      <button className="cross-btn" type="button" aria-label="Закрыть попап">
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg>
      </button>
    </>
  );
});

RemoveBasketItemModal.displayName = 'RemoveBasketItemModal';

export default RemoveBasketItemModal;
