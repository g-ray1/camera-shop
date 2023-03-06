import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import ModalWindow from '../../components/modal-window/modal-window';
import Page404 from '../../components/page-404/page-404';
import Product from '../../components/product/product';
import ReviewsBlock from '../../components/reviews-block/reviews-block';
import Slider from '../../components/slider/slider';
import UpButton from '../../components/up-button/up-button';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchReviews } from '../../store/api-actions';
import { getCamerasList, getReviews, getSimilarCameras } from '../../store/data-slice/data-slice-selectors';
import { getModalContent, getModalMode } from '../../store/utils-slice/utils-slice-selectors';
import { UserParams } from '../../types/types';

function ProductPage(): JSX.Element {
  const { id } = useParams<keyof UserParams>() as UserParams;
  const dispatch = useAppDispatch();
  const allProducts = useAppSelector(getCamerasList);
  const product = allProducts.find((item) => item.id === Number(id));
  const similarProducts = useAppSelector(getSimilarCameras);
  const reviews = useAppSelector(getReviews);
  const modalIsActive = useAppSelector(getModalMode);
  const modalContent = useAppSelector(getModalContent);

  useEffect(() => {
    dispatch(fetchReviews(id));
  }, [dispatch, id]);

  if (!id) {
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
