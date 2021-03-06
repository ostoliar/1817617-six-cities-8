import {Router} from 'react-router-dom';
import thunk from 'redux-thunk';
import {screen, render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {adaptToClient} from '../../store/reducer/data/api-actions';
import {mockFavoriteOffer} from '../../utils/mock';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {AuthorizationStatus} from '../../const';
import FavoritesList from './favorites-list';
import {getOffersFavoriteListBy–°ities} from '../../utils/utils';

const mockStore = configureMockStore([thunk]);

const history = createMemoryHistory();

describe('Component: FavoritesList', () => {
  it('should render correctly', () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
      },
    });
    const favoriteOffers = getOffersFavoriteListBy–°ities(
      [adaptToClient(mockFavoriteOffer)],
    );

    render(
      <Provider store={store}>
        <Router history={history}>
          <FavoritesList offersFavoriteListByCities={favoriteOffers}/>
        </Router>
      </Provider>,
    );

    screen.getByRole('article').classList.contains('cities__place-card');
  });
});
