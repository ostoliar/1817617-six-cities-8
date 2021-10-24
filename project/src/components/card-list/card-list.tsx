import OfferCard from '../offer-card/offer-card';
import { OfferType } from '../../types/offer';
import { useState } from 'react';

type CardsListProps = {
  offersList: OfferType[];
}

function CardsList({offersList}: CardsListProps): JSX.Element {
  const [ , setActiveOffer ] = useState<number | null>(null);

  const handleHover = (id: number | null) => {
    setActiveOffer(id);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offersList
        .map((offer) =>
          (
            <OfferCard
              offer={offer}
              cardType="cardsList"
              key={offer.id}
              onHover={handleHover}
            />
          ))}
    </div>
  );
}

export default CardsList;
