import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Offers, FavoriteOffers } from '../../types/offer';
import { Reviews } from '../../types/review';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';

type MainPageProps = {
  placesCount: number;
  offers: Offers;
}

type FavoritesPageProps = {
  favoriteOffers: FavoriteOffers;
}

type OfferPageProps = {
  reviews: Reviews;
}

export default function App(
  {placesCount, offers, favoriteOffers, reviews}: MainPageProps & FavoritesPageProps & OfferPageProps
): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage placesCount={placesCount} offers={offers} />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritesPage favoriteOffers={favoriteOffers} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={`${AppRoute.Offer}/:id`}
          element={<OfferPage reviews={reviews}/>}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
