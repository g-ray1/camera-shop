import { useEffect, useState } from 'react';
import Banner from '../../components/banner/banner';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import CatalogSort from '../../components/catalog-sort/catalog-sort';
import PaginationList from '../../components/pagination-list/pagination-list';
import PreviewCardsList from '../../components/preview-cards-list/preview-cards-list';
import { PRODUCTS_PER_PAGE } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getAllCameras, getCamera, getCameraIsLoading, getCamerasIsLoading, getPromo, getPromoIsLoading } from '../../store/data-slice/data-slice-selectors';
import { getModalContent, getModalMode } from '../../store/utils-slice/utils-slice-selectors';
import ModalWindow from '../../components/modal-window/modal-window';
import { fetchCamera } from '../../store/api-actions';
import Loader from '../../components/loader/loader';
import { createBrowserHistory } from 'history';

function CatalogPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const history = createBrowserHistory();
  const [currentPage, setCurrentPage] = useState(1);
  const totalProducts = useAppSelector(getAllCameras);
  const promo = useAppSelector(getPromo);
  const promoProduct = useAppSelector(getCamera);
  const modalIsActive = useAppSelector(getModalMode);
  const modalContent = useAppSelector(getModalContent);

  const lastIndex = currentPage * PRODUCTS_PER_PAGE;
  const firstIndex = lastIndex - PRODUCTS_PER_PAGE;
  const productsOnPage = totalProducts.slice(firstIndex, lastIndex);

  useEffect(() => {
    promo?.id && dispatch(fetchCamera(promo.id));
    history.push(`page_${currentPage}`);
  }, [currentPage, dispatch, promo?.id]);

  const promoIsLoading = useAppSelector(getPromoIsLoading);
  const camerasIsLoaging = useAppSelector(getCamerasIsLoading);
  const cameraIsLoaging = useAppSelector(getCameraIsLoading);

  if (promoIsLoading || camerasIsLoaging || cameraIsLoaging) {
    return <Loader />;
  }

  return (
    <main>

      <Banner product={promo} description={promoProduct?.description} />

      <div className="page-content">

        <Breadcrumbs />

        <section className="catalog">
          <div className="container">
            <h1 className="title title--h2">?????????????? ????????- ?? ????????????????????????</h1>
            <div className="page-content__columns">

              <CatalogFilter />

              <div className="catalog__content">

                <CatalogSort />

                <PreviewCardsList products={productsOnPage} />

                <PaginationList cardsCount={totalProducts.length} currentPage={currentPage} clickHandler={setCurrentPage} />

              </div>
            </div>
          </div>
        </section>
      </div>

      {modalIsActive && <ModalWindow content={modalContent} />}

    </main>
  );
}

export default CatalogPage;
