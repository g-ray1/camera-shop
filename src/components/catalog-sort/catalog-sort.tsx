import { ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { OrderType, SortingType } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setCurrentCatalogPage, setSortParamsInState } from '../../store/utils-slice/utils-slice';
import { getSortParams } from '../../store/utils-slice/utils-slice-selectors';

function CatalogSort(): JSX.Element {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const sortParams = useAppSelector(getSortParams);

  const handleChangeSort = (evt: ChangeEvent) => {
    if (!searchParams.has('_order')) {
      searchParams.set('_sort', evt.target.id);
      searchParams.set('_order', OrderType.ByAscending);
    } else {
      searchParams.set('_sort', evt.target.id);
    }

    dispatch(setCurrentCatalogPage(1));
    dispatch(setSortParamsInState(searchParams.toString()));
  };

  const handleChangeOrder = (evt: ChangeEvent) => {
    if (!searchParams.has('_sort')) {
      searchParams.set('_sort', SortingType.ByPrice);
      searchParams.set('_order', evt.target.id);
    } else {
      searchParams.set('_order', evt.target.id);
    }

    dispatch(setCurrentCatalogPage(1));
    dispatch(setSortParamsInState(searchParams.toString()));
  };

  return (
    <div className="catalog-sort">
      <form>
        <div className="catalog-sort__inner">
          <p className="title title--h5">Сортировать:</p>
          <div className="catalog-sort__type">
            <div className="catalog-sort__btn-text">
              <input
                type="radio"
                id="price"
                name="sort"
                checked={sortParams.includes(SortingType.ByPrice)}
                onChange={handleChangeSort}
              />
              <label htmlFor="price">по цене</label>
            </div>
            <div className="catalog-sort__btn-text">
              <input
                type="radio"
                id="rating"
                name="sort"
                checked={sortParams.includes(SortingType.ByRating)}
                onChange={handleChangeSort}
              />
              <label htmlFor="rating">по популярности</label>
            </div>
          </div>
          <div className="catalog-sort__order">
            <div className="catalog-sort__btn catalog-sort__btn--up">
              <input
                type="radio"
                id="asc"
                name="sort-icon"
                aria-label="По возрастанию"
                checked={searchParams.get('_order') === OrderType.ByAscending}
                onChange={handleChangeOrder}
              />
              <label htmlFor="asc">
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-sort"></use>
                </svg>
              </label>
            </div>
            <div className="catalog-sort__btn catalog-sort__btn--down">
              <input
                type="radio"
                id="desc"
                name="sort-icon"
                aria-label="По убыванию"
                checked={searchParams.get('_order') === OrderType.ByDescending}
                onChange={handleChangeOrder}
              />
              <label htmlFor="desc">
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-sort"></use>
                </svg>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CatalogSort;
