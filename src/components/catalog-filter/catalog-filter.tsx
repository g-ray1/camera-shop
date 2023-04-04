import { ChangeEvent, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CodesForCyrillicString } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setCurrentCatalogPage, setFilterParamsInState } from '../../store/utils-slice/utils-slice';
import { getFilterParams } from '../../store/utils-slice/utils-slice-selectors';
import PriceBlock from '../price-block/price-block';
import ResetFiltresButton from '../reset-filters-button/reset-filters-button';

function CatalogFilter(): JSX.Element {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const filterParams = useAppSelector(getFilterParams);
  const checkboxPhotoRef = useRef<HTMLInputElement>(null);
  const checkboxVideoRef = useRef<HTMLInputElement>(null);

  const handleChangePhotocameraCheckbox = (evt: ChangeEvent) => {
    if (!checkboxPhotoRef.current?.checked) {
      searchParams.delete('category');
      dispatch(setFilterParamsInState(searchParams.toString()));
      dispatch(setCurrentCatalogPage(1));
    } else {
      searchParams.set('category', evt.target.id);
      dispatch(setFilterParamsInState(searchParams.toString()));
      dispatch(setCurrentCatalogPage(1));
    }
  };

  const handleChangeVideocameraCheckbox = (evt: ChangeEvent) => {
    if (!checkboxVideoRef.current?.checked) {
      searchParams.delete('category');
      dispatch(setFilterParamsInState(searchParams.toString()));
      dispatch(setCurrentCatalogPage(1));
    } else {
      searchParams.set('category', evt.target.id);
      dispatch(setFilterParamsInState(searchParams.toString()));
      dispatch(setCurrentCatalogPage(1));
    }
  };

  const handleChangeType = (evt: ChangeEvent) => {
    const types = searchParams.getAll('type');
    const target = evt.target as HTMLInputElement;

    if (types.includes(target.id)) {
      searchParams.delete('type');
      types.splice(types.indexOf(target.id), 1);
      types.forEach((item) => searchParams.append('type', item));
    } else {
      searchParams.append('type', target.id);
      target.checked = true;
    }

    dispatch(setCurrentCatalogPage(1));
    dispatch(setFilterParamsInState(searchParams.toString()));
  };

  const handleChangeLevel = (evt: ChangeEvent) => {
    const levels = searchParams.getAll('level');

    if (levels.includes(evt.target.id)) {
      searchParams.delete('level');
      levels.splice(levels.indexOf(evt.target.id), 1);
      levels.forEach((item) => searchParams.append('level', item));
    } else {
      searchParams.append('level', evt.target.id);
    }

    dispatch(setCurrentCatalogPage(1));
    dispatch(setFilterParamsInState(searchParams.toString()));
  };

  return (
    <div className="catalog__aside">
      <div className="catalog-filter">
        <form>
          <h2 className="visually-hidden">Фильтр</h2>

          <PriceBlock />

          <fieldset className="catalog-filter__block">
            <legend className="title title--h5">Категория</legend>
            <div className="custom-checkbox catalog-filter__item">
              <label>
                <input
                  ref={checkboxPhotoRef}
                  type="checkbox"
                  id='Фотоаппарат'
                  name="cameraType"
                  checked={filterParams.includes(CodesForCyrillicString.Фотоаппарат)}
                  onChange={handleChangePhotocameraCheckbox}
                />
                <span className="custom-checkbox__icon"></span>
                <span className="custom-checkbox__label">Фотокамера</span>
              </label>
            </div>
            <div className="custom-checkbox catalog-filter__item">
              <label>
                <input
                  ref={checkboxVideoRef}
                  type="checkbox"
                  id='Видеокамера'
                  name="cameraType"
                  checked={filterParams.includes(CodesForCyrillicString.Видеокамера)}
                  disabled={filterParams.includes(CodesForCyrillicString.Плёночная) || filterParams.includes(CodesForCyrillicString.Моментальная)}
                  onChange={handleChangeVideocameraCheckbox}
                />
                <span className="custom-checkbox__icon" ></span>
                <span className="custom-checkbox__label">Видеокамера</span>
              </label>
            </div>
          </fieldset>

          <fieldset className="catalog-filter__block">
            <legend className="title title--h5">Тип камеры</legend>
            <div className="custom-checkbox catalog-filter__item">
              <label>
                <input
                  type="checkbox"
                  id='Цифровая'
                  name="digital"
                  onChange={handleChangeType}
                />
                <span className="custom-checkbox__icon"></span>
                <span className="custom-checkbox__label">Цифровая</span>
              </label>
            </div>
            <div className="custom-checkbox catalog-filter__item">
              <label>
                <input
                  type="checkbox"
                  id='Плёночная'
                  name="film"
                  disabled={filterParams.includes(CodesForCyrillicString.Видеокамера)}
                  onChange={handleChangeType}
                />
                <span className="custom-checkbox__icon"></span>
                <span className="custom-checkbox__label">Плёночная</span>
              </label>
            </div>
            <div className="custom-checkbox catalog-filter__item">
              <label>
                <input
                  type="checkbox"
                  id='Моментальная'
                  name="snapshot"
                  disabled={filterParams.includes(CodesForCyrillicString.Видеокамера)}
                  onChange={handleChangeType}
                />
                <span className="custom-checkbox__icon"></span>
                <span className="custom-checkbox__label">Моментальная</span>
              </label>
            </div>
            <div className="custom-checkbox catalog-filter__item">
              <label>
                <input
                  type="checkbox"
                  id='Коллекционная'
                  name="collection"
                  onChange={handleChangeType}
                />
                <span className="custom-checkbox__icon"></span>
                <span className="custom-checkbox__label">Коллекционная</span>
              </label>
            </div>
          </fieldset>

          <fieldset className="catalog-filter__block">
            <legend className="title title--h5">Уровень</legend>
            <div className="custom-checkbox catalog-filter__item">
              <label>
                <input
                  type="checkbox"
                  id='Нулевой'
                  name="zero"
                  onChange={handleChangeLevel}
                  checked={searchParams.getAll('level').includes('Нулевой')}
                />
                <span className="custom-checkbox__icon"></span>
                <span className="custom-checkbox__label">Нулевой</span>
              </label>
            </div>
            <div className="custom-checkbox catalog-filter__item">
              <label>
                <input
                  type="checkbox"
                  id='Любительский'
                  name="non-professional"
                  onChange={handleChangeLevel}
                  checked={searchParams.getAll('level').includes('Любительский')}
                />
                <span className="custom-checkbox__icon"></span>
                <span className="custom-checkbox__label">Любительский</span>
              </label>
            </div>
            <div className="custom-checkbox catalog-filter__item">
              <label>
                <input
                  type="checkbox"
                  id='Профессиональный'
                  name="professional"
                  onChange={handleChangeLevel}
                  checked={searchParams.getAll('level').includes('Профессиональный')}
                />
                <span className="custom-checkbox__icon"></span>
                <span className="custom-checkbox__label">Профессиональный</span>
              </label>
            </div>
          </fieldset>

          <ResetFiltresButton />

        </form>
      </div>
    </div>
  );
}

export default CatalogFilter;
