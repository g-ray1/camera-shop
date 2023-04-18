import { useAppSelector } from '../../hooks/hooks';
import { getOrders } from '../../store/data-slice/data-slice-selectors';
import { getErrorMessage } from '../../store/utils-slice/utils-slice-selectors';
import BasketItem from '../basket-item/basket-item';
import BasketSummary from '../basket-summary/basket-summary';
import ErrorPage from '../error-page/error-page';

function Basket(): JSX.Element {
  const productsInCart = useAppSelector(getOrders);
  const errorMessage = useAppSelector(getErrorMessage);

  const getCards = () => {
    if (productsInCart.length === 0) {
      return <h3>Ваша корзина пуста.</h3>;
    }

    const result = productsInCart.map((product) => <BasketItem key={product.camera.id} product={product} />);

    return result;
  };

  if (errorMessage !== '') {
    return <ErrorPage />;
  }

  return (
    <section className="basket">
      <div className="container">
        <h1 className="title title--h2">Корзина</h1>
        <ul className="basket__list">

          {getCards()}

        </ul>

        <BasketSummary productsInCart={productsInCart} />

      </div>
    </section>
  );
}

export default Basket;
