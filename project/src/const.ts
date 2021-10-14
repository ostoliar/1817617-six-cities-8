export enum AppRoute {
    SignIn = '/login',
    Favorites = '/favorites',
    Room = '/offer',
    Main = '/'
  }

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
  }

  type offerType = {
    [key: string]: string,
  }

export const offerTypes: offerType = {
  apartment: 'Apartment',
  room: 'Room',
  house: 'House',
  hotel: 'Hotel',
};

export const STARS_COUNT_RATING = 5;
