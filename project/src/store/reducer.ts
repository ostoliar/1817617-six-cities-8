import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';
import { FIRST_CITY_TAB } from '../const';
import { offers } from '../mock/offers';

const initialState = {
  currentCity: FIRST_CITY_TAB,
  offers: offers,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, currentCity: action.payload};
    case ActionType.LoadOfferList:
      return {...state, offers: action.payload};
    default:
      return state;
  }
};

export { reducer };
