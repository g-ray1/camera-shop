import { KeyboardEvent, useEffect, useRef } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { getAllCameras } from '../../store/data-slice/data-slice-selectors';
import { getArraySortedByPrice } from '../../utils';

function PriceBlock(): JSX.Element {
  const inputFromRef = useRef<HTMLInputElement>(null);
  const inputToRef = useRef<HTMLInputElement>(null);
  const cameras = useAppSelector(getAllCameras);

  const handleInputFromKeydown = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.code === 'Minus' && inputFromRef.current !== null) {
      inputFromRef.current.value = '0';
    }
  };

  // const handleInputToKeydown = (evt: KeyboardEvent<HTMLInputElement>) => {};

  useEffect(() => {
    if (inputFromRef.current !== null && inputToRef.current && cameras.length !== 0) {
      const result = getArraySortedByPrice(cameras);
      inputFromRef.current.placeholder = `${result[0].price}`;
      inputToRef.current.placeholder = `${result[result.length - 1].price}`;
    }
  });

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Цена, ₽</legend>
      <div className="catalog-filter__price-range">
        <div className="custom-input">
          <label>
            <input
              type="number"
              name="price"
              placeholder="от"
              ref={inputFromRef}
              onKeyUp={(evt) => handleInputFromKeydown(evt)}
            />
          </label>
        </div>
        <div className="custom-input">
          <label>
            <input
              type="number"
              name="priceUp"
              placeholder="до"
              ref={inputToRef}
              // onKeyDown={(evt) => handleInputToKeydown(evt)}
            />
          </label>
        </div>
      </div>
    </fieldset>
  );
}

export default PriceBlock;
