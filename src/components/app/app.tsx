import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import Favorites from '../../pages/favourites-page/favorites-page';
import Login from '../../pages/login-page/login-page';
import Main from '../../pages/main-page/main-page';
import Offer from '../../pages/offer-page/offer-page';

type MainPageProps = {
  placesCount: number;
}

export default function App({placesCount}: MainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Main placesCount={placesCount} />}
        />
                <Route
          path={AppRoute.Favorites}
          element={<Favorites />}
        />
                <Route
          path={AppRoute.Login}
          element={<Login />}
        />
                <Route
          path={AppRoute.Offer}
          element={<Offer />}
        />
      </Routes>
    </BrowserRouter>
  );
}
