import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Product from '../../components/product/product';
import ReviewBlock from '../../components/review-block/review-block';
import Slider from '../../components/slider/slider';
import UpButton from '../../components/up-button/up-button';

function ProductPage(): JSX.Element {
  return (
    <>
      <main>
        <div className="page-content">

          <Breadcrumbs productName='asdasdasd'/>

          <Product />

          <Slider />

          <ReviewBlock />

        </div>
      </main>

      <UpButton />
    </>
  );
}

export default ProductPage;
