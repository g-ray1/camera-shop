import { useParams } from 'react-router-dom';
import AddItemModal from '../../components/add-item-modal/add-item-modal';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Page404 from '../../components/page-404/page-404';
import Product from '../../components/product/product';
import ReviewBlock from '../../components/review-block/review-block';
import Slider from '../../components/slider/slider';
import UpButton from '../../components/up-button/up-button';
import { useAppSelector } from '../../hooks/hooks';
import { getCamerasList, getSimilarCameras } from '../../store/data-slice/data-slice-selectors';
import { getModalMode } from '../../store/utils-slice/utils-slice-selectors';

function ProductPage(): JSX.Element {
  const allProducts = useAppSelector(getCamerasList);
  const { id } = useParams();
  const product = allProducts.find((item) => item.id === Number(id));
  const similarProducts = useAppSelector(getSimilarCameras);
  const modalIsActive = useAppSelector(getModalMode);

  if (!product) {
    return (
      <Page404 />
    );
  }

  return (
    <>
      <main>
        <div className="page-content">

          <Breadcrumbs productName={product.name} />

          <Product product={product} />

          <Slider products={similarProducts} />

          <ReviewBlock />

        </div>
      </main>

      <UpButton />

      {modalIsActive && <AddItemModal />}
    </>
  );
}

export default ProductPage;
