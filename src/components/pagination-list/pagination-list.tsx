import { Link } from 'react-router-dom';
import { PRODUCTS_PER_PAGE } from '../../consts';

type PaginationListProps = {
  cardsCount: number;
  currentPage: number;
  clickHandler: React.Dispatch<React.SetStateAction<number>>;
}

function PaginationList({ cardsCount, currentPage, clickHandler }: PaginationListProps): JSX.Element {

  const getPages = () => {
    const pagesCount = Math.ceil(cardsCount / PRODUCTS_PER_PAGE);
    const pages = [];

    if (currentPage > 1) {
      pages.push(
        <li className="pagination__item" key='back'>
          <Link
            to="#"
            className="pagination__link pagination__link--text"
            onClick={() => clickHandler(--currentPage)}
          >Назад
          </Link>
        </li>
      );
    }

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(
        <li className="pagination__item" key={i}>
          <Link
            to="#"
            className={`pagination__link ${i === currentPage ? 'pagination__link--active' : ''}`}
            onClick={() => clickHandler(i)}
          >{i}
          </Link>
        </li>
      );
    }

    if (cardsCount > PRODUCTS_PER_PAGE && currentPage < pagesCount) {
      pages.push(
        <li className="pagination__item" key='forward'>
          <Link
            to="#"
            className="pagination__link pagination__link--text"
            onClick={() => clickHandler(++currentPage)}
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
