import {useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import cn from 'classnames';
import OfferImage from '../../components/offer-image/offer-image';
import {AppRoute, AuthorizationStatus, offerTypes, StatusLoading} from '../../const';
import OfferProperty from '../../components/offer-property/offer-property';
import OfferCard from '../../components/offer-card/offer-card';
import {computeRatingWidth} from '../../utils';
import OfferHost from '../../components/offer-host/offer-host';
import OfferComment from '../../components/offer-comment/offer-comment';
import Map from '../../components/map/map';
import {
  favoriteAction,
  fetchNearbyOffersAction,
  fetchOfferByIdAction,
  fetchOfferCommentsAction
} from '../../store/reducer/data/api-actions';
import Loader from '../../components/loader/loader';
import NotFound from '../not-found-screen/not-found-screen';
import Header from '../../components/header/header';
import {selectCurrentOffer} from '../../store/reducer/app/actions';
import {
  selectOfferByIdCombo,
  selectOffersNearby
} from '../../store/reducer/data/selectors';
import {selectAuthorizationStatus} from '../../store/reducer/user/selectors';
import {loadOfferByIdFailure} from '../../store/reducer/data/actions';

const MAX_COUNT_NEARBY_OFFERS = 3;

function Offer(): JSX.Element {
  const {id: idUrl} = useParams<{id: string}>();
  const dispatch = useDispatch();
  const {offerLoading, offer: currentOffer, offerError} = useSelector(selectOfferByIdCombo);
  const offersNearby = useSelector(selectOffersNearby);
  const authorizationStatus = useSelector(selectAuthorizationStatus);
  const history = useHistory();

  useEffect(() => {
    dispatch(selectCurrentOffer(currentOffer));
  }, [currentOffer, dispatch]);

  useEffect(() => {
    dispatch(fetchOfferByIdAction(idUrl));
    if (offerError) {
      dispatch(fetchNearbyOffersAction(idUrl));
      dispatch(fetchOfferCommentsAction(idUrl));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, idUrl]);

  useEffect(() => () => {
    dispatch(loadOfferByIdFailure(null));
  }, [dispatch]);

  if (offerError) {
    return <NotFound />;
  }

  if (
    [StatusLoading.Idle, StatusLoading.Loading].includes(offerLoading)
    || currentOffer === null
  ) {
    return (
      <Loader />
    );
  }

  const handleClick = (idOffer: number) => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(favoriteAction(idOffer, !currentOffer.isFavorite));
    } else {
      history.push(AppRoute.SignIn);
    }
  };

  const buttonIsFavorite = cn('property__bookmark-button',
    {
      'property__bookmark-button--active': currentOffer.isFavorite,
    }, 'button');

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <OfferImage images={currentOffer.images}/>
          <div className="property__container container">
            <div className="property__wrapper">
              {currentOffer.isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {currentOffer.title}
                </h1>
                <button className={buttonIsFavorite}
                  type="button"
                  onClick={() => handleClick(currentOffer.id)}
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">
                    {currentOffer.isFavorite ? 'In bookmarks' : 'To bookmarks'}
                  </span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={
                    {width: computeRatingWidth(Number(currentOffer.rating))}
                  }
                  />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {currentOffer.rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offerTypes[currentOffer.type]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {currentOffer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                      Max {currentOffer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">
                  &euro;{currentOffer.price}
                </b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {currentOffer
                    .goods.map((good: string) => (
                      <OfferProperty good={good} key={good} />),
                    )}
                </ul>
              </div>
              <OfferHost
                host={currentOffer.host}
                description={currentOffer.description}
              />
              <OfferComment />
            </div>
          </div>
          <section className="property__map map">
            <Map
              offersList={
                [currentOffer, ...offersNearby.slice(0, MAX_COUNT_NEARBY_OFFERS)]
              }
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {offersNearby
                .slice(0, MAX_COUNT_NEARBY_OFFERS)
                .map((offer) => (
                  <OfferCard offer={offer} cardType="offer" key={offer.id} />),
                )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );

}

export default Offer;
