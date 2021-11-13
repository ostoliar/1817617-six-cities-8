import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Offer from '../offer/offer';
import Favorites from '../favorites-screen/favorites-screen';
import Login from '../login/login';
import Main from '../main-screen/main-screen';
import {AppRoute, AuthorizationStatus} from '../../const';
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
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main />
        </Route>
        <Route
          exact
          path={AppRoute.SignIn}
          render={() => (
            authorizationStatus === AuthorizationStatus.Auth
              ? <Redirect to={AppRoute.Main} />
              : <Login />
          )}
        >
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render = {() => <Favorites />}
        >
        </PrivateRoute>
        <Route exact path={`${AppRoute.Offer}/:id`}>
          <Offer />
        </Route>
        <Route exact component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
