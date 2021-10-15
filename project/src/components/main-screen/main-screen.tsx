import Filter from '../../components/filter/filter';
import Sort from '../../components/sort/sort';
import Header from '../../components/header/header';
import CardsList from '../../components/card-list/card-list';
import { OfferType } from '../../types/offer';

type AppScreenProps = {
  offersList: OfferType[];
}

function MainScreen({offersList}: AppScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <Filter />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <Sort />
              <CardsList offersList={offersList}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default MainScreen;
