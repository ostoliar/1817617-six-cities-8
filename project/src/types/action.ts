import { changeCity, loadOfferList, selectCurrentOffer } from '../store/action';

export enum ActionType {
  ChangeCity = 'changeCity',
  LoadOfferList = 'loadOfferList',
  SelectCurrentOffer = 'selectCurrentOffer',
}

export type Actions =
  | ReturnType <typeof changeCity>
  | ReturnType <typeof loadOfferList>
  | ReturnType <typeof selectCurrentOffer>;
