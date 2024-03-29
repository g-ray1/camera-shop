import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Loader from '../../components/loader/loader';
import ModalWindow from '../../components/modal-window/modal-window';
import Page404 from '../../components/error-page/error-page';
import Product from '../../components/product/product';
import ReviewsBlock from '../../components/reviews-block/reviews-block';
import Slider from '../../components/slider/slider';
import UpButton from '../../components/up-button/up-button';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchCamera, fetchReviews, fetchSimilarCameras } from '../../store/api-actions';
import { getCamera, getCameraIsLoading, getReviews, getSimilarCameras, getSimilarCamerasIsLoading, getReviewsIsLoading } from '../../store/data-slice/data-slice-selectors';
import { getIsReviewFormDisabled, getModalContent, getModalMode } from '../../store/utils-slice/utils-slice-selectors';
import { UserParams } from '../../types/types';

function ProductPage(): JSX.Element {
  const { id } = useParams<keyof UserParams>() as UserParams;
  const dispatch = useAppDispatch();
  const product = useAppSelector(getCamera);
  const similarProducts = useAppSelector(getSimilarCameras);
  const reviews = useAppSelector(getReviews);
  const modalIsActive = useAppSelector(getModalMode);
  const modalContent = useAppSelector(getModalContent);
  const productIsLoading = useAppSelector(getCameraIsLoading);
  const similarProductsIsLoading = useAppSelector(getSimilarCamerasIsLoading);
  const reviewsIsLoading = useAppSelector(getReviewsIsLoading);
  const isReviewFormDisabled = useAppSelector(getIsReviewFormDisabled);

  useEffect(() => {
    dispatch(fetchCamera(id));
    dispatch(fetchSimilarCameras(id));
    dispatch(fetchReviews(id));
  }, [dispatch, id]);

  if (productIsLoading || similarProductsIsLoading || reviewsIsLoading || isReviewFormDisabled) {
    return <Loader />;
  }

  if (!product) {
    return <Page404 />;
  }

  return (
    <>
      <main>
        <div className="page-content">

          <Breadcrumbs productName={product?.name} />

          <Product product={product} />

          <Slider products={similarProducts} />

          <ReviewsBlock reviews={reviews} />

        </div>
      </main>

      <UpButton />

      {modalIsActive && <ModalWindow content={modalContent} />}

    </>
  );
}

export default ProductPage;
