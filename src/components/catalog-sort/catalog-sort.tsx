import { ChangeEvent, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { OrderType, SortingType } from '../../consts';
import { useAppDispatch } from '../../hooks/hooks';
import { fetchSortedCameras } from '../../store/api-actions';
import { setCurrentCatalogPage, setSearchParamsInState } from '../../store/utils-slice/utils-slice';

function CatalogSort(): JSX.Element {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChangeSort = (evt: ChangeEvent) => {
    if (!searchParams.has('_order')) {
      setSearchParams({ _sort: evt.target.id, _order: OrderType.ByAscending });
    } else {
      searchParams.set('_sort', evt.target.id);
      setSearchParams(searchParams);
    }
  };

  const handleChangeOrder = (evt: ChangeEvent) => {
    if (!searchParams.has('_sort')) {
      setSearchParams({ _sort: SortingType.ByPrice, _order: evt.target.id });
    } else {
      searchParams.set('_order', evt.target.id);
      setSearchParams(searchParams);
    }
  };

  useEffect(() => {
    if (searchParams.toString()) {
      dispatch(fetchSortedCameras(searchParams.toString()));
      dispatch(setCurrentCatalogPage(1));
      dispatch(setSearchParamsInState(searchParams.toString()));
    }
  }, [dispatch, searchParams]);

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
                checked={searchParams.get('_sort') === SortingType.ByPrice}
                onChange={handleChangeSort}
              />
              <label htmlFor="price">по цене</label>
            </div>
            <div className="catalog-sort__btn-text">
              <input
                type="radio"
                id="rating"
                name="sort"
                checked={searchParams.get('_sort') === SortingType.ByRating}
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
