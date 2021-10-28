import { OfferType } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type FavoritesListProps = {
  offersFavoriteListByCities: {[key: string]: OfferType[]};
}

function FavoritesList({offersFavoriteListByCities}: FavoritesListProps): JSX.Element {
  return (
    <ul className="favorites__list">
      {Object.keys(offersFavoriteListByCities)
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
              {offersFavoriteListByCities[city]
                .map((offer) =>
                  <OfferCard offer={offer} cardType="favorites" key={offer.id} />)}
            </div>
          </li>
        ))}
    </ul>
  );
}


export default FavoritesList;
