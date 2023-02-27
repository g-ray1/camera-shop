import { Camera } from '../../types/types';
import Page404 from '../page-404/page-404';
import Stars from '../stars/stars';
import Tabs from '../tabs/tabs';

type ProductProps = {
  product: Camera;
}

function Product({ product }: ProductProps): JSX.Element {
  if (!product) {
    return (
      <Page404 />
    );
  }

  return (
    <div className="page-content__section">
      <section className="product">
        <div className="container">
          <div className="product__img">
            <picture>
              <source type="image/webp" srcSet={`${product.previewImgWebp}, ${product.previewImgWebp2x} 2x`} />
              <img src={product.previewImg} srcSet={`${product.previewImg2x} 2x`} width="560" height="480" alt={product.name} />
            </picture>
          </div>
          <div className="product__content">
            <h1 className="title title--h3">{product.name}</h1>

            <Stars product={product} />

            <p className="product__price"><span className="visually-hidden">Цена:</span>{product.price} ₽</p>
            <button className="btn btn--purple" type="button">
              <svg width="24" height="16" aria-hidden="true">
                <use xlinkHref="#icon-add-basket"></use>
              </svg>Добавить в корзину
            </button>

            <Tabs />

          </div>
        </div>
      </section>
    </div>
  );
}

export default Product;
