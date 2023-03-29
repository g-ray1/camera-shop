import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/hooks';
import { setCurrentCatalogPage, setFilterParamsInState, setPriceParamsInState } from '../../store/utils-slice/utils-slice';

function ResetFiltresButton(): JSX.Element {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const handleResetButton = () => {
    searchParams.delete('category');
    searchParams.delete('type');
    searchParams.delete('level');
    searchParams.delete('price_gte');
    searchParams.delete('price_lte');
    dispatch(setFilterParamsInState(searchParams.toString()));
    dispatch(setPriceParamsInState(searchParams.toString()));
    dispatch(setCurrentCatalogPage(1));
  };

  return (
    <button
      className="btn catalog-filter__reset-btn"
      type="reset"
      onClick={handleResetButton}
    >Сбросить фильтры
    </button>
  );
}

export default ResetFiltresButton;
