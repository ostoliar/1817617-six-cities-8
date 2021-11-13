import {useSelector} from 'react-redux';
import {Redirect, Route, RouteProps} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {selectAuthorizationStatus} from '../../store/reducer/user/selectors';


type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
};

function PrivateRoute({
  exact,
  path,
  render,
}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useSelector(selectAuthorizationStatus);

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        authorizationStatus === AuthorizationStatus.Auth
          ? render()
          : <Redirect to={AppRoute.SignIn} />
      )}
    />
  );
}

export default PrivateRoute;
