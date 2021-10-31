import { useState } from 'react';
import Filter from '../filter/filter';
import Sort from '../sort/sort';
import Header from '../header/header';
import CardsList from '../card-list/card-list';
import { OfferType } from '../../types/offer';
import Map from '../map/map';

const DEFAULT_SORT_TYPE = 'Popular';

const offerSortTypes = {
  POPULAR: 'Popular',
  PRICE_DOWN: 'Price: low to high',
  PRICE_UP: 'Price: high to low',
  RATING_DOWN: 'Top rated first',
};

const makeOfferSortTypes = {
  [offerSortTypes.PRICE_UP]: (offerA: OfferType, offerB: OfferType) =>
    offerB.price - offerA.price,

  [offerSortTypes.PRICE_DOWN]: (offerA: OfferType, offerB: OfferType) =>
    offerA.price - offerB.price,

  [offerSortTypes.RATING_DOWN]: (offerA: OfferType, offerB: OfferType) =>
    offerB.rating - offerA.rating,
};

const getSortedOffers = (sortType: string, offers: OfferType[]) => {
  switch(sortType) {
    case sortType:
      return offers.slice(0).sort(makeOfferSortTypes[sortType]);
    default:
      return offers;
  }
};

type MainScreenProps = {
  cities: string[];
  offersList: OfferType[];
}

function MainScreen({cities, offersList}: MainScreenProps): JSX.Element {
  const [isSortType, setSortType] = useState(DEFAULT_SORT_TYPE);
  const [{city: {name}}] = offersList;

  const handleChangeSortType = (sortType: string) => {
    setSortType(sortType);
  };

  const sortedOffers = getSortedOffers(isSortType, offersList);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <Filter cities={cities} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersList.length} places to stay in {name}</b>
              <Sort
                offerSortTypes={offerSortTypes}
                handleChangeSortType={handleChangeSortType}
                selectSortType={isSortType}
              />
              <CardsList offersList={sortedOffers} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offersList={offersList}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default MainScreen;
