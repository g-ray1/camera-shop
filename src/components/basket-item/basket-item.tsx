import { BasketItemType } from '../../types/types';
import { useAppDispatch, useScrollLock } from '../../hooks/hooks';
import { increaseOrders, decreaseOrders, setOrders, setSelectedCamera } from '../../store/data-slice/data-slice';
import { useRef } from 'react';
import { setModalContent, setModalMode } from '../../store/utils-slice/utils-slice';
import { ModalContent } from '../../consts';

type BasketItemProps = {
  product: BasketItemType;
};

function BasketItem({ product }: BasketItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const { name, vendorCode, type, level, price, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x } = product.camera;
  const { lockScroll } = useScrollLock();
  const maxCount = 99;
  const minCount = 1;

  const handleDecreaseButtoneClick = () => {
    dispatch(decreaseOrders(product));
  };

  const handleIncreaseButtoneClick = () => {
    dispatch(increaseOrders(product));
  };

  const handleInputBlur = () => {
    if (inputRef.current && Number(inputRef.current.value) < minCount) {
      inputRef.current.value = String(minCount);
      dispatch(setOrders({ camera: product.camera, count: minCount }));
    } else if (inputRef.current && Number(inputRef.current.value) > maxCount) {
      inputRef.current.value = String(maxCount);
      dispatch(setOrders({ camera: product.camera, count: maxCount }));
    } else {
      const value = Number(inputRef.current?.value);
      dispatch(setOrders({ camera: product.camera, count: value }));
    }
  };

  const handleDeleteButtonClick = () => {
    lockScroll();
    dispatch(setSelectedCamera(product.camera));
    dispatch(setModalContent(ModalContent.RemoveBasketItem));
    dispatch(setModalMode(true));
  };

  return (
    <li className="basket-item">
      <div className="basket-item__img">
        <picture>
          <source type="image/webp" srcSet={`${previewImgWebp}, ${previewImgWebp2x} 2x`} />
          <img src={previewImg} srcSet={`${previewImg2x} 2x`} width="140" height="120" alt={name} />
        </picture>
      </div>
      <div className="basket-item__description">
        <p className="basket-item__title">{name}</p>
        <ul className="basket-item__list">
          <li className="basket-item__list-item"><span className="basket-item__article">Артикул:</span> <span className="basket-item__number">{vendorCode}</span>
          </li>
          <li className="basket-item__list-item">{type}</li>
          <li className="basket-item__list-item">{level} уровень</li>
        </ul>
      </div>
      <p className="basket-item__price"><span className="visually-hidden">Цена:</span>{price.toLocaleString()} ₽</p>
      <div className="quantity">
        <button
          className="btn-icon btn-icon--prev"
          aria-label="уменьшить количество товара"
          onClick={handleDecreaseButtoneClick}
          disabled={product.count === minCount}
        >
          <svg width="7" height="12" aria-hidden="true">
            <use xlinkHref="#icon-arrow"></use>
          </svg>
        </button>
        <label className="visually-hidden" htmlFor="counter1"></label>
        <input
          ref={inputRef}
          type="number"
          id="counter1"
          placeholder={String(product.count)}
          aria-label="количество товара"
          onBlur={handleInputBlur}
        />
        <button
          className="btn-icon btn-icon--next"
          aria-label="увеличить количество товара"
          onClick={handleIncreaseButtoneClick}
          disabled={product.count === maxCount}
        >
          <svg width="7" height="12" aria-hidden="true">
            <use xlinkHref="#icon-arrow"></use>
          </svg>
        </button>
      </div>
      <div className="basket-item__total-price"><span className="visually-hidden">Общая цена:</span>{(price * product.count).toLocaleString()} ₽</div>
      <button
        className="cross-btn"
        type="button"
        aria-label="Удалить товар"
        onClick={handleDeleteButtonClick}
      >
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg>
      </button>
    </li>
  );
}

export default BasketItem;
