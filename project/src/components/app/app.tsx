import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainScreen from '../main-screen/main-screen';
import FavoritesPageScreen from '../favorites-screen/favorites-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import PrivateRoute from '../private-route/private-route';
import { OfferType } from '../../types/offer';
import { CommentType } from '../../types/comment';
import { State } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';
import Offer from '../offer/offer';
import Spinner from '../spinner/spinner';


type AppScreenProps = {
  cities: string[];
  commentsList: CommentType[];
}

export const getOfferListByCity = (offers: OfferType[], city: string): OfferType[] => offers.filter((offer) => offer.city.name === city);

const mapStateToProps = ({currentCity, offers, offersLoading}: State) => ({
  currentCity,
  offers,
  offersLoading,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & AppScreenProps;

function App(props: ConnectedComponentProps): JSX.Element {
  const {cities, commentsList, currentCity, offers, offersLoading} = props;
  const offersList = getOfferListByCity(offers, currentCity);

  if (offersLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen cities={cities} offersList={offersList}/>
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignInScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render = {() => <FavoritesPageScreen offersList={offersList}/>}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route exact path={`${AppRoute.Room}/:id`}>
          <Offer offersList={offersList} commentsList={commentsList} />
        </Route>
        <Route exact component={NotFoundScreen}/>
      </Switch>
    </BrowserRouter>
  );
}

export { App };
export default connector(App);
