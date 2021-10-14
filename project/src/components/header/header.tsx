import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import UserStatus from '../user-status/user-status';

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main}>
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          <UserStatus />
        </div>
      </div>
    </header>
  );
}

export default Header;
