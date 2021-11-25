import {offerSortType, offerType, valueRatingType} from './types/const';

export const FIRST_CITY_TAB = 'Paris';
export const SORT_TYPE_DEFAULT = 'Popular';

export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_SELECT = 'img/pin-active.svg';

export const cities: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum StatusLoading {
  Idle = 'idle',
  Loading = 'loading',
  Succeeded = 'succeeded',
  Failed = 'failed',
}

export enum AppRoutes {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
}

export enum APIRoutes {
  Hotels = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Nearby = '/nearby',
  Comments = '/comments',
  Favorite = '/favorite',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const offerTypes: offerType = {
  apartment: 'Apartment',
  room: 'Private Room',
  house: 'House',
  hotel: 'Hotel',
};

export const valueRatings: valueRatingType = {
  '5': 'perfect',
  '4': 'good',
  '3': 'not bad',
  '2': 'badly',
  '1': 'terribly',
};

export const offerSortTypes: offerSortType = {
  Popular: 'Popular',
  PriceDown: 'Price: low to high',
  PriceUp: 'Price: high to low',
  RatingDown: 'Top rated first',
};

export enum Error {
Offer = 'Не удалось получить данные. Попробуйте попозже',
Nearby = 'Не удалось получить данные. Попробуйте попозже',
Fetchreview = 'Не удалось получить комментарии. Попробуйте попозже',
Postreview = 'Не удалось отправить комментарий. Попробуйте попозже',
Fetchfavorite = 'Не удалось получить данные. Попробуйте попозже',
Postfavorite = 'Не удалось отправить данные. Попробуйте попозже',
Login = 'Не удалось залогиниться. Попробуйте попозже',
}
