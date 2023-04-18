import { createBrowserHistory } from 'history';
import { useEffect } from 'react';
import { PRODUCTS_PER_PAGE } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchSortedCameras } from '../../store/api-actions';
import { getAllCameras, getOrders } from '../../store/data-slice/data-slice-selectors';
import { getCurrentCatalogPage, getFilterParams, getPriceParams, getSortParams } from '../../store/utils-slice/utils-slice-selectors';
import PreviewCard from '../preview-card/preview-card';

function Catalog(): JSX.Element {
  const dispatch = useAppDispatch();
  const history = createBrowserHistory();

  const totalProducts = useAppSelector(getAllCameras);
  const currentCatalogPage = useAppSelector(getCurrentCatalogPage);

  const lastIndex = currentCatalogPage * PRODUCTS_PER_PAGE;
  const firstIndex = lastIndex - PRODUCTS_PER_PAGE;
  const productsOnPage = totalProducts.slice(firstIndex, lastIndex);

  const productsInCart = useAppSelector(getOrders);

  let sortParamsInState = useAppSelector(getSortParams);
  sortParamsInState = sortParamsInState ? `${sortParamsInState}&` : '';
  let filterParamsInState = useAppSelector(getFilterParams);
  filterParamsInState = filterParamsInState ? `${filterParamsInState}&` : '';
  let priceParamsInState = useAppSelector(getPriceParams);
  priceParamsInState = priceParamsInState ? `${priceParamsInState}&` : '';
  const searchParams = sortParamsInState + filterParamsInState + priceParamsInState;

  useEffect(() => {
    history.push(`page_${currentCatalogPage}?${searchParams}`);
    dispatch(fetchSortedCameras(searchParams));
  }, [searchParams, currentCatalogPage]);

  return (
    <div className="cards catalog__cards">

      {productsOnPage.length > 0
        ? productsOnPage.map((product) =>
          <PreviewCard product={product} key={product.id} inCart={Boolean(productsInCart.find((item) => item.camera.id === product.id))}/>)
        : <h3>По вашему запросу ничего не найдено.</h3>}

    </div>
  );
}

export default Catalog;
