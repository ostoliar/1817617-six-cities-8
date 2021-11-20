import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {screen, render} from '@testing-library/react';
import {adaptToClient} from '../../store/reducer/data/api-actions';
import {mockOffer} from '../../utils/mock';
import OfferProperty from './offer-property';

const history = createMemoryHistory();

describe('Component: OfferProperty', () => {
  const good = adaptToClient(mockOffer).goods[0];

  it('should render correctly', () => {
    render(
      <Router history={history}>
        <OfferProperty good={good}/>
      </Router>,
    );

    screen.getByRole('listitem').classList.contains('property__inside-item');
  });

});
