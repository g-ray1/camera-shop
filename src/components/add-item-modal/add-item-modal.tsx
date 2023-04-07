import { forwardRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getSelectedCamera } from '../../store/data-slice/data-slice-selectors';
import { setOrders } from '../../store/data-slice/data-slice';
import { setModalContent } from '../../store/utils-slice/utils-slice';
import { ModalContent } from '../../consts';

const AddItemModal = forwardRef<HTMLButtonElement>((props, ref) => {
  const dispatch = useAppDispatch();
  const product = useAppSelector(getSelectedCamera);

  if (!product) {
    return null;
  }

  const handleAddButtonClick = () => {
    dispatch(setOrders(product));
    dispatch(setModalContent(ModalContent.AddItemSuccess));
  };

  return (
    <>
      <p className="title title--h4">Добавить товар в корзину</p>
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
            <li className="basket-item__list-item">
              <span className="basket-item__article">Артикул:</span> <span className="basket-item__number">{product.vendorCode}</span>
            </li>
            <li className="basket-item__list-item">{product.type}</li>
            <li className="basket-item__list-item">{product.level}</li>
          </ul>
          <p className="basket-item__price"><span className="visually-hidden">Цена:</span>{product.price} ₽</p>
        </div>
      </div>
      <div className="modal__buttons">
        <button
          className="btn btn--purple modal__btn modal__btn--fit-width"
          type="button"
          autoFocus
          ref={ref}
          onClick={handleAddButtonClick}
        >
          <svg width="24" height="16" aria-hidden="true">
            <use xlinkHref="#icon-add-basket"></use>
          </svg>
          Добавить в корзину
        </button>
      </div>
    </>
  );
});

AddItemModal.displayName = 'ModalContent';

export default AddItemModal;
