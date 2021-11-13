import {useSelector} from 'react-redux';
import cn from 'classnames';
import Filter from '../../components/filter/filter';
import Header from '../../components/header/header';
import {selectCurrentCity, selectFilteredSortedOffers} from '../../store/reducer/app/selectors';

import MainOffersBoard from '../../components/main-offers-board/main-offers-board';
import MainOffersEmpty from '../../components/main-offers-empty/main-offers-empty';
import {selectErrorLoadOffers} from '../../store/reducer/data/selectors';
import ErrorScreen from '../error-screen/errror-screen';

function MainScreen(): JSX.Element {
  const currentCity = useSelector(selectCurrentCity);
  const offersList = useSelector(selectFilteredSortedOffers);
  const errorLoadOffers = useSelector(selectErrorLoadOffers);

  const pageMainIndexCls = cn('page__main page__main--index',
    {'page__main--index-empty': !(offersList.length > 0)});

  const citiesPlacesContainerCls = cn('cities__places-container',
    {'cities__places-container--empty': !(offersList.length > 0)}, 'container');

  if (errorLoadOffers) {
    return <ErrorScreen />;
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={pageMainIndexCls}>
        <Filter />
        <div className="cities">
          <div className={citiesPlacesContainerCls}>
            {offersList.length > 0
              ? <MainOffersBoard currentCity={currentCity} offersList={offersList} />
              : <MainOffersEmpty currentCity={currentCity} />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
