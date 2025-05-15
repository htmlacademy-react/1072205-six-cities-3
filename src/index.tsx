import { Setting } from './const';
import { offers, favoriteOffers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { Provider } from 'react-redux';
import { store } from './store/store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        placesCount = {Setting.PlacesCount}
        offers = {offers}
        favoriteOffers = {favoriteOffers}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>
);
