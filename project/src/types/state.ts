import { OfferType } from './offer';

export type State = {
  currentCity: string,
  offers: OfferType[],
  currentOffer: OfferType | null,
};
