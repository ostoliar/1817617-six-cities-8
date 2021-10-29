import { useParams } from 'react-router-dom';
import Logo from '../logo/logo';
import { OfferType } from '../../types/offer';
import UserStatus from '../user-status/user-status';
import OfferImage from '../offer-image/offer-image';
import { offerTypes } from '../../const';
import OfferProperty from '../offer-property/offer-property';
import { CommentType } from '../../types/comment';
import OfferCard from '../offer-card/offer-card';
import { computeRatingWidth } from '../../utils';
import OfferHost from '../offer-host/offer-host';
import Map from '../map/map';
import OfferComment from '../offer-comment/offer-comment';

const NEAR_OFFERS_COUNT = 3;

type OfferProps = {
  offersList: OfferType[];
  commentsList: CommentType[];
}

function Offer({offersList, commentsList}: OfferProps): JSX.Element {
  const {id: idUrl} = useParams<{id: string}>();
  const currentOffer = offersList.filter((offer) => offer.id === Number(idUrl));
  const otherOffers = offersList.filter((offer) => offer.id !== Number(idUrl)).slice(0, NEAR_OFFERS_COUNT);
  const currentComments = commentsList.filter((comment) => comment.id === Number(idUrl));
  const [{
    bedrooms,
    description,
    goods,
    host,
    images,
    isFavorite,
    isPremium,
    maxAdults,
    price,
    rating,
    title,
    type}] = currentOffer;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <UserStatus />
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <OfferImage images={images}/>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button ${isFavorite && 'property__bookmark-button--active'} button`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: computeRatingWidth(rating)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offerTypes[type]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                    Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good) => <OfferProperty good={good} key={good}/>)}
                </ul>
              </div>
              <OfferHost host={host} description={description}/>
              <OfferComment currentComments={currentComments} />
            </div>
          </div>
          <section className="property__map map">
            <Map offersList={otherOffers}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {otherOffers.map((offer) => <OfferCard offer={offer} cardType="offer" key={offer.id}/>)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
export default Offer;
