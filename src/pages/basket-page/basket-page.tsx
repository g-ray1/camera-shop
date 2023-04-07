import Basket from '../../components/basket/basket';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';

function BasketPage(): JSX.Element {
  return (
    <main>
      <div className="page-content">

        <Breadcrumbs />

        <Basket />

      </div>
    </main>
  );
}

export default BasketPage;
