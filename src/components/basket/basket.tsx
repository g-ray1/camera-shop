import { useAppSelector } from '../../hooks/hooks';
import { getOrders } from '../../store/data-slice/data-slice-selectors';
import BasketItem from '../basket-item/basket-item';
import BasketSummary from '../basket-summary/basket-summary';

function Basket(): JSX.Element {
  const productsInCart = useAppSelector(getOrders);
  const summaryPrice = productsInCart.reduce((sum, product) => sum + product.camera.price * product.count, 0);

  const getCards = () => {
    if (productsInCart.length === 0) {
      return <h3>Ваша корзина пуста.</h3>;
    }

    const result = productsInCart.map((product) => <BasketItem key={product.camera.id} product={product} />);

    return result;
  };

  return (
    <section className="basket">
      <div className="container">
        <h1 className="title title--h2">Корзина</h1>
        <ul className="basket__list">

          {getCards()}

        </ul>

        <BasketSummary summaryPrice={summaryPrice} />

      </div>
    </section>
  );
}

export default Basket;
