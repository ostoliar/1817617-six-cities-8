import { Link } from 'react-router-dom';
import Header from '../header/header';
import { AppRoute } from '../../const';
import './not-found.css';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page page--error">
      <Header />
      <main className="page__main page__main--error error__not-found">
        <div className="page__error-container container">
          <section className="error">
            <div className="not-found__status-wrapper">
              <b className="not-found__status">404 Not Found.</b>
              <p className="not-found__status-description">
                <Link to={AppRoute.Main}>Go to Main page</Link>
              </p>
            </div>
          </section>
        </div>
      </main>
      <footer className="footer">
        <a className="footer__logo-link" href={AppRoute.Main}>
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </a>
      </footer>
    </div>
  );
}


export default NotFoundScreen;
