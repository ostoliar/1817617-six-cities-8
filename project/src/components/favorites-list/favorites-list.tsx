import { OfferType } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type FavoritesListProps = {
  offersFavoriteListBySities: {[key: string]: OfferType[]};
}

function FavoritesList({offersFavoriteListBySities}: FavoritesListProps): JSX.Element {
  return (
    <ul className="favorites__list">
      {Object.keys(offersFavoriteListBySities)
        .map((city) => (
          <li className="favorites__locations-items" key={city}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="/#">
                  <span>{city}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {offersFavoriteListBySities[city]
                .map((offer) =>
                  <OfferCard offer={offer} cardType="favorites" key={offer.id} />)}
            </div>
          </li>
        ))}
    </ul>
  );
}

export default FavoritesList;
