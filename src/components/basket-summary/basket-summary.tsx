import { FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { postCoupon, postOrder } from '../../store/api-actions';
import { getDiscount } from '../../store/utils-slice/utils-slice-selectors';
import { BasketItemType } from '../../types/types';
import { OrderPost } from '../../types/types';

type BasketItemProps = {
  productsInCart: BasketItemType[];
}

function BasketSummary({ productsInCart }: BasketItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const discount = useAppSelector(getDiscount);
  const [promocode, setPromocode] = useState('');

  const summaryPrice = productsInCart.reduce((sum, product) => sum + product.camera.price * product.count, 0);

  const handlePromoSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if (promocode.trim()) {
      dispatch(postCoupon({ coupon: promocode }));
    }
  };

  const getDiscountValue = () => {
    if (discount) {
      return summaryPrice * discount / 100;
    }

    return 0;
  };

  const getToPayValue = () => summaryPrice - getDiscountValue();

  const getValidation = () => {
    switch (discount) {
      case undefined:
        return '';
      case 0:
        return 'is-invalid';
      default:
        return 'is-valid';
    }
  };

  const getOrder = (): OrderPost => {
    const camerasIds: number[] = [];

    productsInCart.forEach((product) => {
      for (let i = product.count; i !== 0; i--) {
        camerasIds.push(product.camera.id);
      }
    });

    const validation = getValidation();

    if (validation === 'is-valid') {
      return { camerasIds: camerasIds, coupon: promocode };
    }

    return { camerasIds: camerasIds, coupon: null };
  };

  const handleBuyButtoneClick = () => {
    const order = getOrder();
    dispatch(postOrder(order));
  };

  return (
    <div className="basket__summary">
      <div className="basket__promo">
        <p className="title title--h4">Если у вас есть промокод на скидку, примените его в этом поле</p>
        <div className="basket-form">
          <form
            onSubmit={handlePromoSubmit}
          >
            <div className={`custom-input ${getValidation()}`}>
              <label>
                <span className="custom-input__label">Промокод</span>
                <input
                  type="text"
                  name="promo"
                  placeholder="Введите промокод"
                  value={promocode}
                  onChange={(evt) => setPromocode(evt.target.value)}
                  disabled={productsInCart.length === 0 || getToPayValue() === 0}
                />
              </label>
              <p className="custom-input__error">Промокод неверный</p>
              <p className="custom-input__success">Промокод принят!</p>
            </div>
            <button
              className="btn"
              type="submit"
              disabled={promocode === ''}
            >
              Применить
            </button>
          </form>
        </div>
      </div>
      <div className="basket__summary-order">
        <p className="basket__summary-item">
          <span className="basket__summary-text">Всего:</span>
          <span className="basket__summary-value">{summaryPrice.toLocaleString()} ₽</span>
        </p>
        <p className="basket__summary-item">
          <span className="basket__summary-text">Скидка:</span>
          <span
            className={`basket__summary-value ${discount ? 'basket__summary-value--bonus' : ''}`}
          >
            {getDiscountValue().toLocaleString()} ₽
          </span>
        </p>
        <p className="basket__summary-item">
          <span className="basket__summary-text basket__summary-text--total">К оплате:</span>
          <span className="basket__summary-value basket__summary-value--total">{getToPayValue().toLocaleString()} ₽</span>
        </p>
        <button
          className="btn btn--purple"
          disabled={productsInCart.length === 0 || getToPayValue() === 0}
          onClick={handleBuyButtoneClick}
        >
          Оформить заказ
        </button>
      </div>
    </div>
  );
}

export default BasketSummary;
