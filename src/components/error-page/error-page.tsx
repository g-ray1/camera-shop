import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getErrorMessage } from '../../store/utils-slice/utils-slice-selectors';
import { setErrorMessage } from '../../store/utils-slice/utils-slice';

function ErrorPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const message = useAppSelector(getErrorMessage);

  return (
    <div className="page-content">
      <div className="page-content__section">
        <div className='container'>
          <h1 className="title title--h2">{message ? message : 'Page Not Found'}</h1>
          <Link
            className='btn'
            to='/'
            onClick={() => dispatch(setErrorMessage(''))}
          >
            Вернутся на главную
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
