import { ActionType } from '../types/action';
import { OfferType } from '../types/offer';
import {AuthorizationStatus} from '../const';

export const changeCity = (city: string) => ({
  type: ActionType.ChangeCity,
  payload: city,
} as const);

export const loadOfferList = (offers: OfferType[]) => ({
  type: ActionType.LoadOfferList,
  payload: {
    offers,
  },
} as const);

export const selectCurrentOffer = (offer: OfferType | null) => ({
  type: ActionType.SelectCurrentOffer,
  payload: offer,
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export const loadOffersRequest = () => ({
  type: ActionType.LoadOffersRequest,
} as const);

export const loadOffersSuccess = () => ({
  type: ActionType.LoadOffersSuccess,
} as const);

export const loadOffersFailure = (erorr: string | null) => ({
  type: ActionType.LoadOffersFailure,
  payload: erorr,
} as const);

export const checkAuthRequest = () => ({
  type: ActionType.CheckAuthRequest,
} as const);

export const checkAuthSuccess = () => ({
  type: ActionType.CheckAuthSuccess,
} as const);

export const checkAuthFailure = (erorr: string | null) => ({
  type: ActionType.CheckAuthFailure,
  payload: erorr,
} as const);

export const loginRequest = () => ({
  type: ActionType.LoginRequest,
} as const);

export const loginSuccess = () => ({
  type: ActionType.LoginSuccess,
} as const);

export const loginFailure = (erorr: string | null) => ({
  type: ActionType.LoginFailure,
  payload: erorr,
} as const);

export const logoutRequest = () => ({
  type: ActionType.LogoutRequest,
} as const);

export const logoutSuccess = () => ({
  type: ActionType.LogoutSuccess,
} as const);

export const logoutFailure = (erorr: string | null) => ({
  type: ActionType.LogoutFailure,
  payload: erorr,
} as const);

