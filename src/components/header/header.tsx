import { Link } from 'react-router-dom';
import SearchForm from '../search-form/search-form';
import { useAppSelector } from '../../hooks/hooks';
import { getOrders } from '../../store/data-slice/data-slice-selectors';

function Header(): JSX.Element {
  const productInCart = useAppSelector(getOrders);

  const getBasketCount = () => {
    if (productInCart.length === 0) {
      return null;
    }
    const quantity = productInCart.reduce((sum, item) => sum + item.count, 0);
    return <span className="header__basket-count">{quantity}</span>;
  };

  return (
    <header className="header" id="header">
      <div className="container">
        <a className="header__logo" href="index.html" aria-label="Переход на главную">
          <svg width="100" height="36" aria-hidden="true">
            <use xlinkHref="#icon-logo"></use>
          </svg>
        </a>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item"><Link className="main-nav__link" to="/page_1">Каталог</Link>
            </li>
            <li className="main-nav__item"><Link className="main-nav__link" to="#">Гарантии</Link>
            </li>
            <li className="main-nav__item"><Link className="main-nav__link" to="#">Доставка</Link>
            </li>
            <li className="main-nav__item"><Link className="main-nav__link" to="#">О компании</Link>
            </li>
          </ul>
        </nav>

        <SearchForm />

        <Link className="header__basket-link" to="/basket">
          <svg width="16" height="16" aria-hidden="true">
            <use xlinkHref="#icon-basket"></use>
          </svg>

          {getBasketCount()}

        </Link>
      </div>
    </header>
  );
}

export default Header;
