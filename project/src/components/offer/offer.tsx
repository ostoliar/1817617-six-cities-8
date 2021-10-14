import { useParams } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import CommentForm from '../../components/comment-form/comment-form';
import { OfferType } from '../../types/offer';
import UserStatus from '../../components/user-status/user-status';
import OfferImage from '../../components/offer-image/offer-image';
import { offerTypes } from '../../const';
import OfferProperty from '../../components/offer-property/offer-property';
import OfferPropertyDescription from '../../components/offer-property-description/offer-property-description';
import UserComment from '../../components/user-comment/user-comment';
import { CommentType } from '../../types/comment';
import OfferCard from '../../components/offer-card/offer-card';
import { computeRatingWidth } from '../../utils';

type AppScreenProps = {
  offersList: OfferType[];
  commentsList: CommentType[];
}

function Offer({offersList, commentsList}: AppScreenProps): JSX.Element {
  const {id: idUrl} = useParams<{id: string}>();
  const currentOffer = offersList.filter((offer) => offer.id === Number(idUrl));
  const otherOffer = offersList.filter((offer) => offer.id !== Number(idUrl));
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
  const {avatarUrl, isPro, name} = host;
  const descriptionTexts = description.split('\n');

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
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image) => <OfferImage image={image} key={image}/>)}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium &&
              <div className="property__mark">
                <span>Premium</span>
              </div>}
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
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${isPro && 'property__avatar-wrapper--pro'} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                  {isPro &&
                  <span className="property__user-status">
                    Pro
                  </span>}
                </div>
                <div className="property__description">
                  {descriptionTexts.map((text) => <OfferPropertyDescription text={text} key={text} />)}
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{currentComments.length}</span></h2>
                <ul className="reviews__list">
                  {currentComments.map((comment) => <UserComment comment={comment} key={comment.id} />)}
                </ul>
                <CommentForm />
              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {otherOffer.map((offer) => <OfferCard offer={offer} cardType="offer" key={offer.id}/>)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
