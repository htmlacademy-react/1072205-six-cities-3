import { CHANGE_CITY, SET_OFFERS, ChangeCityAction, SetOffersAction } from '../types/store';
import { Offers } from '../types/offer';

export const changeCity = (city: string): ChangeCityAction => ({
  type: CHANGE_CITY,
  payload: city,
});

export const setOffers = (offers: Offers): SetOffersAction => ({
  type: SET_OFFERS,
  payload: offers,
});
