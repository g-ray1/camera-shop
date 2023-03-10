import { Link } from 'react-router-dom';

function Page404(): JSX.Element {
  return (
    <div className="page-content__section">
      <h1>Page Not Found</h1>
      <Link to='/'>Вернутся на главную</Link>
    </div>
  );
}

export default Page404;
