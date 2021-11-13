import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import cn from 'classnames';
import FavoritesList from '../../components/favorites-list/favorites-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import {fetchFavoritesAction} from '../../store/reducer/data/api-actions';
import {selectFavoriteOffers} from '../../store/reducer/data/selectors';
import {OfferType} from '../../types/offer';

function Favorites(): JSX.Element {
  const offersList = useSelector(selectFavoriteOffers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  const offersFavoriteListBySities = offersList
    .reduce((acc:{[key: string]: OfferType[]}, offer) => {
      if(!acc[offer.city.name] && offer.isFavorite) {
        acc[offer.city.name] = [];
      }

      if(offer.isFavorite){
        (acc[offer.city.name]).push(offer);
      }

      return acc;
    }, {});

  const pageCls = cn('page', {'page--favorites-empty': offersList.length > 0});
  const pageMainCls = cn('page__main page__main--favorites', {'page__main--favorites-empty': offersList.length > 0});

  return (
    <div className={pageCls}>
      <Header />

      <main className={pageMainCls}>
        <div className="page__favorites-container container">
          {offersList.length > 0
            ? (
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <FavoritesList
                  offersFavoriteListByCities={offersFavoriteListBySities}
                />
              </section>
            )
            : (
              <section className="favorites favorites--empty">
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
                </div>
              </section>
            )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Favorites;
