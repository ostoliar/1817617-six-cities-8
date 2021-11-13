import {createReducer} from '@reduxjs/toolkit';
import {FIRST_CITY_TAB, SORT_TYPE_DEFAULT} from '../../../const';
import {
  changeCity,
  changeSort,
  selectCurrentOffer
} from './actions';
import {OfferType} from '../../../types/offer';

export type appType = {
  currentCity: string,
  selectedOffer: OfferType | null,
  selectedSort: string,
};

const initialState = {
  currentCity: FIRST_CITY_TAB,
  selectedOffer: null,
  selectedSort: SORT_TYPE_DEFAULT,
};

const appProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state: appType, action) => {
      const {city} = action.payload;
      state.currentCity = city;
    })
    .addCase(selectCurrentOffer, (state: appType, action) => {
      const {offer} = action.payload;
      state.selectedOffer = offer;
    })
    .addCase(changeSort, (state: appType, action) => {
      const {sortType} = action.payload;
      state.selectedSort = sortType;
    });
});

export {appProcess};
