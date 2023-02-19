import { useState } from 'react';
import AddItemModal from '../../components/add-item-modal/add-item-modal';
import Banner from '../../components/banner/banner';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import CatalogSort from '../../components/catalog-sort/catalog-sort';
import PaginationList from '../../components/pagination-list/pagination-list';
import PreviewCardsList from '../../components/preview-cards-list/preview-cards-list';
import { useAppSelector } from '../../hooks/hooks';
import { getCamerasList } from '../../store/data-slice/data-slice-selectors';
import { getModalMode } from '../../store/utils-slice/utils-slice-selectors';

function CatalogPage(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);
  const modalIsActive = useAppSelector(getModalMode);
  const cameras = useAppSelector(getCamerasList);
  console.log(currentPage);

  return (
    <main>

      <Banner />

      <div className="page-content">

        <Breadcrumbs />

        <section className="catalog">
          <div className="container">
            <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
            <div className="page-content__columns">

              <CatalogFilter />

              <div className="catalog__content">

                <CatalogSort />

                <PreviewCardsList products={cameras} />

                <PaginationList cardsCount={cameras.length} currentPage={currentPage} clickHandler={setCurrentPage}/>

              </div>
            </div>
          </div>
        </section>
      </div>

      {modalIsActive && <AddItemModal />}

    </main>
  );
}

export default CatalogPage;
