import { offers } from '../mocks/offers';
import { State, AppAction, CHANGE_CITY, SET_OFFERS } from '../types/store';

const initialState: State = {
  city: 'Paris',
  offers: offers.filter((offer) => offer.city.name === 'Paris'),
};

export function offersReducer(state: State = initialState, action: AppAction): State {
  switch (action.type) {
    case CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case SET_OFFERS:
      return {
        ...state,
        offers: action.payload,
      };
    default:
      return state;
  }
}
