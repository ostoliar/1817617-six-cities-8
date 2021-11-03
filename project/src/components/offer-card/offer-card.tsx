import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { AppRoute, offerTypes } from '../../const';
import { OfferType } from '../../types/offer';
import { computeRatingWidth } from '../../utils';
import { selectCurrentOffer } from '../../store/action';
import { Actions } from '../../types/action';
import { State } from '../../types/state';

type OfferCardProps = {
  offer: OfferType;
  cardType: string;
  onHover?: (id: number) => void;
}

const getClassNameComponent = (cardType: string) => {
  switch(cardType) {
    case 'cardsList':
      return {
        classModificatorArticle: 'cities__place-card',
        classModificatorDivImageWrapper: 'cities__place-card',
      };
    case 'offer':
      return {
        classModificatorArticle: 'near-places__card',
        classModificatorDivImageWrapper: 'near-places',
      };
    case 'favorites':
      return {
        classModificatorArticle: 'favorites__card',
        classModificatorDivImageWrapper: 'favorites',
        classModificatorDivPlaceCardInfo: 'favorites__card-info',
        imageWidth: '150',
        imageHeight: '110',
      };
    default:
      throw new Error(`Unknouwn oreder state: '${cardType}'`);
  }
};

const mapStateToProps = ({currentCity, offers, currentOffer}: State) => ({
  currentCity,
  offers,
  currentOffer,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onSelectOffer(offer: OfferType | null) {
    dispatch(selectCurrentOffer(offer));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & OfferCardProps;

function OfferCard({offer, cardType, onHover, currentOffer, onSelectOffer}: ConnectedComponentProps): JSX.Element {

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

  const getClassName = getClassNameComponent(cardType);
  const { classModificatorArticle, classModificatorDivImageWrapper, classModificatorDivPlaceCardInfo, imageWidth = '260', imageHeight = '200' } = getClassName;

  return (
    <article
      className={`${classModificatorArticle} place-card`}
      onMouseEnter={() => onSelectOffer ? onSelectOffer(offer) : undefined}
      onMouseLeave={() => onSelectOffer ? onSelectOffer(null) : undefined}
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
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">
              {isFavorite ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: computeRatingWidth(rating)}} />
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
export { OfferCard };
export default connector(OfferCard);
