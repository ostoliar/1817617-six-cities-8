import {useSelector} from 'react-redux';
import {AuthorizationStatus} from '../../const';
import {selectAuthorizationStatus} from '../../store/reducer/user/selectors';
import UserMenuSignOut from '../user-menu-sign-out/user-menu-sign-out';
import UserMenuSignIn from '../user-menu-sign-in/user-menu-sign-in';

function UserMenu(): JSX.Element {
  const authorizationStatus = useSelector(selectAuthorizationStatus);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {authorizationStatus === AuthorizationStatus.Auth
          ? <UserMenuSignOut />
          : <UserMenuSignIn />}
      </ul>
    </nav>
  );
}

export default UserMenu;

