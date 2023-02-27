import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Page404 from '../../components/page-404/page-404';
import Product from '../../components/product/product';
import ReviewBlock from '../../components/review-block/review-block';
import Slider from '../../components/slider/slider';
import UpButton from '../../components/up-button/up-button';
import { useAppSelector } from '../../hooks/hooks';
import { getCamerasList } from '../../store/data-slice/data-slice-selectors';

function ProductPage(): JSX.Element {
  const cameras = useAppSelector(getCamerasList);
  const { id } = useParams();
  const product = cameras.find((camera) => camera.id === Number(id));

  if (!product) {
    return (
      <Page404 />
    );
  }

  return (
    <>
      <main>
        <div className="page-content">

          <Breadcrumbs productName={product?.name} />

          <Product product={product} />

          <Slider />

          <ReviewBlock />

        </div>
      </main>

      <UpButton />
    </>
  );
}

export default ProductPage;
