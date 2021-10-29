import { Link } from 'react-router-dom';
import Header from '../header/header';
import { AppRoute } from '../../const';

function NotFoundScreen(): JSX.Element {
  return (
    <>
      <Header />
      <h1>404. Page not found</h1>
      <Link to={AppRoute.Main}>Go to Main page</Link>
    </>
  );
}

export default NotFoundScreen;
