import { changeCity, loadOfferList } from '../store/action';

export enum ActionType {
  ChangeCity = 'changeCity',
  LoadOfferList = 'loadOfferList',
}

export type Actions =
  | ReturnType <typeof changeCity>
  | ReturnType <typeof loadOfferList>;
