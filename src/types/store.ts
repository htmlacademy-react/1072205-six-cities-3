import { Offers } from '../types/offer';

export type State = {
  city: string;
  offers: Offers;
};

export const CHANGE_CITY = 'changeCity' as const;
export const SET_OFFERS = 'setOffers' as const;

export type ChangeCityAction = {
  type: typeof CHANGE_CITY;
  payload: string;
};

export type SetOffersAction = {
  type: typeof SET_OFFERS;
  payload: Offers;
};

export type AppAction = ChangeCityAction | SetOffersAction;
