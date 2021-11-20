import {Router} from 'react-router-dom';
import thunk from 'redux-thunk';
import {screen, render} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {adaptToClient} from '../../store/reducer/data/api-actions';
import {mockOffer} from '../../utils/mock';
import CardsList from './card-list';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {AuthorizationStatus} from '../../const';

const mockStore = configureMockStore([thunk]);

const history = createMemoryHistory();

describe('Component: CardsList', () => {
  it('should render correctly', () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
      },
    });
    const offers = [adaptToClient(mockOffer)];

    render(
      <Provider store={store}>
        <Router history={history}>
          <CardsList offersList={offers} />
        </Router>
      </Provider>,
    );

    screen.getByRole('article').classList.contains('cities__place-card');
  });
});
