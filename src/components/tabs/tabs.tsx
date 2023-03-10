import { useState } from 'react';
import { Camera } from '../../types/types';

type TabsProps = {
  product: Camera;
}
function Tabs({ product }: TabsProps): JSX.Element {
  const [isSpecs, setIsSpecs] = useState(false);

  return (
    <div className="tabs product__tabs">
      <div className="tabs__controls product__tabs-controls">
        <button
          className={`tabs__control ${isSpecs ? 'is-active' : ''}`}
          type="button"
          onClick={() => setIsSpecs(true)}
        >
          Характеристики
        </button>
        <button
          className={`tabs__control ${isSpecs ? '' : 'is-active'}`}
          type="button"
          onClick={() => setIsSpecs(false)}
        >
          Описание
        </button>
      </div>
      <div className="tabs__content">
        <div className={`tabs__element ${isSpecs ? 'is-active' : ''}`}>
          <ul className="product__tabs-list">
            <li className="item-list"><span className="item-list__title">Артикул:</span>
              <p className="item-list__text">{product.vendorCode}</p>
            </li>
            <li className="item-list"><span className="item-list__title">Категория:</span>
              <p className="item-list__text">{product.category}</p>
            </li>
            <li className="item-list"><span className="item-list__title">Тип камеры:</span>
              <p className="item-list__text">{product.type}</p>
            </li>
            <li className="item-list"><span className="item-list__title">Уровень:</span>
              <p className="item-list__text">{product.level}</p>
            </li>
          </ul>
        </div>
        <div className={`tabs__element ${isSpecs ? '' : 'is-active'}`}>
          <div className="product__tabs-text">
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
