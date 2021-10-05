import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainScreen from '../main-screen/main-screen';
import FavoritesPageScreen from '../favorites-screen/favorites-screen';
import NotFoundPage from '../not-found-page/not-found-page';
import RoomOfferScreen from '../room-offer-screen/room-offer-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import PrivateRoute from '../private-route/private-route';
import AppScreenProps from './type';


function App({cardCount, cardProperties} : AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen
            cardCount = {cardCount}
            cardProperties = {cardProperties}
          />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignInScreen />
        </Route>
        <Route exact path={AppRoute.Favorites}>
          <FavoritesPageScreen />
        </Route>
        <Route exact path={AppRoute.Room}>
          <RoomOfferScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.SignIn}
          render={() => <SignInScreen />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route>
          <NotFoundPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;

