import OfferCard from '../offer-card/offer-card';
import {OfferType} from '../../types/offer';

type CardListProps = {
  offersList: OfferType[];
}

function CardsList({offersList}: CardListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offersList
        .map((offer) =>
          (
            <OfferCard
              offer={offer}
              cardType="cardsList"
              key={offer.id}
            />
          ))}
    </div>
  );
}

export default CardsList;
