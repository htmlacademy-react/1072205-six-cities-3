import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../const';
import Main from '../pages/main';
import Favorites from '../pages/favorites';
import Login from '../pages/login';
import Offer from '../pages/offer';

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
