import { createBrowserHistory } from 'history';
import { useEffect } from 'react';
import { PRODUCTS_PER_PAGE } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchSortedCameras } from '../../store/api-actions';
import { getAllCameras } from '../../store/data-slice/data-slice-selectors';
import { getCurrentCatalogPage, getFilterParams, getSortParams } from '../../store/utils-slice/utils-slice-selectors';
import PreviewCard from '../preview-card/preview-card';

function Catalog(): JSX.Element {
  const dispatch = useAppDispatch();
  const history = createBrowserHistory();

  const totalProducts = useAppSelector(getAllCameras);
  const currentCatalogPage = useAppSelector(getCurrentCatalogPage);

  const lastIndex = currentCatalogPage * PRODUCTS_PER_PAGE;
  const firstIndex = lastIndex - PRODUCTS_PER_PAGE;
  const productsOnPage = totalProducts.slice(firstIndex, lastIndex);

  const sortParamsInState = useAppSelector(getSortParams);
  const filterParamsInState = useAppSelector(getFilterParams);
  let searchParamsInState = sortParamsInState + filterParamsInState;

  if (sortParamsInState && filterParamsInState) {
    searchParamsInState = `${sortParamsInState}&${filterParamsInState}`;
  }

  useEffect(() => {
    history.push(`page_${currentCatalogPage}?${searchParamsInState}`);
    dispatch(fetchSortedCameras(searchParamsInState));
  }, [searchParamsInState, currentCatalogPage]);

  return (
    <div className="cards catalog__cards">

      {productsOnPage.map((product) => <PreviewCard product={product} key={product.id} />)}

    </div>
  );
}

export default Catalog;
