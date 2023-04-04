import { ChangeEvent, KeyboardEvent, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getAllCameras } from '../../store/data-slice/data-slice-selectors';
import { setCurrentCatalogPage, setPriceParamsInState } from '../../store/utils-slice/utils-slice';
import { getArraySortedByPrice } from '../../utils';

function PriceBlock(): JSX.Element {
  const dispatch = useAppDispatch();
  const cameras = useAppSelector(getAllCameras);
  const [searchParams] = useSearchParams();
  const inputFromRef = useRef<HTMLInputElement>(null);
  const inputToRef = useRef<HTMLInputElement>(null);

  const handleInputKeydown = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.code === 'Minus' && inputFromRef.current !== null) {
      evt.currentTarget.value = '';
    }
  };

  const handleChangePriceFrom = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    if (evt.currentTarget.value === '') {
      evt.currentTarget.value = evt.currentTarget.placeholder;
    }
    if (Number(evt.currentTarget.value) < Number(evt.currentTarget.placeholder)) {
      evt.currentTarget.value = evt.currentTarget.placeholder;
    }
    if (Number(evt.currentTarget.value) > Number(inputToRef.current?.placeholder) && inputToRef.current !== null) {
      evt.currentTarget.value = inputToRef.current.placeholder;
    }
    if (inputToRef.current?.value === '') {
      searchParams.delete('price_lte');
    }
    searchParams.set('price_gte', evt.currentTarget.value);
    dispatch(setPriceParamsInState(searchParams.toString()));
    dispatch(setCurrentCatalogPage(1));
  };

  const handleChangePriceTo = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    if (evt.currentTarget.value === '') {
      evt.currentTarget.value = evt.currentTarget.placeholder;
    }
    if (Number(evt.currentTarget.value) > Number(evt.currentTarget.placeholder)) {
      evt.currentTarget.value = evt.currentTarget.placeholder;
    }
    if ((Number(evt.currentTarget.value) < Number(inputFromRef.current?.placeholder)) && inputFromRef.current !== null) {
      evt.currentTarget.value = inputFromRef.current.placeholder;
    }
    if ((Number(evt.currentTarget.value) < Number(inputFromRef.current?.value)) && inputFromRef.current !== null) {
      evt.currentTarget.value = inputFromRef.current.value;
    }
    if (inputFromRef.current?.value === '') {
      searchParams.delete('price_gte');
    }
    searchParams.set('price_lte', evt.currentTarget.value);
    dispatch(setPriceParamsInState(searchParams.toString()));
    dispatch(setCurrentCatalogPage(1));
  };

  useEffect(() => {
    if (inputFromRef.current !== null && inputToRef.current && cameras.length !== 0) {
      const result = getArraySortedByPrice(cameras);
      inputFromRef.current.placeholder = `${result[0].price}`;
      inputToRef.current.placeholder = `${result[result.length - 1].price}`;
    }
  }, [cameras]);

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
              onKeyUp={handleInputKeydown}
              onBlur={handleChangePriceFrom}
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
              onKeyUp={handleInputKeydown}
              onBlur={handleChangePriceTo}
            />
          </label>
        </div>
      </div>
    </fieldset>
  );
}

export default PriceBlock;
