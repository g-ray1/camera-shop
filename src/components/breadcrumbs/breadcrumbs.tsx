import { Link, useLocation } from 'react-router-dom';

type BreadcrumbsProps = {
  productName?: string;
}

function Breadcrumbs({ productName }: BreadcrumbsProps): JSX.Element {
  const { pathname } = useLocation();

  const getCrumbs = () => {
    switch (pathname) {
      case '/':
        return (
          <li className="breadcrumbs__item">
            <span className="breadcrumbs__link breadcrumbs__link--active">
              Каталог
            </span>
          </li>
        );
      case '/basket':
        return (
          <>
            <li className="breadcrumbs__item">
              <Link className="breadcrumbs__link" to='/'>
                Каталог
                <svg width="5" height="8" aria-hidden="true">
                  <use xlinkHref="#icon-arrow-mini"></use>
                </svg>
              </Link>
            </li>
            <li className="breadcrumbs__item">
              <span className="breadcrumbs__link breadcrumbs__link--active">
                Корзина
              </span>
            </li>
          </>
        );
      default:
        return (
          <>
            <li className="breadcrumbs__item">
              <Link className="breadcrumbs__link" to='/'>
                Каталог
                <svg width="5" height="8" aria-hidden="true">
                  <use xlinkHref="#icon-arrow-mini"></use>
                </svg>
              </Link>
            </li>
            <li className="breadcrumbs__item">
              <span className="breadcrumbs__link breadcrumbs__link--active">
                {productName}
              </span>
            </li>
          </>
        );
    }
  };

  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <Link className="breadcrumbs__link" to='/'>
              Главная
              <svg width="5" height="8" aria-hidden="true">
                <use xlinkHref="#icon-arrow-mini"></use>
              </svg>
            </Link>
          </li>
          {getCrumbs()}
        </ul>
      </div>
    </div>
  );
}

export default Breadcrumbs;
