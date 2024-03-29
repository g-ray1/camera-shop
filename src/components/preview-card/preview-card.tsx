import { Link } from 'react-router-dom';
import { ModalContent } from '../../consts';
import { useAppDispatch, useScrollLock } from '../../hooks/hooks';
import { setModalContent, setModalMode } from '../../store/utils-slice/utils-slice';
import { Camera } from '../../types/types';
import Stars from '../stars/stars';
import { setSelectedCamera } from '../../store/data-slice/data-slice';

type PreviewCardProps = {
  inSlider?: boolean;
  inCart?: boolean;
  product: Camera;
};

function PreviewCard({ product, inSlider, inCart }: PreviewCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { lockScroll } = useScrollLock();

  const handleBuyButtoneClick = () => {
    dispatch(setModalMode(true));
    dispatch(setModalContent(ModalContent.AddItem));
    dispatch(setSelectedCamera(product));
    lockScroll();
  };

  const getButton = () => (
    inCart
      ?
      <Link
        className="btn btn--purple-border product-card__btn product-card__btn--in-cart"
        to="/basket"
      >
        <svg width="16" height="16" aria-hidden="true">
          <use xlinkHref="#icon-basket"></use>
        </svg>
        В корзине
      </Link>
      :
      <button
        className={`btn btn--purple product-card__btn ${inCart ? 'product-card__btn--in-cart' : ''}`}
        type="button"
        onClick={handleBuyButtoneClick}
      >
        Купить
      </button>
  );

  return (
    <div className={`product-card ${inSlider ? 'is-active' : ''}`}>
      <div className="product-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={`/${product.previewImgWebp}, /${product.previewImgWebp2x} 2x`}
          />
          <img
            src={`/${product.previewImg}`}
            srcSet={`/${product.previewImg2x} 2x`}
            width="280"
            height="240"
            alt={product.name}
          />
        </picture>
      </div>
      <div className="product-card__info">
        <div className="rate product-card__rate">

          <Stars rating={product.rating} reviewCount={product.reviewCount} />

        </div>
        <p className="product-card__title">{product.name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{`${product.price} ₽`}</p>
      </div>
      <div className="product-card__buttons">

        {getButton()}

        <Link className="btn btn--transparent" to={`/product/${product.id}`}>Подробнее</Link>
      </div>
    </div>
  );
}

export default PreviewCard;
