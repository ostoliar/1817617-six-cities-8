import {AxiosInstance} from 'axios';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {
  changeCity,
  checkAuthFailure,
  checkAuthRequest,
  checkAuthSuccess,
  loadOfferList, loadOffersFailure, loadOffersRequest, loadOffersSuccess,
  loginFailure,
  loginRequest,
  loginSuccess,
  logoutFailure,
  logoutRequest,
  logoutSuccess,
  requireAuthorization, requireLogout, selectCurrentOffer
} from '../store/action';
import {State} from './state';

export enum ActionType {
  ChangeCity = 'changeCity',
  LoadOfferList = 'loadOfferList',
  SelectCurrentOffer = 'selectCurrentOffer',
  RequireAuthorization = 'requireAuthorization',
  RequireLogout = 'requireLogout',
  LoadOffersRequest = 'LOAD_OFFERS_REQUEST',
  LoadOffersSuccess = 'LOAD_OFFERS_SUCCESS',
  LoadOffersFailure = 'LOAD_OFFERS_FAILURE',
  CheckAuthRequest = 'CHECK_AUTH_REQUEST',
  CheckAuthSuccess = 'CHECK_AUTH_SUCCESS',
  CheckAuthFailure = 'CHECK_AUTH_FAILURE',
  LoginRequest = 'LOGIN_REQUEST',
  LoginSuccess = 'LOGIN_AUTH_SUCCESS',
  LoginFailure = 'LOGIN_AUTH_FAILURE',
  LogoutRequest = 'LOGOUT_REQUEST',
  LogoutSuccess = 'LOGOUT_AUTH_SUCCESS',
  LogoutFailure = 'LOGOUT_AUTH_FAILURE',
}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof loadOfferList>
  | ReturnType<typeof selectCurrentOffer>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof loadOffersRequest>
  | ReturnType<typeof loadOffersSuccess>
  | ReturnType<typeof loadOffersFailure>
  | ReturnType<typeof checkAuthRequest>
  | ReturnType<typeof checkAuthSuccess>
  | ReturnType<typeof checkAuthFailure>
  | ReturnType<typeof loginRequest>
  | ReturnType<typeof loginSuccess>
  | ReturnType<typeof loginFailure>
  | ReturnType<typeof logoutRequest>
  | ReturnType<typeof logoutSuccess>
  | ReturnType<typeof logoutFailure>;

export type ThunkActionResult<R = Promise<void>>
  = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
