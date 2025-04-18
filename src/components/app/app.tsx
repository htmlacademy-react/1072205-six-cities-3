import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import FavoritesPage from '../../pages/favourites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

type MainPageProps = {
  placesCount: number;
}

export default function App({placesCount}: MainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage placesCount={placesCount} />}
        />
                <Route
          path={AppRoute.Favorites}
          element={<FavoritesPage />}
        />
                <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
                <Route
          path={AppRoute.Offer}
          element={<OfferPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
