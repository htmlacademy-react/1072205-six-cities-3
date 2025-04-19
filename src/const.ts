export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export const SORT_TYPES = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first'
];

export const Setting = {
  PlacesCount: 200,
};

export enum AppRoute {
  Favorites = '/favorites',
  Login = '/login',
  Offer = '/offer',
  Root = '/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
