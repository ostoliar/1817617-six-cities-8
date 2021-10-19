import { Link } from 'react-router-dom';
import { AppRoute, offerTypes } from '../../const';
import { OfferType } from '../../types/offer';
import { computeRatingWidth } from '../../utils';

type OfferCardProps = {
  offer: OfferType;
  cardType: string;
  onHover?: (id: number) => void;
}

function OfferCard({offer, cardType, onHover}: OfferCardProps): JSX.Element {
  const {
    id,
    isFavorite,
    isPremium,
    previewImage,
    price,
    rating,
    title,
    type,
  } = offer;

  let classModificatorArticle = '';
  let classModificatorDivImageWrapper = '';
  let classModificatorDivPlaceCardInfo = '';
  let imageWidth = '260';
  let imageHeight = '200';

  switch(cardType) {
    case 'cardsList':
      classModificatorArticle = 'cities__place-card';
      classModificatorDivImageWrapper = 'cities__place-card';
      break;
    case 'offer':
      classModificatorArticle = 'near-places';
      classModificatorDivImageWrapper = 'cities';
      break;
    case 'favorites':
      classModificatorArticle = 'favorites__card';
      classModificatorDivImageWrapper = 'favorites';
      classModificatorDivPlaceCardInfo = 'favorites__card-info';
      imageWidth = '150';
      imageHeight = '110';
      break;
  }

  return (
    <article
      className={`${classModificatorArticle} place-card`}
      onMouseOver={() => (onHover) ? onHover(id) : undefined}
    >
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className={`${classModificatorDivImageWrapper}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Room}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={imageWidth}
            height={imageHeight}
            alt="Apartment"
          />
        </Link>
      </div>
      <div className={`${classModificatorDivPlaceCardInfo} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite && 'place-card__bookmark-button--active'} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: computeRatingWidth(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/#">{title}</a>
        </h2>
        <p className="place-card__type">{offerTypes[type]}</p>
      </div>
    </article>
  );
}

export default OfferCard;
