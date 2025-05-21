import { State, AppAction, CHANGE_CITY } from '../types/store';

const initialState: State = {
  activeCity: 'Paris',
};

export function offersReducer(state: State = initialState, action: AppAction): State {
  switch (action.type) {
    case CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload,
      };
    default:
      return state;
  }
}
