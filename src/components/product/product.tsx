import { ModalContent } from '../../consts';
import { useAppDispatch, useScrollLock } from '../../hooks/hooks';
import { setSelectedCamera } from '../../store/data-slice/data-slice';
import { setModalContent, setModalMode } from '../../store/utils-slice/utils-slice';
import { Camera } from '../../types/types';
import Page404 from '../page-404/page-404';
import Stars from '../stars/stars';
import Tabs from '../tabs/tabs';

type ProductProps = {
  product?: Camera;
}

function Product({ product }: ProductProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { lockScroll } = useScrollLock();

  if (!product) {
    return <Page404 />;
  }

  const handleBuyButtoneClick = () => {
    dispatch(setSelectedCamera(product));
    dispatch(setModalMode(true));
    dispatch(setModalContent(ModalContent.AddItem));
    lockScroll();
  };

  return (
    <div className="page-content__section">
      <section className="product">
        <div className="container">
          <div className="product__img">
            <picture>
              <source
                type="image/webp"
                srcSet={`/${product.previewImgWebp}, /${product.previewImgWebp2x} 2x`}
              />
              <img
                src={product.previewImg}
                srcSet={`/${product.previewImg2x} 2x`}
                width="560"
                height="480"
                alt={product.name}
              />
            </picture>
          </div>
          <div className="product__content">
            <h1 className="title title--h3">{product.name}</h1>

            <Stars rating={product.rating} reviewCount={product.reviewCount} />

            <p className="product__price"><span className="visually-hidden">Цена:</span>{product.price} ₽</p>
            <button
              className="btn btn--purple"
              type="button"
              onClick={handleBuyButtoneClick}
            >
              <svg width="24" height="16" aria-hidden="true">
                <use xlinkHref="#icon-add-basket"></use>
              </svg>Добавить в корзину
            </button>

            <Tabs product={product} />

          </div>
        </div>
      </section>
    </div>
  );
}

export default Product;
