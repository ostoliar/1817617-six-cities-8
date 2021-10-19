import OfferCard from '../offer-card/offer-card';
import { OfferType } from '../../types/offer';
import { useState } from 'react';

type CardsListProps = {
  offersList: OfferType[];
}

function CardsList({offersList}: CardsListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer] = useState(0);

  const onHover = (id: number | undefined) => {
    if(id) {
      setActiveOffer(id);
    }
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offersList.map((offer) => <OfferCard offer={offer} cardType="cardsList" onHover={onHover} key={offer.id}/>)}
    </div>
  );
}

export default CardsList;
