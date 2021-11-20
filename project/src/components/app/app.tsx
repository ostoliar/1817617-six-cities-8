import {Redirect, Route, Switch} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Offer from '../offer/offer';
import Favorites from '../favorites-screen/favorites-screen';
import Login from '../login/login';
import Main from '../main-screen/main-screen';
import {AppRoutes, AuthorizationStatus} from '../../const';
import NotFound from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import Loader from '../loader/loader';
import {selectOffersLoading} from '../../store/reducer/data/selectors';
import {selectAuthorizationStatus} from '../../store/reducer/user/selectors';

function App(): JSX.Element {
  const offersLoading = useSelector(selectOffersLoading);
  const authorizationStatus = useSelector(selectAuthorizationStatus);

  if (offersLoading) {
    return (
      <Loader />
    );
  }

  return (
    <Switch>
      <Route exact path={AppRoutes.Main}>
        <Main authorizationStatus={authorizationStatus} />
      </Route>
      <Route
        exact
        path={AppRoutes.Login}
        render={() => (
          authorizationStatus === AuthorizationStatus.Auth
            ? <Redirect to={AppRoutes.Main} />
            : <Login authorizationStatus={authorizationStatus} />
        )}
      >
      </Route>
      <PrivateRoute
        exact
        path={AppRoutes.Favorites}
        render = {() => <Favorites authorizationStatus={authorizationStatus} />}
      >
      </PrivateRoute>
      <Route exact path={`${AppRoutes.Offer}/:id`}>
        <Offer authorizationStatus={authorizationStatus} />
      </Route>
      <Route exact component={NotFound}/>
    </Switch>
  );
}

export default App;
