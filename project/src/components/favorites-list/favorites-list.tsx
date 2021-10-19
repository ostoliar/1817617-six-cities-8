import { OfferType } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type FavoritesListProps = {
  city: string;
  favoriteOffersList: OfferType[];
}

function FavoritesList(props: FavoritesListProps): JSX.Element {
  const {city, favoriteOffersList} = props;
  const cityOffersList = favoriteOffersList.filter((offer) => offer.city.name === city);

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {cityOffersList.map((offer) => <OfferCard offer={offer} cardType="favorites" key={offer.id} />)}
      </div>
    </li>);
}

export default FavoritesList;
