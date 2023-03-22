import { useEffect } from 'react';
import Banner from '../../components/banner/banner';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getCamera, getCameraIsLoading, getCamerasIsLoading, getPromo, getPromoIsLoading } from '../../store/data-slice/data-slice-selectors';
import { getModalContent, getModalMode } from '../../store/utils-slice/utils-slice-selectors';
import ModalWindow from '../../components/modal-window/modal-window';
import { fetchCamera } from '../../store/api-actions';
import Loader from '../../components/loader/loader';
import Catalog from '../../components/catalog/catalog';
import PaginationList from '../../components/pagination-list/pagination-list';
import { setCurrentCatalogPage } from '../../store/utils-slice/utils-slice';
import CatalogSort from '../../components/catalog-sort/catalog-sort';

function CatalogPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const promo = useAppSelector(getPromo);
  const promoProduct = useAppSelector(getCamera);
  const modalIsActive = useAppSelector(getModalMode);
  const modalContent = useAppSelector(getModalContent);

  useEffect(() => {
    promo?.id && dispatch(fetchCamera(promo.id));
    dispatch(setCurrentCatalogPage(1));
  }, [dispatch, promo?.id]);

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
            <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
            <div className="page-content__columns">

              <CatalogFilter />

              <div className="catalog__content">

                <CatalogSort />

                <Catalog />

                <PaginationList />
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
