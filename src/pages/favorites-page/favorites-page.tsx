import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { FavoriteOffers } from '../../types/offer';
import Header from '../../components/header/header';
import PlaceCard from '../../components/places/place-card';

type FavoritesPageProps = {
  favoriteOffers: FavoriteOffers;
}

export default function FavoritesPage({favoriteOffers}: FavoritesPageProps): JSX.Element {
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link className="locations__item-link" to="#">
                      <span>Amsterdam</span>
                    </Link>
                  </div>
                </div>
                <div className="favorites__places">
                  {favoriteOffers.map((offer) => (
                    <PlaceCard offer={offer} listClassPrefix="favorites" />
                  ))}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Root}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}
