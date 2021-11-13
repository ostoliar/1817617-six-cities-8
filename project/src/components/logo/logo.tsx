import {Link, useLocation} from 'react-router-dom';
import cn from 'classnames';
import {AppRoute} from '../../const';

function Logo(): JSX.Element {
  const {pathname} = useLocation();
  const linkCls = cn('header__logo-link', {
    'header__logo-link--active': pathname === AppRoute.Main,
  });

  return (
    <Link className={linkCls} to={AppRoute.Main}>
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width="81"
        height="41"
      />
    </Link>
  );
}

export default Logo;
