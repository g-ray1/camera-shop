import { KeyboardEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import { getAllCameras } from '../../store/data-slice/data-slice-selectors';

function SearchForm(): JSX.Element {
  const [searchString, setSearchString] = useState('');
  const cameras = useAppSelector(getAllCameras);
  const navigate = useNavigate();
  const listRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  let optionIndex = -1;

  const handleKeyDown = (evt: KeyboardEvent<HTMLInputElement | HTMLUListElement>) => {
    const options = listRef.current?.querySelectorAll('li');

    if (!options) {
      return null;
    }

    if (evt.key === 'ArrowDown' || evt.key === 'Tab') {
      evt.preventDefault();
      optionIndex++;
      if (optionIndex > options.length - 1) {
        optionIndex = options.length - 1;
      }
      options[optionIndex].focus();
    }

    if (evt.key === 'ArrowUp') {
      evt.preventDefault();
      optionIndex--;
      if (optionIndex < 0) {
        optionIndex = 0;
      }
      options[optionIndex].focus();
    }

    if (evt.key === 'Enter') {
      options[optionIndex].dispatchEvent(new Event('click', { bubbles: true }));
    }

    if (evt.key === 'Escape') {
      inputRef.current?.focus();
      setSearchString('');
    }
  };

  const getItems = () => {
    if (!searchString) {
      return null;
    }

    const items = cameras.filter(({ name }) => name.toLowerCase().includes(searchString.toLowerCase()));

    if (items.length === 0) {
      return null;
    }

    return (
      <ul
        className="form-search__select-list scroller"
        ref={listRef}
        onKeyDown={handleKeyDown}
      >
        {items.map((item) => (
          <li
            key={item.id}
            className="form-search__select-item"
            tabIndex={0}
            onClick={() => {
              navigate(`/product/${item.id}`);
              setSearchString('');
            }}
          >{item.name}
          </li>))}
      </ul>
    );
  };

  return (
    <div className={searchString ? 'form-search list-opened' : 'form-search'}>
      <form
        onSubmit={(evt) => evt.preventDefault()}
      >
        <label>
          <svg className="form-search__icon" width="16" height="16" aria-hidden="true">
            <use xlinkHref="#icon-lens"></use>
          </svg>
          <input
            className="form-search__input"
            type="text"
            autoComplete="off"
            placeholder="Поиск по сайту"
            value={searchString}
            ref={inputRef}
            onChange={(evt) => setSearchString(evt.target.value)}
            onKeyDown={handleKeyDown}
          />
        </label>

        {getItems()}

      </form>
      <button
        className="form-search__reset"
        type="reset"
        onClick={() => setSearchString('')}
      >
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg><span className="visually-hidden">Сбросить поиск</span>
      </button>
    </div>
  );
}

export default SearchForm;
