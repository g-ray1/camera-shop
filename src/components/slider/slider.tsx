import { useState } from 'react';
import { SIMILAR_PRODUCTS_COUNT } from '../../consts';
import { Camera } from '../../types/types';
import PreviewCard from '../preview-card/preview-card';
import { useAppSelector } from '../../hooks/hooks';
import { getOrders } from '../../store/data-slice/data-slice-selectors';

type SliderProps = {
  products: Camera[];
}

function Slider({ products }: SliderProps): JSX.Element | null {
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsInCart = useAppSelector(getOrders);

  const list = products.slice(currentIndex, currentIndex + SIMILAR_PRODUCTS_COUNT);

  if (products.length === 0) {
    return null;
  }

  return (
    <div className="page-content__section">
      <section className="product-similar">
        <div className="container">
          <h2 className="title title--h3">Похожие товары</h2>
          <div className="product-similar__slider">
            <div className="product-similar__slider-list">

              {list.map((product) => (
                <PreviewCard
                  key={product.id}
                  product={product}
                  inSlider
                  inCart={Boolean(productsInCart.find((item) => item.id === product.id))}
                />
              ))}

              <button
                className="slider-controls slider-controls--prev"
                type="button"
                aria-label="Предыдущий слайд"
                onMouseDown={() => setCurrentIndex(currentIndex - 1)}
                disabled={currentIndex === 0}
              >
                <svg width="7" height="12" aria-hidden="true">
                  <use xlinkHref="#icon-arrow"></use>
                </svg>
              </button>

              <button
                className="slider-controls slider-controls--next"
                type="button"
                aria-label="Следующий слайд"
                onMouseDown={() => setCurrentIndex(currentIndex + 1)}
                disabled={currentIndex + SIMILAR_PRODUCTS_COUNT >= products.length}
              >
                <svg width="7" height="12" aria-hidden="true">
                  <use xlinkHref="#icon-arrow"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
}

export default Slider;
