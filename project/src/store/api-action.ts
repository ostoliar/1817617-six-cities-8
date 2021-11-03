import {
  checkAuthFailure,
  checkAuthRequest,
  checkAuthSuccess,
  loadOfferList,
  loadOffersFailure,
  loadOffersRequest,
  loadOffersSuccess,
  loginFailure,
  loginRequest,
  loginSuccess,
  logoutFailure,
  logoutRequest,
  logoutSuccess,
  requireAuthorization, requireLogout
} from './action';
import {OfferType, OfferAdaptedType} from '../types/offer';
import {APIRoutes, AuthorizationStatus} from '../const';
import {ThunkActionResult} from '../types/action';
import {dropToken, saveToken, Token} from '.././components/services/token';

export type AuthData = {
  login: string;
  password: string;
};

const adaptToClient = (data: OfferAdaptedType[]): OfferType[] => data.map((offer: OfferAdaptedType) => {
  const {
    'is_favorite': del1,
    'is_premium': del2,
    'max_adults': del3,
    'preview_image': del4,
    ...adaptedOffers
  } = {
    ...offer,
    host: {
      ...offer.host,
      isPro: offer.host['is_pro'],
      avatarUrl: offer.host['avatar_url'],
    },
    isFavorite: offer['is_favorite'],
    isPremium: offer['is_premium'],
    maxAdults: offer['max_adults'],
    previewImage: offer['preview_image'],
  };

  delete adaptedOffers.host['avatar_url'];
  delete adaptedOffers.host['is_pro'];

  return adaptedOffers;
});

export const fetchOfferAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(loadOffersRequest());
    try {
      const {data} = await api.get(APIRoutes.Hotels);
      dispatch(loadOfferList(adaptToClient(data)));
      dispatch(loadOffersSuccess());
    } catch (error) {
      const stringError = error as string;
      dispatch(loadOffersFailure(stringError.toString()));
    }
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    dispatch(checkAuthRequest());
    try {
      await api.get(APIRoutes.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(checkAuthSuccess());
    } catch (error) {
      const stringError = error as string;
      dispatch(checkAuthFailure(stringError.toString()));
    }
  };

export const loginAction
  = ({login: email, password}: AuthData): ThunkActionResult =>
    async (dispatch, _getState, api) => {
      dispatch(loginRequest());
      try {
        const {data: {token}}
          = await api.post<{token: Token}>(APIRoutes.Login, {email, password});
        saveToken(token);
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
        dispatch(loginSuccess());
      } catch (error) {
        const stringError = error as string;
        dispatch(loginFailure(stringError.toString()));
      }
    };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    dispatch(logoutRequest());
    try {
      api.delete(APIRoutes.Logout);
      dropToken();
      dispatch(requireLogout());
      dispatch(logoutSuccess());
    } catch (error) {
      const stringError = error as string;
      dispatch(logoutFailure(stringError.toString()));
    }
  };
