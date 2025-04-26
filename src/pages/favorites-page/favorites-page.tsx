import { FavoriteOffers } from '../../types/offer';
import Header from '../../components/header/header';
import Logo from '../../components/common/logo';
import FavoritesList from '../../components/favorites-list/favorites-list';

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
            <FavoritesList favoriteOffers={favoriteOffers} />
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Logo listClassPrefix="footer" />
      </footer>
    </div>
  );
}
