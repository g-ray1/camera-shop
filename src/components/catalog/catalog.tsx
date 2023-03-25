import { createBrowserHistory } from 'history';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS_PER_PAGE } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchSortedCameras } from '../../store/api-actions';
import { getAllCameras } from '../../store/data-slice/data-slice-selectors';
import { setCurrentCatalogPage } from '../../store/utils-slice/utils-slice';
import { getCurrentCatalogPage } from '../../store/utils-slice/utils-slice-selectors';
import PreviewCard from '../preview-card/preview-card';

function Catalog(): JSX.Element {
  const dispatch = useAppDispatch();
  const history = createBrowserHistory();
  const [searchParams] = useSearchParams();

  const totalProducts = useAppSelector(getAllCameras);
  const currentCatalogPage = useAppSelector(getCurrentCatalogPage);

  const lastIndex = currentCatalogPage * PRODUCTS_PER_PAGE;
  const firstIndex = lastIndex - PRODUCTS_PER_PAGE;
  const productsOnPage = totalProducts.slice(firstIndex, lastIndex);

  useEffect(() => {
    history.push(`page_${currentCatalogPage}?${searchParams.toString()}`);
    dispatch(fetchSortedCameras(searchParams.toString()));
    dispatch(setCurrentCatalogPage(1));
  }, [searchParams]);

  return (
    <div className="cards catalog__cards">

      {productsOnPage.map((product) => <PreviewCard product={product} key={product.id} />)}

    </div>
  );
}

export default Catalog;
