import { ActionType } from '../types/action';
import { OfferType } from '../types/offer';

export const changeCity = (city: string) => ({
  type: ActionType.ChangeCity,
  payload: city,
} as const);

export const loadOfferList = (offers: OfferType[]) => ({
  type: ActionType.LoadOfferList,
  payload: offers,
} as const);

export const selectCurrentOffer = (offer: OfferType | null) => ({
  type: ActionType.SelectCurrentOffer,
  payload: offer,
} as const);

