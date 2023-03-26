import { Link } from 'react-router-dom';
import { PRODUCTS_PER_PAGE } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getAllCameras } from '../../store/data-slice/data-slice-selectors';
import { setCurrentCatalogPage } from '../../store/utils-slice/utils-slice';
import { getCurrentCatalogPage } from '../../store/utils-slice/utils-slice-selectors';

function PaginationList(): JSX.Element {
  const { length } = useAppSelector(getAllCameras);
  let currentCatalogPage = useAppSelector(getCurrentCatalogPage);
  const dispatch = useAppDispatch();

  const getPages = () => {
    const pagesCount = Math.ceil(length / PRODUCTS_PER_PAGE);
    const pages = [];

    if (currentCatalogPage > 1) {
      pages.push(
        <li className="pagination__item" key='back'>
          <Link
            to={'/'}
            className="pagination__link pagination__link--text"
            onClick={() => dispatch(setCurrentCatalogPage(--currentCatalogPage))}
          >Назад
          </Link>
        </li>
      );
    }

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(
        <li className="pagination__item" key={i}>
          <Link
            to={'/'}
            className={`pagination__link ${i === currentCatalogPage ? 'pagination__link--active' : ''}`}
            onClick={() => dispatch(setCurrentCatalogPage(i))}
          >{i}
          </Link>
        </li>
      );
    }

    if (length > PRODUCTS_PER_PAGE && currentCatalogPage < pagesCount) {
      pages.push(
        <li className="pagination__item" key='forward'>
          <Link
            to={'/'}
            className="pagination__link pagination__link--text"
            onClick={() => dispatch(setCurrentCatalogPage(++currentCatalogPage))}
          >Далее
          </Link>
        </li>
      );
    }

    return pages;
  };

  return (
    <div className="pagination">
      <ul className="pagination__list">

        {getPages()}

      </ul>
    </div>
  );
}

export default PaginationList;
