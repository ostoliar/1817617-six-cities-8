import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';
import {AuthorizationStatus, FIRST_CITY_TAB} from '../const';

const initialState = {
  currentCity: FIRST_CITY_TAB,
  offers: [],
  currentOffer: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  offersLoading: false,
  checkAuthLoading: false,
  loginLoading: false,
  logoutLoading: false,
  error: null,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, currentCity: action.payload};
    case ActionType.LoadOfferList: {
      const {offers} = action.payload;
      return {
        ...state,
        offers,
      };
    }
    case ActionType.SelectCurrentOffer:
      return {...state, currentOffer: action.payload};
    case ActionType.RequireAuthorization:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    case ActionType.LoadOffersRequest:
      return {...state, offersLoading: true};
    case ActionType.LoadOffersSuccess:
      return {...state, offersLoading: false};
    case ActionType.LoadOffersFailure:
      return {
        ...state,
        offersLoading: false,
        error: action.payload,
      };
    case ActionType.CheckAuthRequest:
      return {...state, checkAuthLoading: true};
    case ActionType.CheckAuthSuccess:
      return {...state, checkAuthLoading: false};
    case ActionType.CheckAuthFailure:
      return {
        ...state,
        checkAuthLoading: false,
        error: action.payload,
      };
    case ActionType.LoginRequest:
      return {...state, loginLoading: true};
    case ActionType.LoginSuccess:
      return {...state, loginLoading: false};
    case ActionType.LoginFailure:
      return {
        ...state,
        checkAuthLoading: false,
        error: action.payload,
      };
    case ActionType.LogoutRequest:
      return {...state, logoutLoading: true};
    case ActionType.LogoutSuccess:
      return {...state, logoutLoading: false};
    case ActionType.LogoutFailure:
      return {
        ...state,
        logoutLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { reducer };
