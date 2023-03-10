import { Link } from 'react-router-dom';

function Page404(): JSX.Element {
  return (
    <div className="page-content">
      <div className="page-content__section">
        <div className='container'>
          <h1 className="title title--h2">Page Not Found</h1>
          <Link className='btn' to='/'>Вернутся на главную</Link>
        </div>
      </div>
    </div>
  );
}

export default Page404;
