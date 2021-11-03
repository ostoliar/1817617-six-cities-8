import FavoritesList from '../../components/favorites-list/favorites-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import { OfferType } from '../../types/offer';

type FavoritesPageScreenProps = {
  offersList: OfferType[];
}

function FavoritesPageScreen({offersList}: FavoritesPageScreenProps): JSX.Element {
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

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="/#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList
              offersFavoriteListByCities={offersFavoriteListBySities}
            />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default FavoritesPageScreen;
