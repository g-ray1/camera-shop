import { Link } from 'react-router-dom';
import { Promo } from '../../types/types';

type BannerProps = {
  product?: Promo;
  description?: string;
}

function Banner({ product, description }: BannerProps): JSX.Element | null {

  if (product === undefined) {
    return null;
  }

  return (
    <div className="banner">
      <picture>
        <source
          type="image/webp"
          srcSet={`/${product.previewImgWebp}, /${product.previewImgWebp2x} 2x`}
        />
        <img
          src={product.previewImg}
          srcSet={`/${product.previewImg2x} 2x`}
          width="1280"
          height="280"
          alt="баннер"
        />
      </picture>
      <p className="banner__info">
        <span className="banner__message">Новинка!</span>
        <span className="title title--h1">{product.name}</span>
        <span className="banner__text">{description}</span>
        <Link className="btn" to={`/product/${product.id}`}>Подробнее</Link>
      </p>
    </div>
  );
}

export default Banner;
