import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/hooks';
import { setModalMode } from '../../store/utils-slice/utils-slice';
import { Camera } from '../../types/types';
import Stars from '../stars/stars';

type PreviewCardProps = {
  product: Camera;
};

function PreviewCard({ product }: PreviewCardProps): JSX.Element {

  const dispatch = useAppDispatch();
  const handleBuyButtoneClick = () => dispatch(setModalMode(true));

  return (
    <div className="product-card">
      <div className="product-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={`${product.previewImgWebp}, ${product.previewImgWebp2x} 2x`}
          />
          <img
            src={product.previewImg}
            srcSet={`${product.previewImg2x} 2x`}
            width="280"
            height="240"
            alt={product.name}
          />
        </picture>
      </div>
      <div className="product-card__info">
        <div className="rate product-card__rate">

          <Stars rating={product.rating} reviewCount={product.reviewCount}/>

          <p className="visually-hidden">Рейтинг: {product.rating}</p>
          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{product.reviewCount}</p>
        </div>
        <p className="product-card__title">{product.name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{`${product.price} ₽`}</p>
      </div>
      <div className="product-card__buttons">
        <button className="btn btn--purple product-card__btn" type="button" onClick={handleBuyButtoneClick}>Купить</button>
        <Link className="btn btn--transparent" to={`/product/${product.id}`}>Подробнее</Link>
      </div>
    </div>
  );
}

export default PreviewCard;
