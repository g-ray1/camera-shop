import { ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

function CatalogFilter(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChangeCategory = (evt: ChangeEvent) => {
    searchParams.set('category', evt.target.id);
    setSearchParams(searchParams);
  };

  const handleChangeType = (evt: ChangeEvent) => {
    const types = searchParams.getAll('type');
    if (types.includes(evt.target.id)) {
      searchParams.delete('type');
      types.splice(types.indexOf(evt.target.id), 1);
      types.forEach((item) => searchParams.append('type', item));
    } else {
      searchParams.append('type', evt.target.id);
    }
    setSearchParams(searchParams);
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
    setSearchParams(searchParams);
  };

  const handleResetButton = () => {
    searchParams.delete('category');
    searchParams.delete('type');
    searchParams.delete('level');
    setSearchParams(searchParams);
  };

  return (
    <div className="catalog__aside">
      <div className="catalog-filter">
        <form>
          <h2 className="visually-hidden">Фильтр</h2>

          <fieldset className="catalog-filter__block">
            <legend className="title title--h5">Цена, ₽</legend>
            <div className="catalog-filter__price-range">
              <div className="custom-input">
                <label>
                  <input type="number" name="price" placeholder="от" />
                </label>
              </div>
              <div className="custom-input">
                <label>
                  <input type="number" name="priceUp" placeholder="до" />
                </label>
              </div>
            </div>
          </fieldset>

          <fieldset className="catalog-filter__block">
            <legend className="title title--h5">Категория</legend>
            <div className="custom-checkbox catalog-filter__item">
              <label>
                <input
                  type="radio"
                  id='Фотоаппарат'
                  name="cameraType"
                  onChange={(evt) => handleChangeCategory(evt)}
                  checked={searchParams.get('category') === 'Фотоаппарат'}
                />
                <span className="custom-checkbox__icon"></span>
                <span className="custom-checkbox__label">Фотокамера</span>
              </label>
            </div>
            <div className="custom-checkbox catalog-filter__item">
              <label>
                <input
                  type="radio"
                  id='Видеокамера'
                  name="cameraType"
                  disabled={searchParams.getAll('type').includes('Плёночная') || searchParams.getAll('type').includes('Моментальная')}
                  onChange={(evt) => handleChangeCategory(evt)}
                  checked={searchParams.get('category') === 'Видеокамера'}
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
                  onChange={(evt) => handleChangeType(evt)}
                  checked={searchParams.getAll('type').includes('Цифровая')}
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
                  disabled={searchParams.get('category') === 'Видеокамера'}
                  onChange={(evt) => handleChangeType(evt)}
                  checked={searchParams.getAll('type').includes('Плёночная')}
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
                  disabled={searchParams.get('category') === 'Видеокамера'}
                  onChange={(evt) => handleChangeType(evt)}
                  checked={searchParams.getAll('type').includes('Моментальная')}
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
                  onChange={(evt) => handleChangeType(evt)}
                  checked={searchParams.getAll('type').includes('Коллекционная')}
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
                  onChange={(evt) => handleChangeLevel(evt)}
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
                  onChange={(evt) => handleChangeLevel(evt)}
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
                  onChange={(evt) => handleChangeLevel(evt)}
                  checked={searchParams.getAll('level').includes('Профессиональный')}
                />
                <span className="custom-checkbox__icon"></span>
                <span className="custom-checkbox__label">Профессиональный</span>
              </label>
            </div>
          </fieldset>

          <button
            className="btn catalog-filter__reset-btn"
            type="reset"
            onClick={handleResetButton}
          >Сбросить фильтры
          </button>
        </form>
      </div>
    </div>
  );
}

export default CatalogFilter;
