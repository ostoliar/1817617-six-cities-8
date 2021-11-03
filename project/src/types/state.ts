import { OfferType } from './offer';
import {AuthorizationStatus} from '../const';

export type State = {
  currentCity: string,
  offers: OfferType[],
  currentOffer: OfferType | null,
  authorizationStatus: AuthorizationStatus,
  offersLoading: true | false,
  checkAuthLoading: true | false,
  loginLoading: true | false,
  logoutLoading: true | false,
  error: string | null,
};
