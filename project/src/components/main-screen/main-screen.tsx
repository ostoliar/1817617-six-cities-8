import Filter from '../../components/filter/filter';
import Sort from '../../components/sort/sort';
import Header from '../../components/header/header';
import CardsList from '../../components/card-list/card-list';
import { OfferType } from '../../types/offer';
import Map from '../../components/map/map';

type MainScreenProps = {
  cities: string[];
  offersList: OfferType[];
}

function MainScreen({cities, offersList}: MainScreenProps): JSX.Element {
  const [{ city: {name} }] = offersList;
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
              <Sort />
              <CardsList offersList={offersList}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map" />
              <Map offersList={offersList}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default MainScreen;
